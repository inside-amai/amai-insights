import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black bg-perspective-grid relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* 404 Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Large 404 */}
          <h1 className="text-[120px] sm:text-[180px] font-light tracking-tighter leading-none text-white/10 select-none">
            404
          </h1>
          
          {/* Decorative line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto -mt-4 mb-8" />
          
          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-3 font-mono">
              Route Not Found
            </p>
            <p className="text-white/60 text-lg font-light mb-2">
              The requested path does not exist
            </p>
            <p className="text-white/30 text-sm font-mono mb-12">
              {location.pathname}
            </p>
          </motion.div>
          
          {/* Return button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 text-sm tracking-wide group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to AMAI Labs
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Footer tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="absolute bottom-8 text-white/20 text-xs tracking-[0.2em] uppercase font-mono"
        >
          AMAI Research
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
