import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Offer } from './components/Offer';
import { Team } from './components/Team';
import { Blog } from './components/Blog';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Gallery /> 
      <Process />
      <Services /> 
      <Offer />
      <Team />
      <Blog />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
