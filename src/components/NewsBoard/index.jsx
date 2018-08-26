import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import { News } from '../../stores/NewsStore';

import './index.scss';

const NewsBoard = observer(({ news }) => (
  <div className="hn-news-board">
    {
      news.map(n => (
        <div key={n.id} className="hn-news-board__row">
          <div className="hn-news-board__labels">
            <p>Author: </p>
            <p>Title: </p>
          </div>
          <div className="hn-news-board__content">
            <p>{n.by}</p>
            <p>{n.title}</p>
          </div>
        </div>
      ))
    }
  </div>
));

NewsBoard.propTypes = {
  news: PropType.arrayOf(PropType.instanceOf(News)).isRequired,
};

export default NewsBoard;
