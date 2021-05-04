import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

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
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <About />
        <Contact />
        <Portfolio />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
