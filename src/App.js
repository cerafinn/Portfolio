import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
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
