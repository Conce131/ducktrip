/* eslint-disable quotes */
// Funcionalidad para buscar en google con el buscador del inicio:

// Verificar si se pulsa enter con .ddEventListener("keydown", (event) => {})
// si la tecla even.key es "Enter" llamara la funcion que intrudce la buscqueda
document.getElementById('googleButton').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchInGoogle();
  }
});

// la funcion recoge lo que esta escrito en el id="googleButton" del html con .value
// si se ha escrito algo entonces abrira una pestaña nueva
const searchInGoogle = () => {
  const query = document.getElementById('googleButton').value;

  if (query) {
    window.open(`https://www.google.com/search?q=${query}`);
  }
};
document.querySelector('.search-button').addEventListener('click', searchInGoogle);
// las ultimas lineas sirven para buscar en el html la clase (".search-button")
// luego si se hace click en esa clase se llamara la funcion searchInGoogle

//

// ? guardamos en una variable el div de las tarjetas de la seccion vuelos
const section3Cards = document.querySelectorAll('div.section3-card');
// como devuelve un array de div entonces hacemos un forEach para recorrerlo y asi hacer el
// evento click en cada Card llamando a searchInGoogleImg con this refiriendose a esta card
section3Cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    // Aqui guardamos en infoTitle justo el texto que tiene .info-tittle al que clicas
    const infoTitle = event.currentTarget.querySelector('.info-title').textContent;
    searchInGoogleImg(infoTitle);
  });
});
// se le pasa por parametro la informacion del contendor que clicamos guarda
// en una variable el texto de .info-tittle y hace una busqueda con ese texto
const searchInGoogleImg = (infoTitle) => {
  console.log(infoTitle);
  window.open(`https://www.google.com/search?q=${infoTitle}`);
};
