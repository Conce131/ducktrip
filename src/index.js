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

    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }