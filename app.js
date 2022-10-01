let inputField = document.querySelector(".inputField");

//keydown function that reads the slash key
function keydownFunction(event) {
  let x = event.key;

  if (x == "/") {
    console.log("You pressed the '/' key!");
  }
}

inputField.addEventListener("keydown", keydownFunction);
//modal
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
