// src/pages/SetupInstallation.tsx

import React from 'react';
 
const SetupInstallation: React.FC = () => {
  return (
    <div className="setup-installation-page">
      <header className="setup-installation-header">
        <h1>Setup and Installation Guide</h1>
        <p>This guide will help you set up and install the Pokedex website project, which includes the frontend, backend, and database connection.</p>
      </header>
      <main className="setup-installation-main">
        <section className="prerequisites">
          <h2>Prerequisites</h2>
          <ul>
            <li><strong>Node.js:</strong> Ensure Node.js is installed. <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Download and install Node.js</a>.</li>
            <li><strong>npm:</strong> Node.js comes with npm, which is needed to manage packages.</li>
            <li><strong>Database:</strong> Set up a database .</li>
            <li><strong>Git:</strong> Required to clone the repository.</li>
          </ul>
        </section>
        <section className="clone-repo">
          <h2>Cloning the Repository</h2>
          <ol>
            <li>Clone the repository from GitHub:
              <pre><code>git clone https://github.com/SidTheKid-dotcom/IEEE-Hackathon.git</code></pre>
            </li>
            <li>Navigate into the project directory:
              <pre><code>cd IEEE-Hackathon</code></pre>
            </li>
          </ol>
        </section>
        <section className="frontend-setup">
          <h2>Frontend Setup</h2>
          <ol>
            <li>Navigate to the frontend directory:
              <pre><code>cd frontend</code></pre>
            </li>
            <li>Install frontend dependencies:
              <pre><code>npm install</code></pre>
            </li>
            <li>Create a <code>.env</code> file for environment variables in the <code>frontend</code> directory. Add the necessary configurations, such as API endpoints:
              <pre><code>REACT_APP_API_URL=http://localhost:5000/api</code></pre>
            </li>
            <li>Start the frontend development server:
              <pre><code>npm start</code></pre>
            </li>
          </ol>
        </section>
        <section className="backend-setup">
          <h2>Backend Setup</h2>
          <ol>
            <li>Navigate to the backend directory:
              <pre><code>cd ../backend</code></pre>
            </li>
            <li>Install backend dependencies:
              <pre><code>npm install</code></pre>
            </li>
            <li>Create a <code>.env</code> file for environment variables in the <code>backend</code> directory. Add database connection details and other configurations:
              <pre><code>DB_HOST=localhost
DB_USER=youruser
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
PORT=5000</code></pre>
            </li>
            <li>Set up the database schema. This step depends on the database being used. For example, with PostgreSQL:
              <pre><code>npm run migrate</code></pre>
            </li>
            <li>Start the backend server:
              <pre><code>npm start</code></pre>
            </li>
          </ol>
        </section>
        <section className="database-setup">
          <h2>Database Setup</h2>
          <ol>
            <li><strong>Create Database:</strong> Ensure your database is created and running. For example, using PostgreSQL:
              <pre><code>createdb yourdatabase</code></pre>
            </li>
            <li><strong>Run Migrations:</strong> If your project uses migrations, run them to set up the schema:
              <pre><code>npm run migrate</code></pre>
            </li>
          </ol>
        </section>
        <section className="connect-frontend-backend">
          <h2>Connecting Frontend, Backend, and Database</h2>
          <p>The frontend connects to the backend using API URLs defined in the <code>.env</code> file. The backend connects to the database using credentials defined in its <code>.env</code> file.</p>
        </section>
        <section className="testing-setup">
          <h2>Testing the Setup</h2>
          <ol>
            <li>Ensure the backend server is running.</li>
            <li>Ensure the frontend development server is running.</li>
            <li>Open your browser and navigate to <code>http://localhost:3000</code> (or another port if configured differently) to view the Pokedex website.</li>
          </ol>
        </section>
        <section className="troubleshooting">
          <h2>Troubleshooting</h2>
          <ul>
            <li><strong>Frontend Issues:</strong> Check the browser console and network tab for errors. Verify API URLs are correct.</li>
            <li><strong>Backend Issues:</strong> Check backend logs for errors. Verify database connection settings.</li>
            <li><strong>Database Issues:</strong> Ensure the database is running and accessible with the provided credentials.</li>
          </ul>
        </section>
        <section className="additional-notes">
          <h2>Additional Notes</h2>
          <ul>
            <li><strong>Environment-Specific Configurations:</strong> For production, adjust configurations such as API URLs and database connection settings in the <code>.env</code> files and deployment scripts.</li>
            <li><strong>Security:</strong> Never commit sensitive information (e.g., passwords) to version control. Use environment variables and secret management tools.</li>
          </ul>
        </section>
      </main>
      <footer className="setup-installation-footer">
        <p>© 2024 Bypict. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SetupInstallation;
