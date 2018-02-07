import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Event from '../../helper/event'
import ChatContainer from '../../containers/Chat'

class Popup extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.win = {}
  }

  componentDidMount() {
    Event.subscribe('chatBot.open', this.handleOpen.bind(this))
    Event.subscribe('chatBot.close', this.handleClose.bind(this))
  }

  handleOpen(callback) {
    const config = this.props.config
    this.win = window.open(document.URL, '_black')
    this.win.onload = () => {
      this.win.ChatBotModule.init(config, callback, true)
      if (typeof callback === 'function') {
        callback()
      }
    }
  }

  handleClose(callback) {
    this.win.close()
    if (typeof callback === 'function') {
      callback()
    }
  }

  render() {
    const {bootstrap} = this.props.config
    if (bootstrap) {
      require('./popup.scss')
      return (
        <ChatContainer />
      )
    }
    return (<div />)
  }
}

export default connect(
  state => ({config: state.global}),
  {}
)(Popup)
