import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import AnimalSummary from '../components/AnimalSummary/AnimalSummary';
import { animals } from '../data';

const birds = animals.filter(animal => animal.group === 'Birds');

const Birds = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    setActiveAnimal(animal);
  };

  return (
    <div className="birds-page">
      <Sidebar animals={birds} onAnimalClick={handleAnimalClick} activeAnimal={activeAnimal} />
      <main>
        <h1>Birds</h1>
        {activeAnimal && <AnimalSummary animal={activeAnimal} />}
      </main>
    </div>
  );
};

export default Birds;
