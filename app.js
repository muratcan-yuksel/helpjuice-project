//import necessary html elements
import basicBlocks from "./basicBlocks.js";
//append elements to the modal
basicBlocks.forEach((block) => {
  const container = document.createElement(block.container.type);
  container.classList.add(block.container.class);
  container.id = block.container.id;

  const image = document.createElement(block.image.type);
  image.classList.add(block.image.class);
  image.src = block.image.src;

  const divider = document.createElement(block.divider.type);
  divider.classList.add(block.divider.class);

  const title = document.createElement(block.title.type);
  title.classList.add(block.title.class);
  title.textContent = block.title.text;

  const para = document.createElement(block.para.type);
  para.classList.add(block.para.class);
  para.textContent = block.para.text;

  container.appendChild(image);

  container.appendChild(divider);

  divider.appendChild(title);
  divider.appendChild(para);

  document.getElementById("basicBlocks").appendChild(container);
});

//basic blocks append logic ends

const modal_container = document.getElementById("modal_container");
const modal = document.getElementById("modal");
//returns a nodelist of all the elements with the class name of "listItem"
const listItems = document.querySelectorAll(".listItem");

//create a new input field and append it to the inputWrapper class
function createInputField() {
  const inputWrapper = document.querySelector(".inputWrapper");
  const newinputField = document.createElement("INPUT");
  newinputField.classList.add("inputField");
  newinputField.type = "text";
  newinputField.placeholder = "Type '/' for commands";
  inputWrapper.appendChild(newinputField);
}
createInputField();

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
  } else if (x == "Enter") {
    console.log("enter");
    foo();
    createInputField();
    inputField = document.querySelectorAll(".inputField");
  }
}
let inputField = document.querySelectorAll(".inputField");
//call the modal opening keydown function
function foo() {
  inputField.forEach((input) => {
    input.addEventListener("keydown", keydownFunction);
    console.log(input);
  });
  console.log(inputField);
}
foo();
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

console.log(listItems[4].id);

// item id is a global variable
let itemId;
//for each list item, add an event listener that eventually returns the id of the list item
//wherever its clicked, the function will look for the appropriate parent element to get the id
listItems.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("listItemTitle") ||
      e.target.classList.contains("listItemPara")
    ) {
      console.log(e.target.parentElement.parentElement.id);
      itemId = e.target.parentElement.parentElement.id;
    } else if (
      e.target.classList.contains("listItemDivider") ||
      e.target.classList.contains("icon")
    ) {
      console.log(e.target.parentElement.id);
      itemId = e.target.parentElement.id;
    } else {
      console.log(e.target.id);
      itemId = e.target.id;
    }
    console.log(itemId + " is item id");
    modal_container.classList.remove("show");
  });
});
