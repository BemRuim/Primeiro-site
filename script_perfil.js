
  // SEPARAR PARTE DIREITA DA ESQUERDA DO PERFIL

  document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var menuToggle = document.getElementById("menu-toggle");
    var menuIcon = menuToggle.querySelector("ion-icon");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("hidden");
        if (sidebar.classList.contains("hidden")) {
            menuIcon.setAttribute("name", "close-outline");
        } else {
            menuIcon.setAttribute("name", "menu-outline");
        }
    });
});