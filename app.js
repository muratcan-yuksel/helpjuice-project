//create the html and append it

const basicBlocks = [
  {
    container: { type: "div", class: "listItem", id: "itemText" },
    image: { type: "img", class: "icon", src: "/assets/text.png" },
    divider: { type: "div", class: "listItemDivider" },
    title: { type: "h4", class: "listItemTitle", text: "Text" },
    para: {
      type: "p",
      class: "listItemPara",
      text: "Just start writing with plain text.",
    },
  },
];

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
