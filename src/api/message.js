/* global CONFIG */

export default class MessageApi {
  static sendMessage(message) {
    return fetch(`${CONFIG.api}/test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: 'XXX123456',
        params: {}
      })
    })
      .then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
  }
}
