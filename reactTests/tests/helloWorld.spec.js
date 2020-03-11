import React from 'react';
import App from '../../client/src/components/App.jsx';
import {mount, shallow} from 'enzyme';

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe('React test', () => {
  it('Should handle React components', () => {
    let handler = shallow(<App />);
    expect(handler).toExist();
  });
});
