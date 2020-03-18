import React from 'react';
import { mount } from 'enzyme';
import Carousel from '../../client/src/components/Carousel.jsx';
import exampleDbEntry from '../../database/exampleDbEntry';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Carousel category="bottoms" imageData={exampleDbEntry.bottoms} />);
});

describe('Carousel rendering', () => {
  it('should render the carousel', () => {
    expect(wrapper.find('[test="carousel"]')).toExist();
  });

  it('should render two buttons on hover', () => {
    wrapper.setState((state) => (
      {
        currentCard: state.currentCard,
        hovered: true,
      }
    ));

    expect(wrapper).toContainMatchingElements(2, 'button');
  });

  it('should render one image', () => {
    expect(wrapper.find('img')).toExist();
  });

  it('should render the price', () => {
    expect(wrapper.find('[test="price"]')).toExist();
  });

  it('should show and hide buttons upon hover', () => {
    expect(wrapper).toHaveState('hovered', false);

    wrapper.find('[test="carousel"]').simulate('mouseEnter');

    expect(wrapper).toHaveState('hovered', true);

    wrapper.find('[test="carousel"]').simulate('mouseLeave');

    expect(wrapper).toHaveState('hovered', false);
  });

  it('should register clicks', () => {
    wrapper.setState((state) => (
      {
        currentCard: state.currentCard,
        hovered: true,
      }
    ));

    expect(wrapper.find('#right')).toHaveProp('onClick');
    expect(wrapper.find('#left')).toHaveProp('onClick');
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[0]);

    wrapper.find('#right').simulate('click');
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[1]);

    wrapper.find('#left').simulate('click');
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[0]);
  });

  it('should not change image if image is first or last in array', () => {
    wrapper.setState((state) => (
      {
        currentCard: state.currentCard,
        hovered: true,
      }
    ));

    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[0]);

    wrapper.find('#left').simulate('click');
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[0]);

    wrapper.setState(() => (
      {
        currentCard: exampleDbEntry.bottoms[2],
        hovered: true,
      }
    ));

    wrapper.find('#right').simulate('click');
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[2]);
  });
});
