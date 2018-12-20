import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';

describe('Game', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('renders the title', ()=> {
    const wrapper = shallow(<Game />);
    const title = <h1>World's Simplest Poker</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });
});
