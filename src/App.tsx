
import './index.css'
import Header from './screens/Header';
import Home from './screens/Home';
import About from './screens/About';
import Skills from './screens/Skills';
import Projects from './screens/Projects'; 
import Contacts from './screens/Contacts';

function App() {

  return (
    <>
    <Header />
      <main className="snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="home" className="snap-start">
        <Home />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contacts" className="snap-start">
        <Contacts />
      </section>
    </main>
    </>
  )
}

export default App

        