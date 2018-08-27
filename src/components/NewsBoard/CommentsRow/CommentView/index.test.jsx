import React from 'react';
import ReactDOM from 'react-dom';
import CommentView from '.';

describe('CommentView', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <CommentView
        by="Amazing author"
        text="nothing special here"
        time={new Date().getTime()}
        comments={[]}
      />, div,
    );
  });
});
