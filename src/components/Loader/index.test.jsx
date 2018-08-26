import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Loader from '.';

describe('Loader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loader loading={false} />);
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader loading />, div);
  });

  it('should be not render fully when loading is false', () => {
    // given
    const loading = false;

    // when
    wrapper.setProps({ loading });

    // then
    expect(wrapper.find('h2')).toHaveLength(0);
  });

  it('should render fully when loading is true', () => {
    // given
    const loading = true;

    // when
    wrapper.setProps({ loading });

    // then
    expect(wrapper.find('h2')).toHaveLength(1);
  });
});
