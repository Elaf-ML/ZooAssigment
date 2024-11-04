import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import AnimalSummary from '../components/AnimalSummary/AnimalSummary';
import { animals } from '../data';

const reptiles = animals.filter(animal => animal.group === 'Reptiles');

const Reptiles = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    setActiveAnimal(animal);
  };

  return (
    <div className="reptiles-page">
      <Sidebar animals={reptiles} onAnimalClick={handleAnimalClick} activeAnimal={activeAnimal} />
      <main>
        <h1>Reptiles</h1>
        {activeAnimal && <AnimalSummary animal={activeAnimal} />}
      </main>
    </div>
  );
};

export default Reptiles;
