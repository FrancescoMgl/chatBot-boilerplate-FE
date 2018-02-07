/* global describe, it, expect, jest */

import React from 'react';
import ChatInput from '../../src/components/ChatInput';
import { shallow, mount } from 'enzyme';

describe('Rendering ChatInput component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ChatInput inputPlaceholder='Type a question' send={jest.fn()} />);
    expect(wrapper).toMatchSnapshot()
  })

  it('should send a message if button is clicked', () => {
    const onClicked = jest.fn();
    const wrapper = mount(<ChatInput inputPlaceholder='Digit a question' send={onClicked} />);
    const input = wrapper.find('.input-space').find('input');
    input.simulate('change', {target: {value: 'My new value'}});
    const button = wrapper.find('.button-space').find('input');
    button.simulate('click');
    expect(onClicked).toBeCalledWith('My new value');
  })

  it('should not send a message if button is clicked and input field is empty', () => {
    const onClicked = jest.fn();
    const wrapper = mount(<ChatInput inputPlaceholder='Type a question' send={onClicked} />);
    const button = wrapper.find('.button-space').find('input');
    button.simulate('click');
    expect(onClicked).not.toBeCalled();
  })

  it('should have disabled button after sending', () => {
    const onClicked = jest.fn();
    const wrapper = mount(<ChatInput inputPlaceholder='Type a question' send={onClicked} />);
    const input = wrapper.find('.input-space').find('input');
    input.simulate('change', {target: {value: 'My new value'}});
    const button = wrapper.find('.button-space').find('input');
    button.simulate('click');
    expect(button.html().includes('disabled')).toEqual(true);
  })
});
