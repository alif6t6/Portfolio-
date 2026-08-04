import { personalInfo } from '../data';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0b0f19]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <a href="#" aria-label="Back to Top" className="text-2xl font-black tracking-tight text-white mb-2 font-['Urbanist',sans-serif] interactive-ripple p-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]">
          {personalInfo.name}
        </a>
        
        <p className="text-cyan-400 mb-6 font-medium tracking-wide text-sm uppercase font-mono">
          {personalInfo.title}
        </p>

        <p className="text-slate-400 mb-10 text-lg italic leading-relaxed">
          "Creating modern, responsive, and user-friendly websites that deliver exceptional digital experiences."
        </p>

        <div className="flex flex-col gap-2 items-center">
          <p className="text-slate-500 text-sm font-medium">
            Designed & Developed by {personalInfo.name}
          </p>
          <p className="text-slate-600 text-sm">
            © 2026 {personalInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
