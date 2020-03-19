import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../client/src/components/Header.jsx';
import exampleDbEntry from '../../database/exampleDbEntry';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header user={exampleDbEntry.username} title={exampleDbEntry.lookName}/>);
});

describe('Header', () => {
  it('should render a header', () => {
    expect(wrapper.find('[test="header"]')).toExist();
  });

  it('should render the correct username', () => {
    expect(wrapper.find('[test="username"]')).toHaveText(exampleDbEntry.username);
  });

  it('should render the correct look name', () => {
    expect(wrapper.find('[test="lookname"]')).toHaveText(exampleDbEntry.lookName);
  });
});
