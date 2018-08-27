import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
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

  describe('props', () => {
    let wrapper;
    let prevMockFn;
    let nextMockFn;

    beforeEach(() => {
      prevMockFn = jest.fn();
      nextMockFn = jest.fn();

      wrapper = shallow(<Pagination
        page={1}
        itemsPerPage={30}
        totalNumberofItems={60}
        goToPrev={prevMockFn}
        goToNext={nextMockFn}
      />);
    });

    it('should display 2 as a page', () => {
      // given
      const newPage = 2;

      // when
      wrapper.setProps({
        page: newPage,
      });

      // then
      expect(wrapper.find('.hn-pagination__content div').at(0).text())
        .toBe(`Page:${newPage}`);
    });

    it('should display 60 items per page', () => {
      // given
      const newItemsPerPage = 60;

      // when
      wrapper.setProps({
        itemsPerPage: newItemsPerPage,
      });

      // then
      expect(wrapper.find('.hn-pagination__content div').at(1).text())
        .toBe(`Displaying:0-${newItemsPerPage}`);
    });

    it('should display 120 total number items', () => {
      // given
      const newTotalNumberOfItems = 120;

      // when
      wrapper.setProps({
        totalNumberofItems: newTotalNumberOfItems,
      });

      // then
      expect(wrapper.find('.hn-pagination__content div').at(2).text())
        .toBe(`Total:${newTotalNumberOfItems}`);
    });

    it('should go to the prev page', () => {
      // when
      wrapper.find('.hn-pagination__prev button').simulate('click');

      // then
      expect(prevMockFn.mock.calls).toHaveLength(1);
    });

    it('should go to the next page', () => {
      // when
      wrapper.find('.hn-pagination__next button').simulate('click');

      // then
      expect(nextMockFn.mock.calls).toHaveLength(1);
    });
  });
});
