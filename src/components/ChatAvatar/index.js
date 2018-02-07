import React, { Component, PropTypes } from 'react'

class ChatAvatar extends Component {
  render() {
    return (
      <div className='chat-avatar'>{}</div>
    )
  }
}

ChatAvatar.propType = {
  type: PropTypes.object.isRequired
}

export default ChatAvatar
