/* **Funciones anonimas Autoejecurable */
/* **MENU** */

((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  /* Cuando detecte el click en algun enlace enviar al sitio y cerrar el menu */
  /*  Se conoce el siguiente codigo como tegnica de la delegacion de eventos */

  d.addEventListener("click", (e) => {
    /* Pregunto si el evento que origino el click en el documento no es un enlace que esta dentro del menu entonces retorna falso y no pasa nada*/
    if (!e.target.matches(".menu a")) return false;
    /* pero si esta has lo siguiente */
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);
/* paso como parametro el objeto document */
