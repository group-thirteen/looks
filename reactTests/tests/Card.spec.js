import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../client/src/components/Card.jsx';
import exampleDbEntry from '../../database/exampleDbEntry';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Card product={exampleDbEntry.bottoms[0]} />);
});

describe('Card rendering', () => {
  it('should render the card', () => {
    expect(wrapper.find('[test="card"]')).toExist();
  });

  it('should render one image', () => {
    expect(wrapper).toContainExactlyOneMatchingElement('img');
  });
});
