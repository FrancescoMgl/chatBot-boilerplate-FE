import React from 'react'
import Renderer from 'react-test-renderer'
import ChatAvatar from '../../src/components/ChatAvatar'

describe('Rendering ChatAvatar Component', () => {
  it('renders correctly', () => {

    const tree = Renderer.create(
      <ChatAvatar/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
