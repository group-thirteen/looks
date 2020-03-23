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

  it('should render three columns', () => {
    expect(wrapper).toContainMatchingElements(3, 'Column');
  });

  it('should render the header', () => {
    expect(wrapper.find('Header')).toExist();
  });

  it('should render the like + share + description bar', () => {
    expect(wrapper.find('LikeShareDesc')).toExist();
  });

  it('should have state showModal', () => {
    expect(wrapper).toHaveState('showModal', false);
  });

  it('should render the Modal upon clicking the share icon', () => {
    expect(wrapper.find('[test="modal"]')).not.toExist();

    wrapper.find('[test="sharebutton"]').simulate('click');

    expect(wrapper.find('Modal')).toExist();
  });

  it('should hide the Modal upon clicking close', () => {
    wrapper.find('[test="sharebutton"]').simulate('click');
    expect(wrapper.find('Modal')).toExist();

    wrapper.find('[test="closeButton"]').simulate('click');
    expect(wrapper.find('Modal')).not.toExist();
  });
});
