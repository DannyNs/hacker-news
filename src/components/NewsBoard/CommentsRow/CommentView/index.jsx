import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import renderHTML from 'react-render-html';
import Comment from '../../../../stores/NewsStore/Comment';
import Loader from '../../../Loader';

import './index.scss';

export const renderChildComments = ((comments) => {
  const commentsLoading = comments
    .filter(({ loading }) => loading).length > 0;

  return commentsLoading ? (<Loader loading />)
    : comments
      .map(({
        id, by, deleted, text, time, comments: childComments,
      }) => (
        <CommentView
          key={id}
          by={by}
          text={text}
          time={time}
          deleted={deleted}
          comments={childComments}
        />
      ));
});

const CommentView = observer(({
  by, text, time, deleted, comments,
}) => (
  <div className="hn-comment-view">
    <div className="hn-comment-view__header">
      <div>
        <span>Author: </span>
        {by}
      </div>
      <div>
        <span>Time: </span>
        {new Date(time * 1000).toUTCString()}
      </div>
    </div>
    <div className="hn-comment-view__content">
      {deleted ? <span>Comment deleted</span> : renderHTML(text)}
    </div>
    <div className="hn-comment-view__children">
      {
        renderChildComments(comments)
      }
    </div>
  </div>
));

CommentView.propTypes = {
  by: PropType.string.isRequired,
  text: PropType.string.isRequired,
  time: PropType.number.isRequired,
  comments: PropType.arrayOf(PropType.instanceOf(Comment)).isRequired,
};

export default CommentView;
