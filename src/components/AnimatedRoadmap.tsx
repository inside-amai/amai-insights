import { motion } from 'framer-motion';
import { Settings, Network, Shield, CreditCard, Zap, Star, Search, TestTube } from 'lucide-react';

const AnimatedRoadmap = () => {
  return (
    <div className="w-full p-8 bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="relative"
      >
        {/* Roadmap Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 rotate-90 origin-left absolute -left-16 top-32"
        >
          <h3 className="text-2xl font-bold text-white tracking-wider">ROADMAP</h3>
        </motion.div>

        {/* Timeline Headers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between mb-8 ml-32"
        >
          <div className="text-center">
            <div className="text-lg font-semibold text-white">2025 Q3</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white">2025 Q3</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white">2026 Q4</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white">2026 Q1</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white">2026 EOY</div>
          </div>
        </motion.div>

        {/* Live Alpha Grid - Completed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 ml-8"
        >
          <div className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg p-4 max-w-xs">
            <h4 className="text-cyan-accent font-semibold mb-2">Live Alpha Grid</h4>
            <p className="text-sm text-white/80 mb-2">(Completed)</p>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-cyan-accent/30 rounded p-2 flex items-center justify-center">
                <Settings className="w-4 h-4 text-cyan-accent" />
              </div>
              <div className="bg-purple-accent/30 rounded p-2 flex items-center justify-center">
                <Network className="w-4 h-4 text-purple-accent" />
              </div>
              <div className="bg-cyan-accent/30 rounded p-2 flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-accent" />
              </div>
              <div className="bg-purple-accent/30 rounded p-2 flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-purple-accent" />
              </div>
            </div>
            
            <p className="text-xs text-white/70">Stability: 40+ testers, <br/>10k+ ops, sub-500ms latency</p>
          </div>

          <div className="bg-purple-accent/20 border border-purple-accent/30 rounded-lg p-4 max-w-xs mt-4">
            <h4 className="text-purple-accent font-semibold">Modern UI Wizard for</h4>
            <p className="text-purple-accent font-semibold">PTB Builder SDK</p>
          </div>
        </motion.div>

        {/* Flow Path 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-between mb-6 ml-32"
        >
          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-accent text-sm font-medium">Wallet Connect</span>
          </motion.div>
          
          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-cyan-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-cyan-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-accent text-sm font-medium">zkLogin</span>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-cyan-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-cyan-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-purple-accent/20 border border-purple-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-accent text-sm font-medium">On-chain Oracle</span>
            <div className="text-xs text-purple-accent/80">(Trust Scores)</div>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-purple-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-purple-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <Network className="w-4 h-4 text-cyan-accent mb-1" />
            <span className="text-cyan-accent text-sm font-medium">Swarm</span>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-cyan-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-cyan-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-accent text-sm font-medium">Real-Time Settlement</span>
          </motion.div>
        </motion.div>

        {/* Flow Path 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-between mb-6 ml-32"
        >
          <motion.div 
            className="bg-purple-accent/20 border border-purple-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-purple-accent mb-1" />
            <span className="text-purple-accent text-sm font-medium">Swarm Dashboard</span>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-purple-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-purple-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-purple-accent/20 border border-purple-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-accent text-sm font-medium">Bond/Slash Contracts</span>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-purple-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-purple-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-purple-accent/20 border border-purple-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-purple-accent mb-1" />
            <span className="text-purple-accent text-sm font-medium">Skill-NFT Registry</span>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-purple-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-purple-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-accent text-sm font-medium">Royalty Cluster</span>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-cyan-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-cyan-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <Search className="w-4 h-4 text-cyan-accent mb-1" />
            <span className="text-cyan-accent text-sm font-medium">RLS/athZ Policies</span>
          </motion.div>
        </motion.div>

        {/* Flow Path 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center justify-between ml-32"
        >
          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-accent text-sm font-medium">Swalet Dashboard</span>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-cyan-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-cyan-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-purple-accent/20 border border-purple-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-accent text-sm font-medium">Pay-per-Compute State Channels</span>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-purple-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-purple-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-accent text-sm font-medium">Containerized LLM</span>
            <div className="text-xs text-cyan-accent/80">LLM⚡Channels</div>
            <div className="text-xs text-cyan-accent/80 mt-1">REST/gRPC EngePunds</div>
          </motion.div>

          <div className="flex items-center mx-2">
            <div className="w-8 h-0.5 bg-cyan-accent"></div>
            <div className="w-0 h-0 border-l-4 border-l-cyan-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

          <motion.div 
            className="bg-cyan-accent/20 border border-cyan-accent/30 rounded-lg px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <TestTube className="w-4 h-4 text-cyan-accent mb-1" />
            <span className="text-cyan-accent text-sm font-medium">Testing Suites</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedRoadmap;