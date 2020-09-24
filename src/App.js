import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Education from './components/Education'
import Skills from './components/Skills'
import Project from './components/Project'
import About from './components/About'
import {
  ScrollingProvider,
  Section
} from 'react-scroll-section';
function App() {
  return (
    <ScrollingProvider>
      <div className='app'>
        <Navbar />
        <Section id="À propos"><About /></Section>
        <Section id="Diplômes et Formations"><Education /></Section>
        <Section id="Mes Compétences"><Skills /></Section>
        <Section id="projets"><Project /></Section>
        <hr />
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Haithem Hajri © 2020</p>
      </div>
    </ScrollingProvider>
  );
}

export default App;


