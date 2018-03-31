import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.sass';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
