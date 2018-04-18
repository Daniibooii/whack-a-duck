import React from 'react'; //need to change route for react
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import Counter from "./Counter.js"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
