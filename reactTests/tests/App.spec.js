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

  it('should render three columns', () => {
    expect(wrapper).toContainMatchingElements(3, 'Column');
  });

  it('should render the header', () => {
    expect(wrapper.find('Header')).toExist();
  });

  it('should render the like + share + description bar', () => {
    expect(wrapper.find('LikeShareDesc')).toExist();
  });
});
