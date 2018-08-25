import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import './index.scss';

ReactDOM.render(
  <App title="Hacker News" />,
  document.getElementById('root'),
);