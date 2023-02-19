
const ls=localStorage
function darkMode(elements){
  elements.forEach(element => {
    element.classList.add("dark")
  })
  ls.setItem("theme","dark")

}
function lightMode(elements){
  elements.forEach(element => {
    element.classList.remove("dark")
  })
  ls.setItem("theme","light")
}

export const changeTheme=({checkedTheme})=>{ 
  const $elements= document.querySelectorAll("[data-theme]")
  if(checkedTheme){
    darkMode($elements)
  }else{
    lightMode($elements)
  }
}
