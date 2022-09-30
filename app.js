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
const modals = document.querySelectorAll("[data-modal]");
//modal-exit should be added to individual list elements also
modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});
