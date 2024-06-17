document.addEventListener("DOMContentLoaded", () => {
  let switcher = document.querySelector(".switcher__btn");
  let light = document.querySelector(".switcher__icon-light"); //aqui y en la siguiente variable, selecciono los dos botones oscuro y claro
  let dark = document.querySelector(".switcher__icon-dark");

  //cuando haga clic en el boton, intento agregar una hoja de estilos, que será la dark
  switcher.addEventListener("click", () => {
    let head = document.querySelector("head"); //primero selecciono la etiqueta head

    let link = document.createElement("link"); //me creo un elemento de html, en este caso un link y le agrego diferentes atributos
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./assets/css/dark.css"; //este es el href que tengo comentado en el index.html
    link.id = "theme-dark"; //creo este id y si algun elemento del DOM tiene es id , lo que haré será eliminar el link para que vuelva al modo normal y a los estilos por defecto

    let theme_dark = document.querySelector("#theme-dark");
    if (theme_dark) {
      //si yo soy capaz de seleccionar ese id que acabo de crear y lo he metido en la variable theme-dark, entonces elimino ese link
      head.removeChild(theme_dark);
      light.style.display = "block"; //entonces muestro el boton de light y quito el de dark
      dark.style.display = "none";
    } else {
      head.appendChild(link); //le agrego al head un elemento nuevo que sería el link del modo oscuro
      light.style.display = "none"; //quito el botón light
      dark.style.display = "block"; //aquí agrego el botón de dark
    }
  });
});
