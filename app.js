let inputField = document.querySelector(".inputField");

//keydown function that reads the slash key
function keydownFunction(event) {
  let x = event.key;

  if (x == "/") {
    console.log("You pressed the '/' key!");
    // modal_container.classList.add("show");
  }
}

inputField.addEventListener("keydown", keydownFunction);
//modal
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
const main = document.getElementById("main");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

// if (modal_container.classList.contains("show")) {
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
// }
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal_container.classList.remove("show");
  }
});
//close modal if clicked outside of modal
document.body.addEventListener("click", (e) => {
  console.log("body");
  if (e.target != open) {
    modal_container.classList.remove("show");
  }
});
