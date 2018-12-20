import React from 'react';
import { mount, shallow } from 'enzyme';
import Game from './Game';

describe('Game', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('renders the title', () => {
    const wrapper = shallow(<Game />);
    const title = <h1>World's Simplest Poker</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  const mockFunction = jest.fn();

  xit('clicking submit calls the function', () => {
    const wrapper = mount(<Game handleSubmit={mockFunction} />);

    const button = wrapper.find('input#submit');
    expect(button.length).toBe(1);
    button.simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });
});
