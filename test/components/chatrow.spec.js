import React from 'react'
import Renderer from 'react-test-renderer'
import ChatRow from '../../src/components/ChatRow'

describe('Rendering ChatRow Component', () => {
  it('renders correctly QUESTION type', () => {

    const tree = Renderer.create(
      <ChatRow text='This is just a text' type='question'/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly ANSWER type', () => {

    const tree = Renderer.create(
      <ChatRow text='This is just a text' type='answer'/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
