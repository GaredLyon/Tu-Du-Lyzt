const cantidadTemas = 3
let tema = 1

export const changeTheme2 = () => {

  tema++

  if(tema > cantidadTemas) tema = 1

  document.getElementById('home').className = `App tema${tema}`

  //GUARDAR EL TEMA EN LOCAL STORAGE
  localStorage.setItem('theme2', tema)
}