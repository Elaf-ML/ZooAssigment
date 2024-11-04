// AnimalSummary.js
import React, { useState } from 'react';
import AnimalModal from '../AnimalModel/AnimalModel';

const AnimalSummary = ({ animal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="animal-summary">
      <img src={animal.image} width={200} height={100} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>{animal.description.substring(0, 200)}...</p>
      <p><strong>Diet: 1</strong> {animal.diet}</p>
      <p>
        <strong>Group:</strong> {animal.group}
      </p>
      <p>
        <button onClick={handleReadMoreClick}>Read More</button>
      </p>
      {isModalOpen && <AnimalModal animal={animal} onClose={handleCloseModal} />}
    </div>
  );
};

export default AnimalSummary;
