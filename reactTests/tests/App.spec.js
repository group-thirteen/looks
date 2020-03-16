import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/src/components/App.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('App rendering', () => {
  it('should render the App', () => {
    expect(wrapper.find('[test="looks"]')).toExist();
  });

  it('should render as many carousels as categories', () => {
    expect(wrapper).toContainMatchingElements(7, 'Carousel');
  });
});

describe('API calls', () => {
  it('should make a "get" request to the server upon mount', () => {
  });

  it('should change the state upon successful ajax call', () => {
  });

  it('should console log error if ajax call fails', () => {});
});
