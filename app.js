// const close = document.getElementById("close");
// close.addEventListener("click", () => {
//   modal_container.classList.remove("show");
// });
let inputField = document.querySelector(".inputField");
const modal_container = document.getElementById("modal_container");
const modal = document.getElementById("modal");
// const main = document.getElementById("main");

//keydown function that reads the slash key and opens the modal
function keydownFunction(event) {
  let x = event.key;

  if (x == "/") {
    console.log("You pressed the '/' key!");
    modal_container.classList.add("show");
  }
}
//call the modal opening keydown function
inputField.addEventListener("keydown", keydownFunction);

//close modal if escape key is clicked
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal_container.classList.remove("show");
  }
});

//close modal if clicked outside of modal
document.body.addEventListener("click", (e) => {
  console.log("body");
  if (e.target != modal) {
    modal_container.classList.remove("show");
  }
});
