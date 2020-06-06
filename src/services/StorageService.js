const StorageService = {
  get(key) {
    const values = localStorage.getItem(key)
    if(values === null) 
      return {}
    return JSON.parse(values)
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
}

export default StorageService;