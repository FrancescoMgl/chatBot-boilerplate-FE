import { MessageTypes } from '../actions/messages'

const initialMessages = [
    { type: MessageTypes.GOT_MESSAGE, text: 'What can I help you with?' }
];

export default function messages(state = initialMessages, action) {
  let newState = [];
  switch (action.type) {
    case MessageTypes.SEND_MESSAGE:
      newState = [...state, action]
      break;
    case MessageTypes.GOT_MESSAGE:
      newState = [...state, action]
      break
    default:
      newState = state;
      break;
  }
  return newState;
}
