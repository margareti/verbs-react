import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Verb from './verb/Verb';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Verb />, document.getElementById('root'));
registerServiceWorker();
