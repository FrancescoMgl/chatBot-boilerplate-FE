import React from 'react'
import App from '../../src/containers/App'
import { shallow } from 'enzyme';

const exampleConfig = {
  mode: 'modal',
  theme: 'base'
}

describe('App Containers', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App config={exampleConfig} bootstrap={true} />);
    expect(wrapper).toMatchSnapshot()
  })
})
