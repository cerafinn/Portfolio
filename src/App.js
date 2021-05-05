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
  ])

  const [currentSection, setCurrentSection] = useState();

  return (
    <div className="App">
      <Header

      >
        <Nav></Nav>
      </Header>
      <main>
        <Section currentSection={currentSection}></Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
