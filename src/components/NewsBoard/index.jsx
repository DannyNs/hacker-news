import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import News from '../../stores/NewsStore/News';
import NewsRow from './NewsRow';
import CommentsRow from './CommentsRow';

import './index.scss';

const NewsBoard = observer(({ news }) => (
  <div className="hn-news-board">
    {
      news
        .map(({
          id, by, time, title, score, comments, commentsLength, commentsVisible, setCommentsVisible,
        }) => (
          <div key={id}>
            <NewsRow
              by={by}
              time={time}
              title={title}
              score={score}
              commentsLength={commentsLength}
            />
            <CommentsRow
              comments={comments}
              commentsLength={commentsLength}
              commentsVisible={commentsVisible}
              setCommentsVisible={setCommentsVisible}
            />
          </div>
        ))
    }
  </div>
));

NewsBoard.propTypes = {
  news: PropType.arrayOf(PropType.instanceOf(News)).isRequired,
};

export default NewsBoard;
