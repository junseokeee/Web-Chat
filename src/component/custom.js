import React, { useState } from 'react';
import axios from 'axios';

function Custom() {
  const [characterName, setCharacterName] = useState('');
  const [conceptResponse, setConceptResponse] = useState('');
  const [greetResponse, setGreetResponse] = useState('');
  const [requestResponse, setRequestResponse] = useState('');
  const [apologizeResponse, setApologizeResponse] = useState('');
  const [angerResponse, setAngerResponse] = useState('');
  const SERVER_URL = 'http://localhost:4000';

  const handleSaveInteraction = async () => {
    const interactions = [
      { role: 'system', content: conceptResponse },
      { role: 'assistant', content: greetResponse },
      { role: 'assistant', content: requestResponse },
      { role: 'assistant', content: apologizeResponse },
      { role: 'assistant', content: angerResponse }
    ];
    const data = {
      character: { name: characterName },
      interactions: interactions
    };
  
    try {
      const response = await axios.post('http://localhost:4000/uploadInteraction', data);
      console.log(response.data);
      alert('Data saved successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving data.');
    }
  };

  return (
    <div>
      <h1>Character Interaction</h1>
      <div>
        <label>Character Name:</label>
        <input type="text" value={characterName} onChange={e => setCharacterName(e.target.value)} />
      </div>
      <div>
        <label>Character Concept:</label>
        <input type="text" value={conceptResponse} onChange={e => setConceptResponse(e.target.value)} />
      </div>
      <div>
        <label>Greet Response:</label>
        <input type="text" value={greetResponse} onChange={e => setGreetResponse(e.target.value)} />
      </div>
      <div>
        <label>Request Response:</label>
        <input type="text" value={requestResponse} onChange={e => setRequestResponse(e.target.value)} />
      </div>
      <div>
        <label>Apologize Response:</label>
        <input type="text" value={apologizeResponse} onChange={e => setApologizeResponse(e.target.value)} />
      </div>
      <div>
        <label>Anger Response:</label>
        <input type="text" value={angerResponse} onChange={e => setAngerResponse(e.target.value)} />
      </div>
      <button onClick={handleSaveInteraction}>Save Interactions</button>
    </div>
  );
}

export default Custom;
