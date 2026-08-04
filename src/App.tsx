import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ProcessAndStack } from './components/Process';
import { ValuesAndClients } from './components/ValuesAndClients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 overflow-hidden selection:bg-[#22D3EE]/30 selection:text-[#22D3EE]">
      {/* Ambient Background Accents */}
      <div className="fixed top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#6D28D9] opacity-20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0 transform-gpu"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#22D3EE] opacity-10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none z-0 transform-gpu"></div>
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <ProcessAndStack />
          <ValuesAndClients />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
