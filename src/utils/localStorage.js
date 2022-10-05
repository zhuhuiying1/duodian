const storage = {
  setItem (key, value, timer) {
    localStorage.setItem(key, JSON.stringify({
      value,
      timer: +new Date() + timer
    }))
  },
  getItem (key) {
    const res = JSON.parse(localStorage.getItem(key))
    if (res && res.timer > +new Date()) { // 大于说明没超时
      return res.value
    }
    localStorage.removeItem(key)
    return null
  },
  removeItem (key) {
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  }
}
export default storage
