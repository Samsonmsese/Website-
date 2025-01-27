let currentIndex = 0;  // Keep track of the current slide
const itemsPerPage = 3;  // Number of items visible at once
const totalItems = document.querySelectorAll('.industry-slides .card').length; // Total number of items

// Function to move slides based on direction (next or prev)
function moveSlides(direction) {
  const slides = document.querySelector('.industry-slides');

  // Adjust the index based on the direction
  if (direction === 'next') {
    currentIndex += itemsPerPage;
    if (currentIndex >= totalItems) {
      currentIndex = totalItems - itemsPerPage; // Stop at the last set of images
    }
  } else if (direction === 'prev') {
    currentIndex -= itemsPerPage;
    if (currentIndex < 0) {
      currentIndex = 0; // Stop at the first set of images
    }
  }

  // Move the slides by changing the transform property to shift images
  slides.style.transform = `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;
}
