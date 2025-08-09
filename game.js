const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Style the circle
circle.style.width = '50px';
circle.style.height = '50px';
circle.style.borderRadius = '50%';
circle.style.backgroundColor = 'red';
circle.style.position = 'absolute';
circle.style.cursor = 'pointer';

// Move the circle to a random position
function moveCircle() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

// Handle click
circle.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveCircle();
});

// Start the game
moveCircle();