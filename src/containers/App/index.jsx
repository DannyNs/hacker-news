import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import { NewsStore } from '../../stores/NewsStore';

import Loader from '../../components/Loader';
import NewsBoard from '../../components/NewsBoard';
import Pagination from '../../components/Pagination';


import './index.scss';

@observer
class App extends React.Component {
  render() {
    const {
      title,
      newsStore: {
        loading, latestNews, newsCount, page, itemsPerPage, goToPrevPage, goToNextPage,
      },
    } = this.props;

    return (
      <div className="hn-app">
        <div className="hn-app__controls">
          <h1 className="hn-app__controls--center">{title}</h1>
          <Loader loading={loading} />
          <Pagination
            page={page}
            goToPrev={goToPrevPage}
            goToNext={goToNextPage}
            itemsPerPage={itemsPerPage}
            totalNumberofItems={newsCount}
          />
        </div>
        <NewsBoard news={latestNews} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropType.string.isRequired,
  newsStore: PropType.instanceOf(NewsStore).isRequired,
};

export default App;
