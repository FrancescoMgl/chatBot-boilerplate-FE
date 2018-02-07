import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Event from '../../helper/event'
import Chat from '../../containers/Chat'

class Modal extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  }

  componentDidMount() {
    Event.subscribe('chatBot.open', this.handleOpen.bind(this))
    Event.subscribe('chatBot.close', this.handleClose.bind(this))
  }

  handleOpen(callback) {
    if (typeof callback === 'function') {
      callback()
    }
  }

  handleClose(callback) {
    if (typeof callback === 'function') {
      callback()
    }
  }

  render() {
    require('./modal.scss')
    return (
      <Chat />
    )
  }
}

export default connect(
  state => ({config: state.global}),
  {}
)(Modal)
