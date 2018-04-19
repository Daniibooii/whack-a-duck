import React from 'react'; //need to change route for react
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import registerServiceWorker from './registerServiceWorker';
//import Counter from "./Counter.js"

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
