import React from 'react'
import Chat from '../../src/containers/Chat'
import { shallow, mount } from 'enzyme';
import {createStore, combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import * as reducers from '../../src/reducers'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

describe('Rendering ChatContainer', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Chat store={store} />);
    expect(wrapper).toMatchSnapshot()
  })

  it('has message list', () => {
    const wrapper = mount(<Chat store={store} />);
    const messageListPresent = wrapper.find('.message').length > 0;
    expect(messageListPresent).toEqual(true);
  })

  it('has input area', () => {
    const wrapper = mount(<Chat store={store} />);
    const chatInputPresent = wrapper.find('.chat-input').length > 0;
    expect(chatInputPresent).toEqual(true);
  })
})
