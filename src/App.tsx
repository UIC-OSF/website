import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { SustainerBenefits } from './components/SustainerBenefits';
import { WhatWeAsk } from './components/WhatWeAsk';
import { About } from './components/About';
import { Team } from './components/Team';
import { SustainerForm } from './components/SustainerForm';
import { NewsletterSignup } from './components/NewsletterSignup';
import { StickyNav } from './components/StickyNav';

function App() {
  return (
    <Layout>
      <Hero />
      <StickyNav />
      <Stats />
      <div id="projects-section" tabIndex={-1} className="scroll-mt-24"><Projects /></div>
      <div id="benefits-section" tabIndex={-1} className="scroll-mt-24"><SustainerBenefits /></div>
      <div id="ask-section" tabIndex={-1} className="scroll-mt-24"><WhatWeAsk /></div>
      <div id="about-section" tabIndex={-1} className="scroll-mt-24"><About /></div>
      <div id="team-section" tabIndex={-1} className="scroll-mt-24"><Team /></div>
      <div id="sustainer-section" tabIndex={-1} className="scroll-mt-24"><SustainerForm /></div>
      <div id="newsletter-section" tabIndex={-1} className="scroll-mt-24"><NewsletterSignup /></div>
    </Layout>
  );
}

export default App;
