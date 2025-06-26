import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Certifications from './components/Certifications';
import YouTube from './components/YouTube';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Articles />
        <Certifications />
        <YouTube />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
