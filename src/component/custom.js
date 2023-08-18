import React, { useState } from "react";

function Custom() {
  const [characterName, setCharacterName] = useState("");
  const [conceptResponse, setConceptResponse] = useState("");
  const [greetResponse, setGreetResponse] = useState("");
  const [requestResponse, setRequestResponse] = useState("");
  const [apologizeResponse, setApologizeResponse] = useState("");
  const [angerResponse, setAngerResponse] = useState("");

  
  const handleSaveInteraction = () => {
    const interactions = [
      { role: "system", content: conceptResponse },
      { role: "assistant", content: greetResponse },
      { role: "assistant", content: requestResponse },
      { role: "assistant", content: apologizeResponse },
      { role: "assistant", content: angerResponse },
    ];
    const data = {
      character: { name: characterName },
      interactions: interactions,
    };

    const fileName = `${characterName}_data.json`;

    // Create a Blob with the JSON data and save it as a file
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    // Save data to localStorage
    let existingData =
      JSON.parse(localStorage.getItem("interactionData")) || [];
    existingData.push(data);
    localStorage.setItem("interactionData", JSON.stringify(existingData));

    alert("Data saved successfully!");
  };

  return (
    <div>
      <h1>Character Interaction</h1>
      <div>
        <label>Character Name:</label>
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
      </div>
      <div>
        <label>Character Concept:</label>
        <input
          type="text"
          value={conceptResponse}
          onChange={(e) => setConceptResponse(e.target.value)}
        />
      </div>
      <div>
        <label>Greet Response:</label>
        <input
          type="text"
          value={greetResponse}
          onChange={(e) => setGreetResponse(e.target.value)}
        />
      </div>
      <div>
        <label>Request Response:</label>
        <input
          type="text"
          value={requestResponse}
          onChange={(e) => setRequestResponse(e.target.value)}
        />
      </div>
      <div>
        <label>Apologize Response:</label>
        <input
          type="text"
          value={apologizeResponse}
          onChange={(e) => setApologizeResponse(e.target.value)}
        />
      </div>
      <div>
        <label>Anger Response:</label>
        <input
          type="text"
          value={angerResponse}
          onChange={(e) => setAngerResponse(e.target.value)}
        />
      </div>
      <button onClick={handleSaveInteraction}>Save Interactions</button>
    </div>
  );
}

export default Custom;
