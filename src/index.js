import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import  './components/style1.css';

//import CardList from './components/CardList';
import registerServiceWorker from './registerServiceWorker';
//import {robots} from './robots'

ReactDOM.render(   
       <App/>
   , document.getElementById('root'));
registerServiceWorker();
