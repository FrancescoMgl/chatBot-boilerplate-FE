/* global CONFIG */

const ChatBotConfig = {
  url: document.URL,
  ...CONFIG
}

const ChatBotPopupConfig = {
  channelmode: 'no',  // <yes|no|1|0> Whether or not to display the window in theater mode. Default is no. IE only
  directories: 'no',  // <yes|no|1|0> Obsolete. Whether or not to add directory buttons. Default is yes. IE only
  fullscreen: 'no',   // <yes|no|1|0> Whether or not to display the browser in full-screen mode. Default is no. A window in full-screen mode must also be in theater mode. IE only
  height: 600,        // <pixels> The height of the window. Min. value is 100
  left: 0,            // <pixels> The left position of the window. Negative values not allowed
  location: 'no',     // <yes|no|1|0> Whether or not to display the address field. Opera only
  menubar: 'no',      // <yes|no|1|0> Whether or not to display the menu bar
  resizable: 'yes',   // <yes|no|1|0> Whether or not the window is resizable. IE only
  scrollbars: 'yes',  // <yes|no|1|0> Whether or not to display scroll bars. IE, Firefox & Opera only
  status: 'no',       // <yes|no|1|0> Whether or not to add a status bar
  titlebar: 'yes',    // <yes|no|1|0> Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box
  toolbar: 'no',      // <yes|no|1|0> Whether or not to display the browser toolbar. IE and Firefox only
  top: 0,             // <pixels> The top position of the window. Negative values not allowed
  width: 450          // <pixels> The width of the window. Min. value is 100
}

export default class ChatBot {
  constructor() {
    this.win = {}
  }

  _encode(params) {
    let result = []

    for (let item in params) {
      if (params[item]) {
        result.push(`${item}=${params[item]}`)
      }
    }

    return result.join(',')
  }

  open(callback) {
    this.win = window.open(ChatBotConfig.url, '_black', this._encode(ChatBotPopupConfig))
    this.win.onload = () => {
      if (typeof callback === 'function') {
        callback()
      }
    }

    return this
  }

  close(callback) {
    this.win.close()

    if (typeof callback === 'function') {
      callback()
    }
  }
}

((name, Definition) => {
  if (typeof window !== 'undefined') window.ChatBot = new Definition()
})('ChatBot', ChatBot)
