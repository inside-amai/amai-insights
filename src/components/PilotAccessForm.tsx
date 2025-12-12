import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const pilotRequestSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  organization: z.string().trim().min(1, 'Organization is required').max(200, 'Organization must be less than 200 characters'),
  use_case: z.string().trim().min(1, 'Use case is required').max(1000, 'Use case must be less than 1000 characters'),
  why_amai: z.string().trim().min(1, 'This field is required').max(1000, 'Must be less than 1000 characters'),
  linkedin_website: z.string().trim().max(500, 'Must be less than 500 characters').optional().or(z.literal('')),
});

type PilotRequestFormData = z.infer<typeof pilotRequestSchema>;

interface PilotAccessFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PilotAccessForm = ({ isOpen, onClose }: PilotAccessFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<PilotRequestFormData>({
    resolver: zodResolver(pilotRequestSchema),
    defaultValues: {
      name: '',
      organization: '',
      use_case: '',
      why_amai: '',
      linkedin_website: '',
    },
  });

  const onSubmit = async (data: PilotRequestFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('pilot_requests').insert({
        name: data.name,
        organization: data.organization,
        use_case: data.use_case,
        why_amai: data.why_amai,
        linkedin_website: data.linkedin_website || null,
      });

      if (error) throw error;

      toast({
        title: 'Request submitted',
        description: 'We will review your request and be in touch.',
      });

      form.reset();
      onClose();
    } catch (error) {
      toast({
        title: 'Submission failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
          >
            <div 
              className="relative w-full max-w-lg bg-black border border-white/10 rounded-[4px] p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/30 hover:text-white/60 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl font-light text-white tracking-tight mb-3">
                  Request Pilot Access
                </h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  AMAI Labs selectively supports pilot deployments for infrastructure partners, research institutions, and enterprise systems exploring autonomous agent coordination.
                </p>
              </div>

              {/* Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/50 font-normal">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/[0.03] border-white/10 text-white/90 text-sm placeholder:text-white/20 focus:border-white/20 rounded-[3px]"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/50 font-normal">Organization</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/[0.03] border-white/10 text-white/90 text-sm placeholder:text-white/20 focus:border-white/20 rounded-[3px]"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="use_case"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/50 font-normal">Use Case</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={3}
                            className="bg-white/[0.03] border-white/10 text-white/90 text-sm placeholder:text-white/20 focus:border-white/20 rounded-[3px] resize-none"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="why_amai"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/50 font-normal">Why AMAI</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={3}
                            className="bg-white/[0.03] border-white/10 text-white/90 text-sm placeholder:text-white/20 focus:border-white/20 rounded-[3px] resize-none"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="linkedin_website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-white/50 font-normal">
                          LinkedIn / Website <span className="text-white/30">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/[0.03] border-white/10 text-white/90 text-sm placeholder:text-white/20 focus:border-white/20 rounded-[3px]"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white/[0.08] hover:bg-white/[0.12] text-white/80 text-sm font-normal border border-white/10 rounded-[3px] h-10"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-white/30 text-center leading-relaxed pt-2">
                    Pilot access is reviewed on a rolling basis. Not all requests are accepted.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
