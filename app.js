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
  // console.log(x);
  // console.log(inputField.textContent);

  if (x == "/") {
    console.log("You pressed the '/' key!");
    modal_container.classList.add("show");
  } else if (x == "Backspace") {
    modal_container.classList.remove("show");
    console.log("back");
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

//add event to inputfield on change
// inputField.addEventListener("change", (e) => {
//   console.log("inputField");
//   console.log(inputField.textContent);
//   console.log(e);
// });
