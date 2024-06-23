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


/* Слайдер */

const slider = document.querySelector('.slider');
const prevButton = slider.querySelector('.slider-button-prev');
const nextButton = slider.querySelector('.slider-button-next');
const slides = Array.from(slider.querySelectorAll('.slider__slide'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();
