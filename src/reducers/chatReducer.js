// reducers/chatReducer.js
const initialState = {
    selectedChatId: null,
    chatMessages: {},
  };
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_CHAT':
        return { ...state, selectedChatId: action.payload };
      case 'ADD_MESSAGE':
        const { chatId, message } = action.payload;
        return {
          ...state,
          chatMessages: {
            ...state.chatMessages,
            [chatId]: [...(state.chatMessages[chatId] || []), message],
          },
        };
      default:
        return state;
    }
  };
  
  export default chatReducer;
  