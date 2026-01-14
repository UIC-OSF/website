import { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Projects } from './components/Projects';
import { MicroGrants } from './components/MicroGrants';
import { PartnershipSolicitation } from './components/PartnershipSolicitation';
import { Team } from './components/Team';
import { About } from './components/About';

import { StickyNav } from './components/StickyNav';

function App() {
  const [selectedProject, setSelectedProject] = useState<string>('all');

  const scrollToMicroGrants = (projectId?: string) => {
    if (projectId) {
      setSelectedProject(projectId);
    }

    // Try to find the heading first for better accessibility
    const heading = document.getElementById('open-micro-grants-heading');
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' });
      heading.focus({ preventScroll: true });
    } else {
      // Fallback to section container
      const microGrantsSection = document.getElementById('micro-grants-section');
      if (microGrantsSection) {
        microGrantsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Layout>
      <Hero />
      <StickyNav />
      <div id="about-section" tabIndex={-1} className="scroll-mt-24"><About /></div>
      <div id="projects-section" tabIndex={-1} className="scroll-mt-24"><Projects onScrollToMicroGrants={scrollToMicroGrants} /></div>
      <div id="micro-grants-section" tabIndex={-1} className="scroll-mt-24"><MicroGrants selectedProject={selectedProject} onSelectProject={setSelectedProject} /></div>
      <div id="partners-section" tabIndex={-1} className="scroll-mt-24"><Partners /></div>
      <div id="team-section" tabIndex={-1} className="scroll-mt-24"><Team /></div>
      <div id="partnership-section" tabIndex={-1} className="scroll-mt-24"><PartnershipSolicitation /></div>
    </Layout>
  );
}

export default App;
