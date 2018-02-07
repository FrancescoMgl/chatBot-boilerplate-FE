import React from 'react'
import Popup from '../../src/containers/Popup'
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

  const wrapper = shallow(<Popup store={store} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly after init', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should open', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should close', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
