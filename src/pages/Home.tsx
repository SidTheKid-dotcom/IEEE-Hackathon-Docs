import React from 'react';
import './Home.css'; 
const Home: React.FC = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the Pokedex</h1>
      </header>
      <main className="home-main">
        <section className="project-info">
          <h2>About the Project</h2>
          <p>This website is part of the IEEE TechRush hackathon, created by Team Smooth Operators.</p>
          <p>Project Details:</p>
          <p><strong>Hackathon Name:</strong> IEEE TechRush <img className="ieee-logo-inline" src="../assets/logo.jpeg" alt="IEEE Logo" /></p>
          <p><strong>Project Name:</strong> Pokedex</p>
          <p><strong>Team Name:</strong> Smooth Operators</p>
          <p>The Pokedex project is developed under problem statement of full-stack devlopment and aims to provide a comprehensive and user-friendly 
             Pokedex application. Users can explore various Pokémon, their details, and interact with the content in an engaging way.</p>
        </section>
        <section className="team-info">
          <h2>Meet the Smooth Operators</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/images/siddhant.jpg" alt="Siddhant Vishnu" />
              <p>Siddhant Vishnu</p>
            </div>
            <div className="team-member">
              <img src="/images/yash.jpg" alt="Yash Pawar" />
              <p>Yash Pawar</p>
            </div>
            <div className="team-member">
              <img src="/images/darshan.jpg" alt="Darshan Wagh" />
              <p>Darshan Wagh</p>
            </div>
            <div className="team-member">
              <img src="/images/satyam.jpg" alt="Satyam Mengshetti" />
              <p>Satyam Mengshetti</p>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Home;
