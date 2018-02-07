import React, { Component, PropTypes } from 'react'
import ChatMessage from '../ChatMessage'

class ChatRow extends Component {
  render() {
    return (
      <ChatMessage type={this.props.type} text={this.props.text} />
    )
  }
}

ChatRow.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ChatRow
