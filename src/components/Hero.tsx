import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-28 pb-8 md:pb-12 overflow-hidden">
      {/* Background elements removed for performance */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-2 tracking-tight font-['Urbanist',sans-serif]"
          >
            <span className="text-2xl md:text-3xl font-medium text-slate-300 block mb-2 font-mono">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-sm">{personalInfo.name.toUpperCase()}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase mb-6 font-['Urbanist',sans-serif] text-transparent bg-clip-text bg-[linear-gradient(to_right,#ef4444,#f97316,#f59e0b,#10b981,#3b82f6,#6366f1,#8b5cf6)]"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-['Inter',sans-serif]"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group interactive-ripple premium-hover outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg flex items-center justify-center gap-2 backdrop-blur-sm interactive-ripple premium-hover outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.1, ease: "easeOut" },
            scale: { duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="flex-1 relative flex items-center justify-center w-full transform-gpu"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px]">
            {/* Professional Borders & Rings */}
            <div className="absolute inset-0 rounded-full border-[3px] border-[#22D3EE]/30 border-dashed animate-[spin_20s_linear_infinite] transform-gpu will-change-transform shadow-[0_0_20px_rgba(34,211,238,0.2)]"></div>
            <div className="absolute inset-4 rounded-full border-[2px] border-[#6D28D9]/40 animate-[spin_15s_linear_infinite_reverse] transform-gpu will-change-transform shadow-[0_0_20px_rgba(109,40,217,0.2)]"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#6D28D9]/10 to-[#22D3EE]/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)] transform-gpu">
               <motion.img
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-[92%] h-[92%] object-cover rounded-full shadow-2xl ring-8 ring-[#0b0f19] relative z-10 transform-gpu will-change-transform transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  style={{ opacity: 0 }}
                  onLoad={(e) => { e.currentTarget.style.opacity = '1'; }}
                />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
