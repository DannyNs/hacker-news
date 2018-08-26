import React from 'react';
import ReactDOM from 'react-dom';
import CommentsRow from '.';

describe('CommentsRow', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <CommentsRow
        comments={[]}
        commentsLength={0}
        commentsVisible={false}
        setCommentsVisible={() => {}}
      />, div,
    );
  });
});
