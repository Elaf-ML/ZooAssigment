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

  // Define styles for the container and image
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
    },
    image: {
      width: '30%',
      height: '30%',
      objectFit: 'cover', // Ensures the image covers the container without distortion
    },
  };

  return (
    <div style={styles.container}>
      <img src={animal.image} alt={animal.name} style={styles.image} />
      <h2>{animal.name}</h2>
      <p>{animal.description.substring(0, 200)}...</p>
      <p><strong>Diet:</strong> {animal.diet}</p>
      <p><strong>Group:</strong> {animal.group}</p>
      <p>
        <button onClick={handleReadMoreClick}>Read More</button>
      </p>
      {isModalOpen && <AnimalModal animal={animal} onClose={handleCloseModal} />}
    </div>
  );
};

export default AnimalSummary;
