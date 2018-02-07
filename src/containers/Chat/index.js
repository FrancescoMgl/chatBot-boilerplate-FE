import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Scroll from 'react-scroll'
import ChatRow from '../../components/ChatRow'
import ChatInput from '../../components/ChatInput'
import {MessageActions} from '../../actions/messages'

const scroller = Scroll.animateScroll

class Chat extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleMessageSend = this.handleMessageSend.bind(this)
  }

  static propTypes = {
    config: PropTypes.object.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onMessageSend: PropTypes.func.isRequired
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  handleMessageSend(text) {
    this.props.onMessageSend(text)
  }

  scrollToBottom() {
    scroller.scrollToBottom({
      containerId: 'messageList',
      smoot: true,
      duration: 500,
      delay: 500
    })
  }

  render() {
    if (this.props.config.theme) {
      require('../../themes/' + this.props.config.theme + '-theme.scss')
    }

    return (
      <div className='main'>
        <div className='content'>
          <div className='content-inner' id='messageList'>
            <div className='chat-container'>
              <div className='chat-history-container'>
                <div className='chat-history-message'>
                  {this.props.messages.map((message, index) =>
                    <ChatRow
                      key={index}
                      type={message.type}
                      {...message} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='input-container'>
          <ChatInput
            inputPlaceholder='Type a message...'
            send={this.handleMessageSend}
            response={this.handleMessageResponse} />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    config: state.global,
    messages: state.messages
  }),
  (dispatch) => ({
    onMessageSend: (text) => {
      dispatch(MessageActions.sendMessage(text))
    }
  })
)(Chat)
