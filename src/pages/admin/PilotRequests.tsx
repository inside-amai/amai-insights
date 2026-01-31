import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Check, X, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { PasswordGate } from '@/components/PasswordGate';

interface PilotRequest {
  id: string;
  name: string;
  organization: string;
  use_case: string;
  why_amai: string;
  linkedin_website: string | null;
  status: string;
  created_at: string;
}

const PilotRequests = () => {
  const [requests, setRequests] = useState<PilotRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('pilot_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching pilot requests:', error);
        toast({
          title: 'Error fetching requests',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      setRequests(data || []);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdating(id);
    try {
      const { error } = await supabase
        .from('pilot_requests')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        toast({
          title: 'Error updating status',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      setRequests(prev => 
        prev.map(req => req.id === id ? { ...req, status: newStatus } : req)
      );

      toast({
        title: 'Status updated',
        description: `Request marked as ${newStatus}`,
      });
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setUpdating(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-600 hover:bg-green-700 text-white">Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-600 hover:bg-red-700 text-white">Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-600 hover:bg-yellow-700 text-white">Pending</Badge>;
    }
  };

  return (
    <PasswordGate 
      storageKey="admin-pilot-auth" 
      title="Admin Dashboard" 
      subtitle="Internal access only"
    >
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">
              Pilot Access Requests
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {requests.length} total request{requests.length !== 1 ? 's' : ''}
            </p>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            ) : requests.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No pilot access requests yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead className="text-muted-foreground">Name</TableHead>
                      <TableHead className="text-muted-foreground">Organization</TableHead>
                      <TableHead className="text-muted-foreground">Use Case</TableHead>
                      <TableHead className="text-muted-foreground">Why AMAI</TableHead>
                      <TableHead className="text-muted-foreground">Link</TableHead>
                      <TableHead className="text-muted-foreground">Status</TableHead>
                      <TableHead className="text-muted-foreground">Date</TableHead>
                      <TableHead className="text-muted-foreground">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id} className="border-border">
                        <TableCell className="font-medium text-foreground">
                          {request.name}
                        </TableCell>
                        <TableCell className="text-foreground">
                          {request.organization}
                        </TableCell>
                        <TableCell className="text-foreground max-w-xs truncate" title={request.use_case}>
                          {request.use_case}
                        </TableCell>
                        <TableCell className="text-foreground max-w-xs truncate" title={request.why_amai}>
                          {request.why_amai}
                        </TableCell>
                        <TableCell>
                          {request.linkedin_website ? (
                            <a 
                              href={request.linkedin_website.startsWith('http') ? request.linkedin_website : `https://${request.linkedin_website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline inline-flex items-center gap-1"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(request.status)}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {format(new Date(request.created_at), 'MMM d, yyyy')}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {request.status !== 'approved' && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                                onClick={() => updateStatus(request.id, 'approved')}
                                disabled={updating === request.id}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                            )}
                            {request.status !== 'rejected' && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                                onClick={() => updateStatus(request.id, 'rejected')}
                                disabled={updating === request.id}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </PasswordGate>
  );
};

export default PilotRequests;
