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

let inputField = document.querySelector(".inputField");
const modal_container = document.getElementById("modal_container");
const modal = document.getElementById("modal");
//returns a nodelist of all the elements with the class name of "listItem"
const listItems = document.querySelectorAll(".listItem");

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

console.log(listItems[4].id);

//for each list item, add an event listener that eventually returns the id of the list item
//wherever its clicked, the function will look for the appropriate parent element to get the id
listItems.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log(e.target);
    console.log(e.target.textContent);
    //  console.log(e.target.parentElement.parentElement);
    inputField.textContent = e.target.textContent;
    if (
      e.target.classList.contains("listItemTitle") ||
      e.target.classList.contains("listItemPara")
    ) {
      console.log(e.target.parentElement.parentElement.id);
    } else if (e.target.classList.contains("listItemDivider")) {
      console.log(e.target.parentElement.id);
    } else if (e.target.classList.contains("icon")) {
      console.log(e.target.parentElement.id);
    }
    modal_container.classList.remove("show");
  });
});
