export const startTheme = () => {

  const themeSaved = localStorage.getItem('theme2') || 1

  document.getElementById('home').className = `App colors themes${themeSaved}`

  return themeSaved
}