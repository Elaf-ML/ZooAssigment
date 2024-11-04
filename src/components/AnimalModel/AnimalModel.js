
import React from 'react';

const AnimalModal = ({ animal, onClose }) => {
  if (!animal) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    content: {
      background: '#fff',
      padding: '20px',
      width: '400px',
      maxWidth: '90%',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      textAlign: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      border: 'none',
      background: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    image: {
      width: '200px',
      height: '100px',
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>X</button>
        <img src={animal.image} style={styles.image} alt={animal.name} />
        <h2>{animal.name}</h2>
        <p>{animal.description}</p>
        <p><strong>Diet:</strong> {animal.diet}</p>
        <p><strong>Group:</strong> {animal.group}</p>
      </div>
    </div>
  );
};

export default AnimalModal;
