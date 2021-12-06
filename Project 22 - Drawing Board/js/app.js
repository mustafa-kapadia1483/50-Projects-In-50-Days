const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const colorInput = document.querySelector("#color");
const sizeInput = document.querySelector(".size");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");

let size = 20;
let isPressed = false;
let color;
let x;
let y;

clearBtn.addEventListener("click", () => {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
});

increaseBtn.addEventListener("click", () => {
  if (size == 50) {
    return;
  }
  size++;
  sizeInput.innerHTML = size;
});

decreaseBtn.addEventListener("click", () => {
  if (size == 10) {
    return;
  }
  size--;
  sizeInput.innerHTML = size;
});

sizeInput.addEventListener("change", () => {
  size = sizeInput.value;
});

colorInput.addEventListener("change", () => {
  color = colorInput.value;
});

canvas.addEventListener("mousedown", e => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
});

canvas.addEventListener("mouseup", e => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", e => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  canvasContext.beginPath();
  canvasContext.arc(x, y, size, 0, Math.PI * 2);
  canvasContext.fillStyle = color;
  canvasContext.fill();
}

function drawLine(x1, y1, x2, y2) {
  canvasContext.beginPath();
  canvasContext.moveTo(x1, y1);
  canvasContext.lineTo(x2, y2);
  canvasContext.strokeStyle = color;
  canvasContext.lineWidth = size * 2;
  canvasContext.stroke();
}
