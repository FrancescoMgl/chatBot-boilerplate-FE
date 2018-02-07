export const Type = {
  SET: 'SET'
}

export function set(key, value) {
  return {
    type: Type.SET,
    key: key,
    value: value
  }
}
