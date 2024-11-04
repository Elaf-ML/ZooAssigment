import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import AnimalSummary from '../components/AnimalSummary/AnimalSummary';
import { animals } from '../data';

const mammals = animals.filter(animal => animal.group === 'Mammals');

const Mammals = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    setActiveAnimal(animal);
  };

  return (
    <div className="mammals-page">

      <Sidebar animals={mammals} onAnimalClick={handleAnimalClick} activeAnimal={activeAnimal} />
      <main>
        <h1>Mammals</h1>
        {activeAnimal && <AnimalSummary animal={activeAnimal} />}
      </main>
    </div>
  );
};

export default Mammals;
