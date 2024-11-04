import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { animals } from '../../data';

const AnimalDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const animal = animals.find(animal => animal.id === parseInt(id));

  return (
    <div className="animal-detail">
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <p><strong>Diet:</strong> {animal.diet}</p>
      <p><strong>Group:</strong> {animal.group}</p>
      <button onClick={() => history.goBack()}>Back to Home</button>
    </div>
  );
};

export default AnimalDetail;
