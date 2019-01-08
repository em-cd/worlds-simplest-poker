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

  it('submitting the form with the default values shows the table', () => {
    const wrapper = mount(<Game />);
    const form = wrapper.find('form');
    form.simulate('submit');
    const table = wrapper.find('div.table');
    expect(table.length).toBe(1);
  });
});
