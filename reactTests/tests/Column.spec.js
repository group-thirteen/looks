import React from 'react';
import { shallow } from 'enzyme';
import exampleDbEntry from '../../database/exampleDbEntry';
import Column from '../../client/src/components/Column.jsx';

let wrapper;

const categories = [
  'outerwear',
  'jewelry',
  'belts',
];

beforeEach(() => {
  wrapper = shallow(<Column categories={categories} productData={exampleDbEntry} />);
});

describe('Column rendering', () => {
  it('should render as many carousels as categories passed in', () => {
    expect(wrapper).toContainMatchingElements(categories.length, 'Carousel');
  });
});
