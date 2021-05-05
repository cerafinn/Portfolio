import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';
import { capitalizeFirstLetter } from '../../utils/helpers';

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
      {displaySection(currentSection)}
  </section>
);
}

export default Section;