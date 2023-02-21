let slideIndex = 1;
showSlides(slideIndex);

window.nextSlide = nextSlide;
window.prevSlide = prevSlide;

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slider__image-wrap");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = 'none';
    console.log(slide);
  }

  slides[slideIndex - 1].style.display = 'block';
}

// let slideIndex = 1;
// const slides = document.querySelectorAll('.slider__image-wrap');
// const left = document.querySelector('.slider__left');
// const right = document.querySelector('.slider__right');

// slides.addEventListener('click', function(slideIndex) {
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   if (slideIndex < 1) {
//     slideIndex = slideIndex.length;
//   }
// });