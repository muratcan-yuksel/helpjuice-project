//import necessary html elements
import basicBlocks from "./basicBlocks.js";
//import movecursor function
// import moveCursor from "./moveCursor.js";
//unique id function
const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

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
let modalOpen = false;
//returns a nodelist of all the elements with the class name of "listItem"
const listItems = document.querySelectorAll(".listItem");
let currentInputFieldById;
let modalItemById;

//create a new input field and append it to the inputWrapper class
function createInputField() {
  const inputWrapper = document.querySelector(".inputWrapper");
  const newinputField = document.createElement("div");
  newinputField.classList.add("inputField", "inputBeforeClick");
  // console.log(inputField.length);
  newinputField.setAttribute("id", uid());
  newinputField.setAttribute("type", "text");
  newinputField.contentEditable = "true";
  newinputField.setAttribute("placeholder", "Type '/' for commands");
  // newinputField.innerHTML = "Type '/' for commands";
  inputWrapper.appendChild(newinputField);
  //add focus to the newly created input field and get the id of the focused element
  newinputField.focus();
  console.log(newinputField.id);
  currentInputFieldById = newinputField.id;
}
// createInputField();

function createNewElement() {
  const inputWrapper = document.querySelector(".inputWrapper");
  console.log(modalItemById);
  if (modalItemById == "itemH1") {
    const newElement = document.createElement("h1");
    // newElement.classList.add("inputField", "inputBeforeClick");
    newElement.setAttribute("id", uid());
    // newElement.setAttribute("type", "text");
    newElement.contentEditable = "true";
    // newElement.setAttribute("placeholder", "Type '/' for commands");
    inputWrapper.appendChild(newElement);
    newElement.focus();
    console.log(newElement.id);
    currentInputFieldById = newElement.id;
  }
  // const elementType=
}

let inputFieldArray = [];
//keydown function that reads the slash key and opens the modal
function keydownFunction(event) {
  let x = event.key;
  // console.log(x);
  // console.log(inputField.textContent);

  if (x == "/") {
    // event.preventDefault();
    console.log("You pressed the '/' key!");
    modal_container.classList.add("show");
    modalOpen = true;
    console.log(modalOpen);
  } else if (x == "Backspace") {
    modal_container.classList.remove("show");
    console.log("back");
    deleteInputField();
  }
  //when modal is closed and enter is clicked without the shift key
  else if (modalOpen == false && event.shiftKey == false && x == "Enter") {
    console.log("enter");
    createInputField();
    inputField = document.querySelectorAll(".inputField");
    // inputFieldArray.push(inputField[inputField.length - 1]);
    console.log(inputFieldArray);
    addKeydownFunctionToInputFields();
  }
  //what you do here, do the same with clicked version
  else if (modalOpen == true && x == "Enter") {
    console.log("modal open and enter");
    createNewElement();
  }
}
//get input fields here specifically for the keydown function to be attached
let inputField = document.querySelectorAll(".inputField");
//add the modal opening keydown function to each individual input field
function addKeydownFunctionToInputFields() {
  inputField.forEach((input) => {
    input.addEventListener("keydown", keydownFunction);
    input.addEventListener("click", getId);

    console.log(input);
    // console.log(Array.from(inputField).indexOf(input));
  });
  console.log(inputField);
}
addKeydownFunctionToInputFields();

//get the id of the clicked input field
function getId() {
  let id = this.id;
  console.log(id);
  currentInputFieldById = id;
  handleChosenElementPlaceholder();
}

function handleChosenElementPlaceholder() {
  let chosenElement = document.getElementById(currentInputFieldById);
  if (chosenElement.innerHTML == "Type '/' for commands") {
    chosenElement.innerHTML = "";
  } else if (chosenElement.innerHTML != "Type '/' for commands") {
    return;
  }
  chosenElement.classList.remove("inputBeforeClick");
}
//call getId function when input field is clicked
// inputField.forEach((input) => {
//   input.addEventListener("click", getId);
// });

//close modal if escape key is clicked
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal_container.classList.remove("show");
  }
});

//delete input field if backspace is clicked and there is no text in the input field
function deleteInputField() {
  console.log(currentInputFieldById);
  const currentNodeChild = document.getElementById(currentInputFieldById);
  let prevSibling = currentNodeChild.previousElementSibling;
  console.log(currentNodeChild);
  // //remove the current input field
  console.log(currentNodeChild.textContent.length);

  if (currentNodeChild.textContent.length == 0 && currentInputFieldById != 0) {
    console.log(currentNodeChild.previousElementSibling.id);
    prevSibling.focus();
    currentNodeChild.remove();
    currentInputFieldById = prevSibling.id;
  }
  // currentNodeChild.previousSibling.textContent = "Theeeee";
  // currentNodeChild.remove();
}

//close modal if clicked outside of modal
document.body.addEventListener("click", (e) => {
  console.log("body");
  if (e.target != modal) {
    modal_container.classList.remove("show");
    modalOpen = false;
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
    modalItemById = itemId;
    modal_container.classList.remove("show");
  });
});

//move cursor functionality

let cursorItems = document.querySelectorAll(".listItem");
let selectedItem;
let index = -1;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    console.log("down");
    if (index < cursorItems.length - 1) {
      index++;
      console.log(index);
      selectedItem = cursorItems[index];
      console.log(selectedItem);
      console.log(selectedItem.id);
      modalItemById = selectedItem.id;
      selectedItem.classList.add("selected");
      selectedItem.previousElementSibling.classList.remove("selected");
      selectedItem.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  } else if (e.key === "ArrowUp") {
    console.log("up");
    if (index > 0) {
      index--;
      console.log(index);
      selectedItem = cursorItems[index];
      console.log(selectedItem);
      console.log(selectedItem.id);
      modalItemById = selectedItem.id;
      selectedItem.classList.add("selected");
      selectedItem.nextElementSibling.classList.remove("selected");
      selectedItem.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }
});

// document.addEventListener("Enter", (e) => {
//   console.log("enter yooo");
//   console.log(selectedItem);
// });

//add move cursor function on body click
// document.body.addEventListener("click", (e) => {
//   moveCursor();
// });
