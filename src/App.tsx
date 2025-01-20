import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;