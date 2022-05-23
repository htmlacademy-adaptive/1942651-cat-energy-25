let navMain = document.querySelector('.site-nav');
let navToggle = document.querySelector('.burger-button');

navMain.classList.remove('site-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('site-nav--closed')) {
    navMain.classList.remove('site-nav--closed');
    navMain.classList.add('site-nav--opened');
  } else {
    navMain.classList.add('site-nav--closed');
    navMain.classList.remove('site-nav--opened');
  }
});
