import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders correctly without props', () => {
    const component = shallow(<Card />);
    expect(component).toMatchSnapshot();
  });
});
