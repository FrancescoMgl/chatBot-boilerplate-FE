import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

export default function init() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

init()
