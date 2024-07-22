// src/pages/ApiUsage.tsx

import React from 'react';

const ApiUsage: React.FC = () => {
  return (
    <main className="api-usage">
      <h1>API Usage</h1>
      <p>
        In our Pokedex application, we utilize the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a> to fetch real-time data about Pokémon.
        The PokeAPI provides a comprehensive set of endpoints to retrieve detailed information about Pokémon, their abilities, types, and more.
      </p>
      <h2>Getting the List of Pokémon</h2>
      <p>
        To get a list of Pokémon, we use the following API endpoint:
      </p>
      <pre>
        {`
fetch(\`\${process.env.REACT_APP_API_URL}/pokemon?limit=151\`)
  .then(response => response.json())
  .then(data => console.log(data));
        `}
      </pre>
      <p>
        This call fetches a list of 151 Pokémon. You can adjust the `limit` parameter to get more or fewer Pokémon.
      </p>
      
      <h2>Getting Pokémon Details</h2>
      <p>
        To get detailed information about a specific Pokémon, use this endpoint:
      </p>
      <pre>
        {`
fetch(\`\${process.env.REACT_APP_API_URL}/pokemon/\${pokemonName}\`)
  .then(response => response.json())
  .then(data => console.log(data));
        `}
      </pre>
      <p>
        Replace \`pokemonName\` with the name of the Pokémon you want details about. For example, to get details about Pikachu, use \`/pokemon/pikachu\`.
      </p>
      
      <h2>Image Recognition API</h2>
      <p>
        If your application integrates with an image recognition API to identify Pokémon from images, you might use an endpoint like:
      </p>
      <pre>
        {`
fetch('https://api.imagerecognition.com/identify', {
  method: 'POST',
  body: formData
})
  .then(response => response.json())
  .then(data => console.log(data));
        `}
      </pre>
      <p>
        This example demonstrates how to send an image file to an external image recognition API. Replace \`formData\` with your actual image data.
      </p>
      
      
    </main>
  );
};

export default ApiUsage;
