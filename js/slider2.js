const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
  const translateValue = index * -33.33;
  sliderContainer.style.transform = `translateX(${translateValue}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 2;
  }
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > 2) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});
