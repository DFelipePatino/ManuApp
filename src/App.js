// src/App.js

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react'; // Ensure correct import
import './App.css';
import Scenario from './components/Scenario';
import ResultQuote from './components/ResultQuote';
import scenarios from './data/scenarios';
import AudioPlayer from './components/AudioPlayer'; // Import AudioPlayer




const Home = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  console.log(isZoomed, 'zoomed');


  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={`App ${isZoomed ? 'zoomed' : ''}`}>
      <h1>Que prefieres Mangu?</h1>
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
  const [finalMessage, setFinalMessage] = React.useState('');

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
      setFinalMessage(`Quiero ir de ${userChoice} shopping spree con Maimo pofavo!!`);
      sendMessageOnWhatsApp(finalScenario);
    }
  };

  const sendMessageOnWhatsApp = (finalScenario) => {
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B573024274424&text=Quiero+ir+de+${userChoice}+shopping+spree+con+Maimo+pofavoo!!&type=phone_number&app_absent=0`;
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

const MangoButton = ({ onClick }) => {
  return (
    <button className="mango-button" onClick={onClick}>
      Mangu
    </button>
  );
};

const App = () => (
  <Router>
    <div className="navbar">
      <Link to="/" className="home-button">
        <MangoButton />
      </Link>
    </div>

    <Routes>
      <Route path="/game" element={<Game />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;