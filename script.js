const days = document.querySelectorAll('.day');
const imageDisplay = document.querySelector('.image-display');
const giftBox = document.querySelector('.gift-box');
const boxLid = document.querySelector('.box-lid');
const displayedImage = document.getElementById('displayed-image');

const colors = ['#cc231e', '#1e90cc', '#28a745', '#ffc107', '#6f42c1']; // Gift box colors

days.forEach(day => {
  day.addEventListener('click', () => {
    const dayNumber = day.dataset.day;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    giftBox.style.setProperty('--box-color', randomColor);

    // Reset gift box and display
    imageDisplay.style.display = 'flex';
    giftBox.style.transform = 'scale(1.8)';
    displayedImage.style.display = 'none';

    setTimeout(() => {
      boxLid.style.transform = 'rotateX(90deg)';
      setTimeout(() => {
        displayedImage.src = `images/image (${dayNumber}).png`;
        displayedImage.alt = `QR Code for January ${dayNumber}`;
        displayedImage.style.display = 'block';
      }, 500);
    }, 500);
  });
});
