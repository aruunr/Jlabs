import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
//import CardList from './components/CardList';
import registerServiceWorker from './registerServiceWorker';
//import {robots} from './robots'
import 'tachyons';

ReactDOM.render(   
       <App/>
   , document.getElementById('root'));
registerServiceWorker();
