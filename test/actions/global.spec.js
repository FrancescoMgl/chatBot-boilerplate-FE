import * as Actions from '../../src/actions/global'

describe('Global action', () => {

  it('should set global from object', () => {
    const config = {
      theme: 'custom',
      mode: 'modal'
    }

    const expectedAction = {
      type: Actions.Type.SET,
      key: config,
      value: undefined
    }

    expect(Actions.set(config)).toEqual(expectedAction)
  })

  it('should set global from key/value', () => {
    const key = 'theme'
    const value = 'custom'
    const expectedAction = {
      type: Actions.Type.SET,
      key: key,
      value: value
    }

    expect(Actions.set(key, value)).toEqual(expectedAction)
  });
})
