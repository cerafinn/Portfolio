import React from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function Section(currentSection) {
  return (
    <div>
      {(() => {
        switch (currentSection) {
          case 'Portfolio':
            <Portfolio />;
            break;
          case 'Resume':
            <Resume />
            break;
          case 'Contact':
            <Contact />
            break;
          default:
            <About />
        }
      })}
    </div>
  )
}

export default Section;