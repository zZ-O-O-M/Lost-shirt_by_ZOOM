(function () {
  const sidebarBurger = document.querySelector('.sidebar__burger');
  const closeBtn = document.querySelector('.sidebar__close');
  const sidebar = document.querySelector('.sidebar');

  sidebarBurger.addEventListener("click", function () {
    sidebar.classList.add('sidebar--opened');
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("sidebar--opened");
  });
})();
