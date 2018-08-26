import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';

import './index.scss';

const Pagination = observer(({
  page, itemsPerPage, totalNumberofItems, goToPrev, goToNext,
}) => (
  <div className="hn-pagination">

    <div className="hn-pagination__prev">
      <button onClick={goToPrev} type="button" className="hn-pagination__prev-button">
        prev
      </button>
    </div>

    <div className="hn-pagination__content">
      <span>
        Page:
      </span>
      {page}
      <span>
        Displaying:
      </span>
      {(page - 1) * itemsPerPage}
        -
      {page * itemsPerPage < totalNumberofItems ? page * itemsPerPage : totalNumberofItems}
      <span>
        Total:
      </span>
      {totalNumberofItems}
    </div>

    <div className="hn-pagination__next">
      <button onClick={goToNext} type="button" className="hn-pagination__next-button">
        next
      </button>
    </div>

  </div>
));

Pagination.propTypes = {
  page: PropType.number.isRequired,
  goToPrev: PropType.func.isRequired,
  goToNext: PropType.func.isRequired,
  itemsPerPage: PropType.number.isRequired,
  totalNumberofItems: PropType.number.isRequired,
};

export default Pagination;
