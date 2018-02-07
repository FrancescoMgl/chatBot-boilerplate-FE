import React, { Component, PropTypes } from 'react'
import ChatAvatar from '../ChatAvatar'
import {zerofy} from '../../helper/string'

class ChatMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        {this.props.type === 'answer' ? (
          <div className='message-content'>
            <ChatAvatar />
            <div className='message bubble-answer'>
              { this.props.text }
              <div className='time'>{zerofy(this.state.date.getHours()) + ':' + zerofy(this.state.date.getMinutes())}</div>
            </div>
          </div>
        ) : (
          <div className='message-content right'>
            <ChatAvatar />
            <div className='message bubble-question'>
              { this.props.text }
              <div className='time'>{zerofy(this.state.date.getHours()) + ':' + zerofy(this.state.date.getMinutes())}</div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

ChatMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default ChatMessage
