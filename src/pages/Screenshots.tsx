import React from 'react';
import './Screenshots.css';

const Screenshots: React.FC = () => {
  return (
    <main>
      <h1>Screenshots</h1>
      <p>Below are some screenshots of various parts of the application to give a visual representation of the features and UI.</p>
      <div className="screenshot-grid">
        <img src="screenshota.png" alt="Screenshot 1" />
        <img src="screenshotc.png" alt="Screenshot 2" />
        <img src="screenshotd.png" alt="Screenshot 3" />
        <img src="screenshitb.png" alt="Screenshot 4" />
      </div>
    </main>
  );
};

export default Screenshots;
