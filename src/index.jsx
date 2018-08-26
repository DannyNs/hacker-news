import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import newsStore from './stores/NewsStore';

import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import './index.scss';

ReactDOM.render(
  <App title="Hacker News" newsStore={newsStore} />,
  document.getElementById('root'),
);
