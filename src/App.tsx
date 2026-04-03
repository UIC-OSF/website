import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Projects } from './components/Projects';
import { PartnershipSolicitation } from './components/PartnershipSolicitation';
import { Team } from './components/Team';
import { About } from './components/About';

import { NewsletterSignup } from './components/NewsletterSignup';
import { StickyNav } from './components/StickyNav';

function App() {
  return (
    <Layout>
      <Hero />
      <StickyNav />
      <div id="about-section" tabIndex={-1} className="scroll-mt-24"><About /></div>
      <div id="projects-section" tabIndex={-1} className="scroll-mt-24"><Projects /></div>
      <div id="partners-section" tabIndex={-1} className="scroll-mt-24"><Partners /></div>
      <div id="team-section" tabIndex={-1} className="scroll-mt-24"><Team /></div>
      <div id="newsletter-section" tabIndex={-1} className="scroll-mt-24"><NewsletterSignup /></div>
      <div id="partnership-section" tabIndex={-1} className="scroll-mt-24"><PartnershipSolicitation /></div>
    </Layout>
  );
}

export default App;
