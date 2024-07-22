import React from 'react';
import './TechnologyStack.css';

const techStack = [
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  
  { name: 'Three.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg' },
  { name: 'Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
  { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
  { name: 'Prisma', logo: 'https://avatars.githubusercontent.com/u/17219288?s=200&v=4' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
];

const TechnologyStack: React.FC = () => {
  return (
    <main className="tech-stack-container">
      <h1 className="tech-stack-title">Technology Stack</h1>
      <ul className="tech-stack-list">
        {techStack.map((tech) => (
          <li key={tech.name} className="tech-stack-item">
            <img src={tech.logo} alt={`${tech.name} logo`} className="tech-stack-logo" />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TechnologyStack;
