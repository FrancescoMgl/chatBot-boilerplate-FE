import React from 'react'
import Renderer from 'react-test-renderer'
import ChatMessage from '../../src/components/ChatMessage'

describe('Rendering ChatMessage Component', () => {
  it('renders correctly QUESTION type', () => {

    const tree = Renderer.create(
      <ChatMessage text='This is just a text' type='question'/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly ANSWER type', () => {

    const tree = Renderer.create(
      <ChatMessage text='This is just a text' type='answer'/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

})
