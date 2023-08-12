// import React, { useState } from 'react';
// import './character_set.css'; // Import your CSS file for styling
// import { Link } from "react-router-dom";

// function CharacterSet({ onComplete }) {
//   const [messages, setMessages] = useState(['', '', '', '', '']);
//   const tonePrompts = [
//     'Character settings (personality and gender):',
//     'Tone when greeting:',
//     'Tone when embarrassed:',
//     'Tone when angry:',
//     'Tone when depressed:',
//   ];

//   const handleInputChange = (index, content) => {
//     const updatedMessages = [...messages];
//     updatedMessages[index] = content;
//     setMessages(updatedMessages);
//   };
  
//   const handleSetupComplete = () => {
//     onComplete([
//         { role: 'system', content: messages[0] },
//         { role: 'assistant', content: messages[1] },
//         { role: 'assistant', content: messages[2] },
//         { role: 'assistant', content: messages[3] },
//         { role: 'assistant', content: messages[4] },
//       ]);
//   };

//   return (
//     <div className="CharacterSet">
//       <div className="message-box character-settings">
//         <div className="prompt">Enter character's settings:</div>
//         <input
//           type="text"
//           placeholder="Type character's personality and gender..."
//           value={messages[0]}
//           onChange={(e) => handleInputChange(0, e.target.value)}
//         />
//       </div>

//       <div className="message-boxes">
//         {tonePrompts.map((prompt, index) => (
//           <div key={index} className="message-box">
//             <div className="prompt">{prompt}</div>
//             <input
//               type="text"
//               placeholder={`Type your response for tone ${index + 1}...`}
//               value={messages[index + 1]}
//               onChange={(e) => handleInputChange(index + 1, e.target.value)}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="output-box">
//         {messages.map((message, index) => (
//           <div key={index} className="message">
//             {message}
//           </div>
//         ))}
//       </div>
//       <div className="button-container">
//        <Link to = "/character.js"> 
//        <button onClick={handleSetupComplete}>Setup Complete</button> 
//        </Link>
//       </div>
//     </div>
//   );
// }

// export default CharacterSet;
import React, { useState } from "react";
import Chat from "./chat.js"

function CharacterSet(){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Chat inputValue={inputValue} />
        </div>
      );
};

export default CharacterSet;