class Storage {
  static serialize(data) {
    return JSON.stringify(data);
  }

  static deserialize(string) {
    return JSON.parse(string);
  }

  constructor(name, context = window) {
    this._context = context
    this._name = name
    this._ls = this._context.localStorage
    this._store = this._getFromStore() || {}

    this._changeStorageHandler = this._changeStorageHandler.bind(this)
    this._context.addEventListener('storage', this._changeStorageHandler)
  }

  destructor() {
    this._context.removeEventListener('storage', this._changeStorageHandler)
    this._ls.removeItem(this._name)

    delete this._context
    delete this._ls
    delete this._store
  }

  get(key) {
    return this._store[key]
  }

  set(key, value) {
    this._store[key] = value
    this._updateStore();
  }

  getAll() {
    return this._store
  }

  setObject(obj) {
    this._store = Object.assign(this._store, obj)
    this._updateStore()
  }

  remove(key) {
    delete this._store[key]
    this._updateStore()
  }

  clear() {
    this._store = {}
    this._updateStore()
  }

  _getFromStore() {
    try {
      return Storage.deserialize(this._ls.getItem(this._name));
    } catch (e) {
    }
  }

  _updateStore() {
    try {
      this._ls.setItem(this._name, Storage.serialize(this._store))
    } catch (e) {
    }
  }

  _changeStorageHandler(event) {
    this._store = this._getFromStore() || {}
  }
}

export default (new Storage('ChatBotModule'))
