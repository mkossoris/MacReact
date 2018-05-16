import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Desktop from './OS/components/Desktop';
import Login from './OS/components/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Desktop />, document.getElementById('root'));
registerServiceWorker();
