import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders correctly without props', () => {
    const component = shallow(<Card />);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const card = {
      suit: 'Hearts',
      rank: 'A',
      img: 'hearts.png'
    }
    const component = shallow(<Card props={card} />);
    expect(component).toMatchSnapshot();
  });
});
