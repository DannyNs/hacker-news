import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from '.';

describe('Pagination', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Pagination
        page={1}
        itemsPerPage={30}
        totalNumberofItems={60}
        goToPrev={() => { }}
        goToNext={() => { }}
      />, div,
    );
  });
});
