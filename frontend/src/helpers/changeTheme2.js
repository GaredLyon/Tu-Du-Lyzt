const numberThemes = 3
let number = 1

export const changeTheme2 = () => {

  number++

  if(number > numberThemes) number = 1

  document.getElementById('home').className = `App theme${number}`

  //GUARDAR EL TEMA EN LOCAL STORAGE
  localStorage.setItem('theme2', number)
}