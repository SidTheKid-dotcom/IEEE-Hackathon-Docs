import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <div className="features-page">
      <h1>Features</h1>
      <div className="card-container">
        
      
        <div className="card">
          <h2>Pokecam</h2>
          <p>Take a photo and identify which Pokemon it is.</p>
        </div>
        <div className="card">
          <h2>3D Buddy Pokemon</h2>
          <p>Interact with a special 3D model of your buddy Pokemon and have a personal chat with it.</p>
        </div>
        <div className="card">
          <h2>Interactive Community </h2>
          <p>User is able to rate the pokemon and express there opinion.</p>
        </div>
        
        <div className="card">
          <h2>Gotta catch em all</h2>
          <p>
            Find Pokemon with abilities, types, and more using filters and search
            options. Pokemon are arranged by their Pokedex indexes.
          </p>
        </div>
        <div className="card">
          <h2>Location-Based Habitat</h2>
          <p>Discover where Pokemon habitats are found.</p>
        </div>
        <div className="card">
          <h2>Detailed Stats UI</h2>
          <p>View a detailed UI card showing the stats of each Pokemon.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Features;
