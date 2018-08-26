import React from 'react';
import ReactDOM from 'react-dom';
import App from '.';
import newsStore from '../../stores/NewsStore';

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App title="test 123" newsStore={newsStore} />, div);
  });
});
