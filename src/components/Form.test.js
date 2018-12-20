import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('renders correctly', () => {
    const form = shallow(<Form />);
    expect(form).toMatchSnapshot();
  });
});
