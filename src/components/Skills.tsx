import { motion } from 'motion/react';
import { skills } from '../data';

export function Skills() {
  return (
    <section id="skills" className="py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Urbanist',sans-serif]"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto font-['Inter',sans-serif] text-lg"
          >
            A comprehensive toolkit designed for building premium digital experiences.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:bg-[#22D3EE]/20 group-hover:text-[#22D3EE] text-slate-300 transition-colors">
                <skill.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-medium text-sm md:text-base group-hover:text-[#22D3EE] transition-colors font-mono">
                {skill.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
