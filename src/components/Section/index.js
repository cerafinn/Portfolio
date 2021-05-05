import React from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { capitalizeFirstLetter } from '../../utils/helpers'

function Section({ currentSection }) {
  const displaySection = () => {
    switch (currentSection.name) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />
      case 'Contact':
        return <Contact />
      default:
        return <About />
    }
  };

return (
  <section>
    <h2>{capitalizeFirstLetter(currentSection.name)}</h2>
    {displaySection()}
  </section>
);
}

export default Section;