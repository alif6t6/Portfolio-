import { motion } from 'motion/react';
import { values, clients } from '../data';

export function ValuesAndClients() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Urbanist',sans-serif]"
            >
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Values</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {values.map((value) => (
              <div
                key={value.name}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:scale-[1.02] transition-transform duration-300 border border-slate-800 hover:border-slate-600"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
                  <value.icon size={20} />
                </div>
                <h4 className="text-white font-medium text-sm">{value.name}</h4>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Target Clients & Availability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 font-['Urbanist',sans-serif]">Target Clients</h3>
            <div className="flex flex-wrap gap-3">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-slate-700/50 hover:border-cyan-500/30 transition-colors bg-[#0f172a]"
                >
                  <client.icon size={16} className="text-cyan-400" />
                  <span className="text-slate-200 text-sm font-medium">{client.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-card p-8 rounded-3xl border border-[#22D3EE]/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/10 blur-[50px]"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 font-['Urbanist',sans-serif]">Current Availability</h3>
            
            <div className="flex items-center gap-3 mb-6 bg-[#10B981]/10 w-fit px-4 py-2 rounded-full border border-[#10B981]/20">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
               </span>
               <span className="text-[#10B981] font-semibold text-sm">Available for New Projects</span>
            </div>

            <div className="space-y-4 mb-8">
               <p className="text-slate-300 text-sm flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"></span>
                 Business Websites
               </p>
               <p className="text-slate-300 text-sm flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"></span>
                 Landing Pages
               </p>
               <p className="text-slate-300 text-sm flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"></span>
                 Portfolio Websites
               </p>
               <p className="text-slate-300 text-sm flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"></span>
                 E-commerce Websites
               </p>
            </div>

            <div className="pt-6 border-t border-slate-700/50">
               <p className="text-slate-400 text-sm">Estimated Delivery Time</p>
               <p className="text-white font-bold text-xl mt-1">1–14 Days</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
