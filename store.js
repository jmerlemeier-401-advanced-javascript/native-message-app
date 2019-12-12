import { createStore, combineReducers, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import thunk from 'redux-thunk';

//============= ACTION CREATOR =============
const actions = {
  subscribeToMesssages: () => (dispatch) => {
    const socket = io('https://codefellows-message-server.herokuappp.com');
    socket.on('MESSAGE', (message) => {
      actions,addMessage(message);
    });
    dispatch(actions.connect(socket));
  },

  fetchMessages = () => (dispatch) => {
    return fetch('https://codefellows-message-server.herokuappp.com/api/messages')
    .then(response => response.json)
    .then(data => actions.setMessage(data));
  },

  addMessage: (message) => {
    return {
      type: 'ADD_MESSAGE',
      payload: message,
    }
  },
  setMessage: (messages) => {
    return {
      type: 'SET_MESSAGES',
      payload: messages,
    }
  },

  connect: (socket) => {
    return {
      type:'CONNECT',
      payload: socket
    }
  }
}

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    case 'SET_MESSAGES':
      return action.payload;
    default:
      return state;
  }
}

//want to make socket available globally - savesocket obj to global app state.
const socketReducer = (state ={}, action) => {
  switch(action.type) {
    case 'CONNECT':
      return action.payload;
    case 'DISCONNECT':
      return {};
    default:
        return state;
  }
}

const reducers = combineReducers({
  messages: messageReducer,
  socket: socketReducer

})

export default () => createStore(reducers);