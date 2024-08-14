// Hamburger Menu Toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburgerMenu.addEventListener("click", () => {
  container.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('checkAvailabilityBtn').addEventListener('click', function() {
      var bookingFormFields = document.getElementById('bookingFormFields');
      if (bookingFormFields.style.display === 'none' || bookingFormFields.style.display === '') {
          bookingFormFields.style.display = 'block';
      } else {
          bookingFormFields.style.display = 'none';
      }
  });
});

// main.js
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  galleryItems.forEach(item => {
      item.addEventListener('click', function() {
          const imgSrc = this.getAttribute('data-imgsrc');
          modalImage.src = imgSrc;
          modal.style.display = 'flex';
      });
  });

  modal.addEventListener('click', function() {
      modal.style.display = 'none';
  });
});

