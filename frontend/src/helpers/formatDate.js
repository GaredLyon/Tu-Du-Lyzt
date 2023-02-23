export const formatDate = (dateSaved) =>{
  const date = new Date(dateSaved);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formatedDate = date.toLocaleDateString('es-ES', options);

  return formatedDate
}