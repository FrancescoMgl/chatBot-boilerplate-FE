/* global CONFIG */

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import {camelCase} from '../../helper/string'
import {set} from '../../actions/global'

import * as reducers from '../../reducers'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware)
)

const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    store.dispatch(set(CONFIG))
    store.dispatch(set('bootstrap', false))

    const classname = camelCase('modal')
    const instance = require(`../${classname}/index`).default

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={instance} />
        </Router>
      </Provider>
    )
  }
}

export default App
