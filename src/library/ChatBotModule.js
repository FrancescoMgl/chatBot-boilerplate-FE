/* global define, CONFIG */

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../containers/App'
import Event from '../helper/event'
import Storage from '../helper/storage'

export default class ChatBotModule {
  constructor() {
    this.wrapper = document.createElement('div')
    document.body.appendChild(this.wrapper)
  }

  /**
   * Config ChatBot
   *
   * @param callback
   * @example
   * ChatBot.open()
   */
  init(callback) {
    Event.init()
    Storage.set('config', CONFIG)

    ReactDOM.unmountComponentAtNode(this.wrapper)
    ReactDOM.render(
      <App />,
      this.wrapper,
      callback
    )

    return true
  }

  open(callback) {
    Event.publish('chatBot.open', callback)
  }

  close(callback) {
    Event.publish('chatBot.close', callback)
  }
}

(function(name, Definition) {
  if (typeof window !== 'undefined') window.chatBot = new Definition()
  else if (typeof module !== 'undefined') module.exports = new Definition()
  else if (typeof define === 'function' && typeof define.amd === 'object') define(Definition)
  else this[name] = new Definition()
})('ChatBot', ChatBotModule)
