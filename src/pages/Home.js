import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import AnimalSummary from '../components/AnimalSummary/AnimalSummary';
import { animals } from '../data';

const Home = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    if (activeAnimal === animal) {
      setActiveAnimal(null);
    } else {
      setActiveAnimal(animal);
    }
  };

  return (
    <div className="home-page">

      
      <Sidebar animals={animals} onAnimalClick={handleAnimalClick} activeAnimal={activeAnimal} />
      <main>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <h1>Welcome to the Australia Zoo Exhibition!</h1>
        )}
      </main>
    </div>
  );
};

export default Home;
