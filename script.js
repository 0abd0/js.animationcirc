
const canvas = document.getElementById('radialBars');
const ctx = canvas.getContext('2d');

// Fullscreen canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const numberOfBars = 60;
const radius = 150;
const colors = [ '#FF0000', '#298A08', '#000000', '#FFFFFF'];

// Load the PNG image
const img = new Image();
img.src = 'C:/Users/abd.shehada/Downloads/image.png'; // Path to your PNG image

img.onload = () => {
  // After the image is loaded, start the animation
  drawBars();
  drawImage();
  drawText();
};

// Function to draw the radial bars
function drawBars() {
  const barWidth = 10;
  const maxBarHeight = 120;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numberOfBars; i++) {
    const angle = (i / numberOfBars) * Math.PI * 2;
    const barHeight = Math.random() * maxBarHeight + 50;
    const color = colors[Math.floor(Math.random() * colors.length)];

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);

    // Set the color randomly
    ctx.fillStyle = color;

    // Draw the bar
    ctx.fillRect(radius, -barWidth / 2, barHeight, barWidth);

    ctx.restore();
  }
}

// Function to draw the PNG image at the center
function drawImage() {
  const imgWidth = 300; // Set desired image width
  const imgHeight = 300; // Set desired image height
  ctx.drawImage(img, centerX - imgWidth / 2, centerY - imgHeight / 2, imgWidth, imgHeight);
}

// Function to draw the text at the bottom
function drawText() {
  ctx.font = '30px Arial';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.fillText('0abd0', centerX, canvas.height - 50);
}

// Change bar colors and redraw image & text every second
setInterval(() => {
  drawBars();
  drawImage();
  drawText();
}, 1000);
