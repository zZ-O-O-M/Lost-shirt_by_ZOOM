(function () {

  let elem = document.querySelector(".products__list");
  let iso = new Isotope(elem, {
    // options
    itemSelector: ".products__item",
    filter: '.popular'
  });

  const controls = document.querySelectorAll('.filter__item');
  const activeClass = 'filter__item--active';

  function removeActiveClass() {
    controls.forEach(function (control) {
      control.classList.remove(activeClass);
    });
  }

  controls.forEach(function (control) {
    control.addEventListener('click', function (e) {
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");

      removeActiveClass();

      control.classList.add(activeClass);

      iso.arrange({
        filter: `.${filterName}`
      })
    })
  })
}());