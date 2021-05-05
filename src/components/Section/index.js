import React from 'react';
import Body from '../Body';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Page({ currentSection }) {

  const renderPage = () => {
    switch (currentSection.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
      <Body>{renderPage()}</Body>
  );
}
export default Page;
