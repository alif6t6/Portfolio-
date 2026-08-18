import { motion } from 'motion/react';
import { projects } from '../data';

export function Projects() {
  return (
    <section id="projects" className="py-10 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Urbanist',sans-serif] will-change-[opacity,transform,filter]"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-slate-400 max-w-2xl mx-auto font-['Inter',sans-serif] text-lg will-change-[opacity,transform,filter]"
            >
              A selection of premium web experiences crafted with attention to detail.
            </motion.p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-12 lg:gap-16 items-center mb-16 will-change-[opacity,transform,filter]`}
              >
                {/* Image Showcase */}
                <div className="w-full lg:w-3/5 group relative rounded-[2rem] overflow-hidden glass-panel p-2 shadow-xl shadow-black/20 card-hover-3d interactive-ripple cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#22D3EE]/20 to-[#6D28D9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none rounded-[2rem]"></div>
                  <div className="relative rounded-3xl overflow-hidden bg-slate-900 aspect-[16/9] ring-1 ring-white/10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-all duration-700 ease-out will-change-transform bg-slate-900"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      style={{ opacity: 0 }}
                      onLoad={(e) => { e.currentTarget.style.opacity = '1'; }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-2/5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-8 bg-[#22D3EE]"></span>
                    <span className="text-[#22D3EE] font-semibold text-sm tracking-wider uppercase font-mono">{project.category}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#22D3EE] transition-colors">{project.title}</h3>
                  
                  <div className="glass-panel p-6 rounded-2xl relative">
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed relative z-10">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
