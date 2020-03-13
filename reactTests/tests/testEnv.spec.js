import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/src/components/App.jsx';

describe('Testing environment set-up', () => {
  it('"npm test" should run jest correctly', () => {
    expect(true).toEqual(true);
  });

  it('Should handle React components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
