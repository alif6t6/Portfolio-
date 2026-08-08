import { motion } from 'motion/react';
import { LayoutTemplate, MonitorSmartphone, Zap, Code, Users, MessageSquare } from 'lucide-react';

export function About() {
  const focusAreas = [
    { name: 'Modern UI Design', icon: LayoutTemplate },
    { name: 'Responsive Development', icon: MonitorSmartphone },
    { name: 'Clean Code', icon: Code },
    { name: 'Performance Optimization', icon: Zap },
    { name: 'User Experience', icon: Users },
    { name: 'Professional Communication', icon: MessageSquare },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left: Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="will-change-[opacity,transform,filter]"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Urbanist',sans-serif]">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Me</span>
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-['Inter',sans-serif]">
                <p>
                  I am a Website Designer and Front-End Developer specializing in creating modern, responsive, and user-focused websites. I enjoy transforming ideas into clean, functional, and visually engaging digital experiences.
                </p>
                <p>
                  Since 2025, I have been building personal and independent web projects with a strong focus on responsive layouts, clean code, performance, and intuitive user experiences. Every project is developed with attention to detail, ensuring it is fast, accessible, mobile-friendly, and easy to use.
                </p>
                <p>
                  I believe that great websites are built through thoughtful planning, modern design principles, and a commitment to delivering high-quality results.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual/Stats */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="glass-card p-8 md:p-10 rounded-3xl card-hover-3d interactive-ripple will-change-[opacity,transform,filter]"
            >
              <h3 className="text-xl font-bold text-white mb-8 font-['Urbanist',sans-serif]">Core Focus</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-blue-500/20">
                      <area.icon size={20} />
                    </div>
                    <span className="text-slate-200 font-medium">{area.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
