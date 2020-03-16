import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../../client/src/components/Carousel.jsx';
import exampleDbEntry from '../../database/exampleDbEntry';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Carousel imageData={exampleDbEntry.bottoms} />);
});

describe('Carousel rendering', () => {
  it('should render the carousel', () => {
    expect(wrapper.find('[test="carousel"]')).toExist();
  });

  it('should render two buttons', () => {
    expect(wrapper).toContainMatchingElements(2, 'button');
  });

  it('should render images', () => {
    expect(wrapper.find('img')).toExist();
  });
});
