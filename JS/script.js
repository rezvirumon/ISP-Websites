const sliderWrapper = document.getElementById('sliderWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let autoSlideInterval;

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderWrapper.children.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + sliderWrapper.children.length) % sliderWrapper.children.length;
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 100 + '%';
  sliderWrapper.style.transform = 'translateX(' + translateValue + ')';
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000); // Change the interval as needed (in milliseconds)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Event listeners for the buttons
nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
});

// Start automatic sliding on page load
startAutoSlide();

// Pause automatic sliding when hovering over the slider
sliderWrapper.addEventListener('mouseover', stopAutoSlide);

// Resume automatic sliding when leaving the slider
sliderWrapper.addEventListener('mouseout', startAutoSlide);