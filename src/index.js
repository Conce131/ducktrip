// Funcionalidad para buscar en google con el buscador del inicio:

// Verificar si se pulsa enter con .ddEventListener("keydown", (event) => {})
// si la tecla even.key es "Enter" llamara la funcion que intrudce la buscqueda
document.getElementById("googleButton").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchInGoogle();
  }
});

// la funcion recoge lo que esta escrito en el id="googleButton" del html con .value
// si se ha escrito algo entonces abrira una pestaña nueva
const searchInGoogle = () => {
  const query = document.getElementById("googleButton").value;

  if (query) {
    window.open(`https://www.google.com/search?q=${query}`);
  }
};
document
  .querySelector(".search-button")
  .addEventListener("click", searchInGoogle);
// las ultimas lineas sirven para buscar en el html la clase (".search-button")
// luego si se hace click en esa clase se llamara la funcion searchInGoogle
