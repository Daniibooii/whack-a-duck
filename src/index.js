import React from 'react'; //need to change route for react
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import Air from './components/Air';
import Sidebar from './components/Sidebar';
import Water from './components/Water';
import registerServiceWorker from './registerServiceWorker';
//import Counter from "./Counter.js"

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
