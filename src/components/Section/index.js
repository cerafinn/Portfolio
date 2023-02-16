import React from 'react';
import Body from '../Body';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Page({ currentSection }) {

  const renderPage = () => {
    switch (currentSection.name) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
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