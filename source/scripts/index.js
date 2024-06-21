/* в этот файл добавляет скрипты*/

/* Мобильное меню */

const menu = document.querySelector('.header__nav');
const navToggle = menu.querySelector('.nav__toggle');

navToggle.addEventListener('click', () => {
  if (menu.classList.contains('nav--closed')) {
    menu.classList.remove('nav--closed');
    menu.classList.add('nav--opened');
  } else {
    menu.classList.add('nav--closed');
    menu.classList.remove('nav--opened');
  }
});
