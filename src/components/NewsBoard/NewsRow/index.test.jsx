import React from 'react';
import ReactDOM from 'react-dom';
import NewsRow from '.';

describe('NewsRow', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <NewsRow
        by="test"
        time={new Date().getTime()}
        title="test title"
        score={10}
        commentsLength={11}
      />, div,
    );
  });
});
