import React from 'react'
import Modal from '../../src/containers/Modal'
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

describe('Rendering ModalContainer', () => {

  const wrapper = shallow(<Modal store={store} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should react to chatBot.open', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should react to chatBot.close', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
