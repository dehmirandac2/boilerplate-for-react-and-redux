import React from 'react';
import { HelloWorld } from '../../src/views/hello-world';
import { shallow } from 'enzyme';

describe('HelloWorld component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HelloWorld />);
  });

  it('should render the view component', () => {
    expect(wrapper.find('h1').text()).toBe('Hello World!');
  });
  
});