// reducers/rootReducer.js
import { combineReducers } from 'redux';
import chatBotReducer from './chatBotReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  chatBots: chatBotReducer,
  chat: chatReducer,
});

export default rootReducer;
