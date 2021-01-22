var viewToggler = document.querySelectorAll('header ul li');
var booksView = document.querySelectorAll('.books');

viewToggler.forEach(function (toggler) {
  toggler.addEventListener('click', function () {
    viewToggler.forEach(function (toggler) {
      toggler.classList.remove('active');
    });

    toggler.classList.add('active');

    booksView.forEach(function (viewNow) {
      viewNow.classList.toggle('list-view');
    });
  });
});
