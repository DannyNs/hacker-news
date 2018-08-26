import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';

import './index.scss';

const Loader = observer(({ loading }) => (
  <div className="hn-loader">
    {
      loading && <h2>Loading...</h2>
    }
  </div>
));

Loader.propTypes = {
  loading: PropType.bool.isRequired,
};

export default Loader;
