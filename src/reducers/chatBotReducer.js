// reducers/chatBotReducer.js
const initialState = [
    { id: 1, name: 'ChatBot 1' },
    { id: 2, name: '스티브 잡스' },
    // Add more chatbots here...
  ];
  
  const chatBotReducer = (state = initialState, action) => {
    // You can handle actions related to chatbot list here if needed
    return state;
  };
  
  export default chatBotReducer;
  