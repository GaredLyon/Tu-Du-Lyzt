const numberThemes = 1
// let number = 1

export const changeTheme2 = (number) => {

  number++

  if(number > numberThemes) number = 1

  document.getElementById('home').className = `App scheme${number} themes${number} scheme`

  //GUARDAR EL TEMA EN LOCAL STORAGE
  localStorage.setItem('theme2', number)

  return number
}