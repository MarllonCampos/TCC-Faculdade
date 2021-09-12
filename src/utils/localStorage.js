export function saveData(data) {
  try {
    localStorage.setItem('greeneryData', JSON.stringify(data))
    return 'sucesso'
  } catch (e) {
    return `erro ${e}`
  }
}

export function localData(sessionName) {
  try {
    return JSON.parse(localStorage.getItem(sessionName))
  } catch (e) {
    return `erro ${e}`
  }
}
