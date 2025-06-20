import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

export default function App() {
  return (
    <div className="main-bg">
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        {/* Aquí puedes agregar Contacto y Footer */}
      </div>
    </div>
  );
}