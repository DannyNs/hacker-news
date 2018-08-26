import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import Comment from '../../../stores/NewsStore/Comment';

import './index.scss';

const CommentsRow = observer(({
  comments, commentsLength, commentsVisible, setCommentsVisible,
}) => (
  <div className="hn-comments-row">
    <div>
      <button
        className="button button--light"
        onClick={setCommentsVisible}
        disabled={!commentsLength}
        type="button"
      >
        Show comments
      </button>
    </div>
    <div>
      {
        commentsVisible && (
          <div>
            {
              comments.map(comment => (
                <div key={comment.id}>
                  {JSON.stringify(comment)}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  </div>
));

CommentsRow.propTypes = {
  comments: PropType.arrayOf(PropType.instanceOf(Comment)).isRequired,
  commentsLength: PropType.number.isRequired,
  commentsVisible: PropType.bool.isRequired,
  setCommentsVisible: PropType.func.isRequired,
};

export default CommentsRow;
