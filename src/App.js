import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
