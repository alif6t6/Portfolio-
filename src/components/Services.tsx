import { motion } from 'motion/react';
import { services } from '../data';

export function Services() {
  return (
    <section id="services" className="py-10 md:py-16 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Urbanist',sans-serif]"
            >
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg font-['Inter',sans-serif]"
            >
              Specialized solutions tailored for modern businesses and personal brands.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-[#22D3EE]/30"
            >
              {/* Gradient glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/0 via-[#6D28D9]/0 to-[#22D3EE]/0 group-hover:from-[#22D3EE]/10 group-hover:via-[#6D28D9]/5 group-hover:to-[#22D3EE]/10 transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-[#22D3EE] mb-8 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
