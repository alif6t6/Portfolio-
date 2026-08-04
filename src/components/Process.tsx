import { motion } from 'motion/react';
import { process, stack } from '../data';

export function ProcessAndStack() {
  return (
    <section id="process" className="py-24 relative bg-[#0f172a]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Working Process */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Urbanist',sans-serif]"
            >
              Working <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Process</span>
            </motion.h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              A structured, transparent approach to delivering exceptional results on time.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4 relative z-10">
              {process.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mb-4 text-cyan-400 border border-slate-700/50 relative group hover:border-blue-500/50 hover:scale-105 transition-all bg-[#0f172a]">
                    <step.icon size={20} />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 border border-slate-800 flex items-center justify-center text-[9px] font-bold text-white shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="text-slate-300 font-semibold text-xs">{step.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Development Stack */}
        <div>
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold text-white mb-6 font-['Urbanist',sans-serif]"
            >
              Development Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto font-medium"
            >
              Technologies I use to build fast, responsive, modern, and user-friendly websites with clean code and optimized performance.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {stack.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 glass-card px-6 py-4 rounded-xl hover:-translate-y-1 transition-transform border border-slate-800 hover:border-slate-600"
              >
                <item.icon size={20} className="text-cyan-400" />
                <span className="text-slate-200 font-semibold">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
