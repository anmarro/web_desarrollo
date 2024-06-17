document.addEventListener("DOMContentLoaded", (event) => {
  //capturar mis dos elementos principales, el boton del menu y el menu
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");

  //funcion mostrar y ocultar menu
  const showHiddenMenu = () => {
    let show = document.querySelector(".menu-mobile--show");
    if (show) {
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  };

  //Al dar click al boton del menu, mostrar el menu de navegacion
  mobile_btn.addEventListener("click", showHiddenMenu);

  //al redimensionar la pantalla por encima de 822 ocultar el menu
  window.addEventListener("resize", () => {
    let window_width = parseInt(document.body.clientWidth);
    if (window_width >= 822) {
      mobile_menu.classList.remove("menu-mobile--show");
    }
  });

  //cerrar el menu con el boton x
  let btn_close = document.querySelector(".menu-mobile__close");
  btn_close.addEventListener("click", showHiddenMenu);

  //Desplegar submenus
  let menu_item = document.querySelectorAll(".menu-mobile__item");

  menu_item.forEach((item) => {
    item.addEventListener("click", (event) => {
      let submenu = item.lastElementChild;

      if (submenu.className === "menu-mobile__submenu-mobile") {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      }
    });
  });
});
