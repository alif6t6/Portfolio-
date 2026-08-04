import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Send, Copy, CheckCircle2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Let's Work <span className="text-gradient">Together</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 mb-12"
        >
          Ready to create something extraordinary? Get in touch and let's discuss your project.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Profile Photo in Contact */}
          <div className="flex justify-center mb-10">
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden border-[3px] border-[#22D3EE]/20 shadow-2xl relative group transform-gpu"
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#22D3EE]/20 to-[#6D28D9]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300"></div>
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
             </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform"
            >
              <Mail size={18} />
              Send Email
            </a>
            
            <a 
              href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#25D366]/10 text-[#25D366] font-bold hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            
            <a 
              href={`https://t.me/${personalInfo.telegram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#0088cc]/10 text-[#22a6ee] font-bold hover:bg-[#0088cc]/20 transition-colors border border-[#0088cc]/20"
            >
              <Send size={18} />
              Telegram
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-400 font-medium">Usually replies within 24 hours.</p>
        </motion.div>
      </div>
    </section>
  );
}
