import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Filler from './components/Filler';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <h2>Shhh... this isnt here</h2>
      <About />
      <Filler />

      <Projects />
      <Contact />

      <h3>Blah blah blah</h3>
    </div>
  );
}

export default App;
