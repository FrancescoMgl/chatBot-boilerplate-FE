import _ from 'lodash';
import React, {Component, PropTypes} from 'react'

class ChatInput extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {message: '', buttonDisabled: true}

    this.handleTextChanged = this.handleTextChanged.bind(this)
    this.handleSendMessage = this.handleSendMessage.bind(this)
    this.handlePressEnter = this.handlePressEnter.bind(this)
  }

  handleSendMessage() {
    if (this.state.message !== '' && !_.isUndefined(this.state.message)) {
      this.setState({message: '', buttonDisabled: true})
      this.props.send(this.state.message)
    }
  }

  handleTextChanged(evt) {
    this.setState({message: evt.target.value, buttonDisabled: false})
  }

  handlePressEnter(evt) {
    if (evt.charCode === 13) {
      this.handleSendMessage()
    }
  }

  render() {
    return (
      <div className='chat-input'>
        <div className='chat-input-core'>
          <div className='input-space'>
            <input
              placeholder={this.props.inputPlaceholder}
              value={this.state.message}
              onChange={this.handleTextChanged}
              onKeyPress={this.handlePressEnter} />
          </div>
          <div className='button-space'>
            <input
              type='submit'
              className='submit'
              value='»'
              onClick={this.handleSendMessage}
              disabled={this.state.buttonDisabled} />
          </div>
        </div>
      </div>
    )
  }
}

ChatInput.propTypes = {
  inputPlaceholder: PropTypes.string.isRequired,
  send: PropTypes.func.isRequired
}

export default ChatInput
