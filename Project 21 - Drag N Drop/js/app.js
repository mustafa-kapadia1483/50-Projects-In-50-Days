const fill = document.querySelector(".fill");
const emptys = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of emptys) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.classList.add("fill");
}
function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}
function dragLeave() {
  this.classList.remove("hovered");
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
