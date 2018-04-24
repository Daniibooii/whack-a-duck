import React from 'react';
import ReactDOM from 'react-dom';
// import io from 'socket.io-client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//import Counter from "./Counter.js" ?

// const socket = io();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
