/* global describe, it, expect */

import reducer from '../../src/reducers/message'
import {MessageTypes} from '../../src/actions/messages'

describe('message reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([{
      type: MessageTypes.GOT_MESSAGE,
      text: 'What can I help you with?'
    }])
  })

  it('should handle SEND_MESSAGE', () => {
    expect(reducer([], {
      type: MessageTypes.SEND_MESSAGE,
      text: 'Send message'
    })).toEqual([{
      type: MessageTypes.SEND_MESSAGE,
      text: 'Send message'
    }])

    expect(reducer([{
      type: MessageTypes.SEND_MESSAGE,
      text: 'Send message'
    }], {
      type: MessageTypes.SEND_MESSAGE,
      text: 'Send message'
    })).toEqual([{
      type: MessageTypes.SEND_MESSAGE,
      text: 'Send message'
    }, {
      type: MessageTypes.SEND_MESSAGE,
      text: 'Send message'
    }])
  })

  it('should handle GOT_MESSAGE', () => {
    expect(reducer([], {
      type: MessageTypes.GOT_MESSAGE,
      text: 'Send message'
    })).toEqual([{
      type: MessageTypes.GOT_MESSAGE,
      text: 'Send message'
    }])

    expect(reducer([{
      type: MessageTypes.GOT_MESSAGE,
      text: 'Send message'
    }], {
      type: MessageTypes.GOT_MESSAGE,
      text: 'Send message'
    })).toEqual([{
      type: MessageTypes.GOT_MESSAGE,
      text: 'Send message'
    }, {
      type: MessageTypes.GOT_MESSAGE,
      text: 'Send message'
    }])
  })

})
