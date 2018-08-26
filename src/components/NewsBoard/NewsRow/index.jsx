import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';

import './index.scss';

const NewsRow = observer(({
  by, time, title, score, commentsLength,
}) => (
  <div className="hn-news-row">
    <div className="hn-news-row__labels">
      <div>Author:</div>
      <div>Time:</div>
      <div>Title:</div>
      <div>Points:</div>
      <div>Comments:</div>
    </div>
    <div className="hn-news-row__content">
      <div>{by}</div>
      <div>{new Date(time * 1000).toUTCString()}</div>
      <div>{title}</div>
      <div>{score}</div>
      <div>
        {commentsLength}
      </div>
    </div>
  </div>
));

NewsRow.propTypes = {
  by: PropType.string.isRequired,
  time: PropType.number.isRequired,
  title: PropType.string.isRequired,
  score: PropType.number.isRequired,
  commentsLength: PropType.number.isRequired,
};

export default NewsRow;
