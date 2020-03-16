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

  it('should render two buttons', () => {
    expect(wrapper).toContainMatchingElements(2, 'button');
  });

  it('should render one card', () => {
    expect(wrapper.find('Card')).toExist();
  });

  it('should register clicks', () => {
    expect(wrapper.find('#left')).toHaveProp('onClick');
    expect(wrapper.find('#right')).toHaveProp('onClick');
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[0]);

    wrapper.find('#right').simulate('click');

    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[1]);

    wrapper.find('#left').simulate('click');

    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[0]);
  });

  it('should not change image if it image is first or last in array', () => {
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[0]);

    wrapper.find('#left').simulate('click');
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[0]);

    wrapper.setState({
      currentCard: exampleDbEntry.bottoms[2],
    });

    wrapper.find('#right').simulate('click');
    expect(wrapper).toHaveState('currentCard', exampleDbEntry.bottoms[2]);
  });
});
