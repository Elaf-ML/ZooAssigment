import React from 'react';

const Sidebar = ({ animals, onAnimalClick, activeAnimal }) => (
  <aside>
    <ul>
      {animals.map(animal => (
        <li 
          key={animal.id} 
          className={activeAnimal === animal ? 'active' : ''}
          onClick={() => onAnimalClick(animal)}
        >
          {animal.name}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
