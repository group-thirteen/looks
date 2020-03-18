import React from 'react';
import { mount } from 'enzyme';
import LikeShareDesc from '../../client/src/components/LikeShareDesc.jsx';

let wrapper;

beforeEach(() => {
  wrapper = mount(<LikeShareDesc likes={4} description={'test'} />);
});

describe('Likes + Share + Description Bar', () => {
  describe('rendering behavior', () => {
    it('should render the component correctly', () => {
      expect(wrapper.find('[test="likeDescBar"]')).toExist();
    });

    it('should render a like and share button', () => {
      expect(wrapper).toContainMatchingElements(2, 'img');
    });
  });

  describe('likes', () => {
    it('should display the correct number of likes', () => {
      expect(wrapper.find('[test="likes"]')).toHaveText('4 love this look');
    });

    it('should display the correct terminology if only one person loved the look', () => {
      const onePerson = mount(<LikeShareDesc likes={1} description={''} />);

      expect(onePerson.find('[test="likes"]')).toHaveText('1 person loves this look');
    });

    it('should display nothing if there are no likes', () => {
      const noLikes = mount(<LikeShareDesc likes={0} description={''} />);

      expect(noLikes.find('[test="likes"]')).not.toHaveText('this look');
    });
  });

  describe('Description', () => {
    it('should render the correct description', () => {
      expect(wrapper.find('[test="description"]')).toHaveText('test');
    });
  });
});
