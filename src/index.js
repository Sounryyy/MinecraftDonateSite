import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from 'src/containers/App';

const initialState = { initial: 'initial', state: 'state' };
const MOUNT_NODE = document.getElementById('root');

function playList(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return { ...state, ...action.payload };
  }

  return state;
}

const store = createStore(playList);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);
