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

// Observa el elemento que deseas animar
// Seleccionamos los div que tienen la clase .information y .photo
const informationElement = document.querySelector('.information');
const photoElement = document.querySelector('.photo');

// declaramos la funcion observer:

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // "Si .information.esInterceptado, es decir, esta en la vista hace lo siguiente"
    if (entry.isIntersecting) {
      // Cuando el elemento es visible en la página, activa la animación
      informationElement.style.animationPlayState = 'running';
      photoElement.style.animationPlayState = 'running';
      // Cambia el estilo 'paused' que ya tiene .information y .photo en el css a 'running'
      // Detén la observación después de activar la animación
      observer.unobserve(entry.target);
    }
  });
});

// Comienza a observar el elemento
// Aqui le pasamos como parametros los dos div que guardamos anteriormente
observer.observe(informationElement);
observer.observe(photoElement);
