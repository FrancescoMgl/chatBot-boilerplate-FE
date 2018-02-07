import MessageApi from '../api/message'

export const MessageTypes = {
  'SEND_MESSAGE': 'question',
  'GOT_MESSAGE': 'answer'
}

export const MessageActions = {
  sendMessage: (text) => {
    return dispatch => {
      dispatch({
        type: MessageTypes.SEND_MESSAGE,
        text
      })

      return MessageApi.sendMessage(text)
        .then(data => {
          const message = data.messageOutput || `Sorry, I can't help you!`
          dispatch(MessageActions.gotMessage(message))
        })
        .catch(() => {
        })
    }
  },
  gotMessage: (text) => {
    return {
      type: MessageTypes.GOT_MESSAGE,
      text
    }
  }
}
