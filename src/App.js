// src/App.js

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react'; // Ensure correct import
import './App.css';
import NavBar from '../src/components/NavBar';
import Scenario from './components/Scenario';
import ResultQuote from './components/ResultQuote';
import scenarios from './data/scenarios';
import AudioPlayer from './components/AudioPlayer';
import AboutPage from './components/AboutPage';



const Home = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  console.log(isZoomed, 'zoomed');


  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={`App ${isZoomed ? 'zoomed' : ''}`}>
      <h1>Que prefieres Mangu?</h1>
      <div className='playerApp'>
        <AudioPlayer />
      </div>
      <Link to="/game" className="home-button" onClick={handleZoom}>
        <button>"¡Vámonos allá, tío!"</button>
      </Link>
    </div>
  );
};

const Game = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = React.useState(0);
  const [quote, setQuote] = React.useState('');
  const [showQuote, setShowQuote] = React.useState(false);
  const [userChoice, setUserChoice] = React.useState(null);

  const handleChoice = (choice) => {
    const currentScenario = scenarios[currentScenarioIndex];
    setQuote(currentScenario.quotes[choice]);
    setUserChoice(choice);
    setShowQuote(true);
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setShowQuote(false);
      setCurrentScenarioIndex((prevIndex) => prevIndex + 1);
    } else {
      const finalScenario = scenarios[currentScenarioIndex];
      sendMessageOnWhatsApp(finalScenario);
    }
  };

  const sendMessageOnWhatsApp = (finalScenario) => {
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B573024274424&text=Quiero+ir+de+${userChoice}+shopping+spree+con+Maimo+pofavoo!!+Favor+copiar+y+pegar+este+mensaje+en+InstaDm+de+su+movio+porque+no+tiene+Wa&type=phone_number&app_absent=0`;
    const anchor = document.createElement('a');
    anchor.href = whatsappUrl;
    anchor.target = '_blank';
    anchor.click();
  };

  return (
    <div className="App">
      <div className='playerApp'>
        <AudioPlayer />
      </div>
      {showQuote ? (
        <ResultQuote quote={quote} onNext={handleNextScenario} />
      ) : (
        <Scenario
          scenario={scenarios[currentScenarioIndex]}
          onChoice={handleChoice}
        />
      )}
    </div>
  );
};





const App = () => (
  <Router>
    <NavBar /> {/* NavBar will always be rendered */}
    <Routes>
      <Route path="/game" element={<Game />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
