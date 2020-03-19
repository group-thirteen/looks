import React from 'react';
import { mount } from 'enzyme';
import App from '../../client/src/components/App.jsx';

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />);
});

describe('App rendering', () => {
  it('should render the App', () => {
    expect(wrapper.find('[test="looks"]')).toExist();
  });

  it('should render as many carousels as categories', () => {
    expect(wrapper).toContainMatchingElements(7, 'Carousel');
  });
});
