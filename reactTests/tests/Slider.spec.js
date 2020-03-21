import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../../client/src/components/Slider.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Slider />);
});

describe('Slider behavior', () => {
  it('should render the slider', () => {
    expect(wrapper.find('[test="slider"]')).toExist();
  });
});
