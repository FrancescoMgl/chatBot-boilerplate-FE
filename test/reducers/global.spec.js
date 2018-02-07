import Reducer from '../../src/reducers/global'
import {Type} from '../../src/actions/global'

describe('Global reducer', () => {
  let config = {}

  beforeEach(() => {
    config = {
      theme: 'custom',
      mode: 'modal'
    }
  })

  it('Should return inital state', () => {
    expect(Reducer(undefined, {})).toEqual({
      theme: undefined,
      mode: 'modal'
    })
  })

  it('Should return state from object', () => {
    expect(Reducer(undefined, {
      type: Type.SET,
      key: config
    })).toEqual(config)
  })

  it('Should return state from key/value', () => {
    expect(Reducer(undefined, {
      type: Type.SET,
      key: 'theme',
      value: config.theme
    })).toEqual(config)
  })
})
