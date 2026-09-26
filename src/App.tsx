import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';

import { ScrollAnimation } from './components/ui/ScrollAnimation';

export function App() {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        <ScrollAnimation direction="none">
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <About />
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Projects />
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Achievements />
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Education />
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Certifications />
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Contact />
        </ScrollAnimation>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
