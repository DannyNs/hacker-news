import React from 'react';
import ReactDOM from 'react-dom';
import NewsBoard from '.';

describe('NewsBoard', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsBoard news={[]} />, div);
  });
});
