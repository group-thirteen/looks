import React from 'react';
import { mount } from 'enzyme';
import Modal from '../../client/src/components/Modal.jsx';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Modal showModal={false} />);
});

describe('Modal behavior', () => {
  it('should have spec initialized to false', () => {
    expect(wrapper).toHaveProp('showModal', false);
  });
});
