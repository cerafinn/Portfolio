import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const [sections] = useState([
    { name: "about" },
    { name: "portfolio" },
    { name: "resume" },
    { name: "contact" }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Header>
        <Nav
          sections={sections}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        ></Nav>
      </Header>
      <main>
        <Section currentSection={currentSection}></Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;