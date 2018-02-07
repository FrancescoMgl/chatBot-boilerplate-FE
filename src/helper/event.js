class Event {
  constructor() {
    this.init()
  }

  init() {
    this.queue = {}
  }

  subscribe(event, callback) {
    if (typeof this.queue[event] === 'undefined') {
      this.queue[event] = []
    }

    this.queue[event].push(callback)
  }

  publish(event, data) {
    const queue = this.queue[event]

    if (typeof queue === 'undefined') {
      return false
    }

    queue.forEach(item => {
      item(data)
    })

    return true
  }
}

export default (new Event())
