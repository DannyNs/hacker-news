import React from 'react';
import PropType from 'prop-types';

import './index.scss';

const App = ({ title }) => (
  <div className="hn-app">
    <h1 className="hn-app__title">{title}</h1>
  </div>
);

App.propTypes = {
  title: PropType.string.isRequired,
};

export default App;
