// making a toggler icon to show GRID/LIST views

var viewToggler = document.querySelectorAll('header ul li');
var booksView = document.querySelectorAll('.books');

viewToggler.forEach(function (toggler) {
  toggler.stopPropagation;
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

// Dropdown Menu for the Edit buttons
/////////////////////////////////////////////

//toggle dropdown menu open/close

// closing function
var toClose = false;
function closeAll() {
  toClose.style.display = 'none';
  likes.classList.remove('likie');
}

function toggle(e) {
  e.stopPropagation();
  var btn = this;
  var menu = btn.nextSibling;
  var likes = btn.previousElementSibling;

  // the nodeType property will return 1 if the node is an ELEMENT
  while (menu && menu.nodeType != 1) {
    menu = menu.nextSibling;
    likes.classList.toggle('likie');
  }
  if (!menu) return;

  // showing the submenu and styling the area next to the button
  if (menu.style.display !== 'block') {
    menu.style.display = 'block';
    if (toClose) toClose.style.display = 'none';
    toClose = menu;
  } else {
    menu.style.display = 'none';
    toClose = false;
  }
}

// Click event listener
window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.edit').forEach(function (btn) {
    btn.addEventListener('click', toggle, true);
  });
});

window.onclick = function (event) {
  if (toClose) {
    closeAll.call(event.target);
  }
};
