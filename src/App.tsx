import { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Projects } from './components/Projects';
import { Bounties } from './components/Bounties';
import { PartnershipSolicitation } from './components/PartnershipSolicitation';
import { Team } from './components/Team';
import { About } from './components/About';

import { StickyNav } from './components/StickyNav';

function App() {
  const [selectedProject, setSelectedProject] = useState<string>('all');

  const scrollToBounties = (projectId?: string) => {
    if (projectId) {
      setSelectedProject(projectId);
    }
    const bountiesSection = document.getElementById('bounties-section');
    if (bountiesSection) {
      bountiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Hero />
      <StickyNav />
      <div id="about-section" tabIndex={-1} className="scroll-mt-24"><About /></div>
      <div id="projects-section" tabIndex={-1} className="scroll-mt-24"><Projects onScrollToBounties={scrollToBounties} /></div>
      <div id="bounties-section" tabIndex={-1} className="scroll-mt-24"><Bounties selectedProject={selectedProject} onSelectProject={setSelectedProject} /></div>
      <div id="partners-section" tabIndex={-1} className="scroll-mt-24"><Partners /></div>
      <div id="team-section" tabIndex={-1} className="scroll-mt-24"><Team /></div>
      <div id="partnership-section" tabIndex={-1} className="scroll-mt-24"><PartnershipSolicitation /></div>
    </Layout>
  );
}

export default App;
