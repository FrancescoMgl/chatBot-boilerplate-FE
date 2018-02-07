import _ from 'lodash'
import {Type} from '../actions/global'

const config = {
  theme: undefined,
  mode: 'modal'
}

function addConfig(key, value) {
  if (_.isObject(key)) {
    _.assign(config, key)
  } else if (_.isString(key)) {
    _.set(config, key, value)
  }
}

export default function update(state = config, action) {
  switch (action.type) {
    case Type.SET:
      addConfig(action.key, action.value)
      break
  }
  return state
}
