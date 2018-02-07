/* global describe, it, beforeAll */

import expect from 'expect';
import {MessageActions, MessageTypes} from '../../src/actions/messages'

describe('actions', () => {
  let getState;
  let dispatch;

  beforeAll(() => {
    getState = () => [
      {text: 'What can I help you with?', type: MessageTypes.GOT_MESSAGE},
      {text: '', type: MessageTypes.SEND_MESSAGE}
    ];
    dispatch = expect.createSpy()
  })

  it('should create an action to send a message', () => {
    MessageActions.sendMessage('')(dispatch, getState)

    expect(dispatch).toHaveBeenCalledWith({type: MessageTypes.SEND_MESSAGE, text: ''})
  })

  it('should create an action for a received message', () => {
    const text = 'System is sending this message'

    expect(MessageActions.gotMessage(text)).toEqual({type: MessageTypes.GOT_MESSAGE, text: text})
  })
})
