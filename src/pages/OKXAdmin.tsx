import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface ConnectionStats {
  id: string;
  address: string;
  chain: string;
  created_at: string;
  connection_count: number;
}

const OKXAdmin = () => {
  const [stats, setStats] = useState<ConnectionStats[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadStats = async () => {
    setLoading(true);
    setError('');
    
    try {
      const { data, error } = await supabase.rpc('get_okx_connections_for_admin');
      
      if (error) throw error;
      
      setStats(data || []);
    } catch (err) {
      console.error('Error loading stats:', err);
      setError('Failed to load connection statistics. Admin access required.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Header />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center font-sans pt-20">
        <div className="w-full max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-normal tracking-wide mb-8 text-white text-center">
            OKX Connection Statistics
          </h1>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            {loading && (
              <div className="text-center text-gray-400">Loading statistics...</div>
            )}
            
            {error && (
              <div className="text-center text-red-400 mb-4">{error}</div>
            )}
            
            {!loading && !error && stats.length === 0 && (
              <div className="text-center text-gray-400">No connections recorded yet.</div>
            )}
            
            {!loading && !error && stats.length > 0 && (
              <>
                <div className="mb-6">
                  <h2 className="text-xl text-white mb-4">Connection Summary</h2>
                  <div className="text-sm text-gray-400 mb-4">
                    Individual wallet addresses are protected for privacy. Only aggregated statistics are shown.
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-gray-300 py-3 px-4">Chain</th>
                        <th className="text-gray-300 py-3 px-4">Date</th>
                        <th className="text-gray-300 py-3 px-4">Connections</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.map((stat, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                          <td className="text-white py-3 px-4 capitalize">{stat.chain}</td>
                          <td className="text-gray-300 py-3 px-4">
                            {new Date(stat.created_at).toLocaleDateString()}
                          </td>
                          <td className="text-white py-3 px-4">{stat.connection_count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-xs text-gray-500">
                  <strong>Privacy Notice:</strong> Individual wallet addresses are not displayed to protect user privacy. 
                  For airdrop distribution, contact the system administrator.
                </div>
              </>
            )}
            
            <div className="mt-6 text-center">
              <button
                onClick={loadStats}
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-60"
              >
                {loading ? 'Loading...' : 'Refresh Statistics'}
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer transparent={true} />
    </div>
  );
};

export default OKXAdmin;