function moveCursor() {
  let listItems = document.querySelectorAll(".listItem");
  let selectedItem;
  let index = -1;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      console.log("down");
      if (index < listItems.length - 1) {
        index++;
        console.log(index);
        selectedItem = listItems[index];
        console.log(selectedItem);
        selectedItem.classList.add("selected");
        selectedItem.previousElementSibling.classList.remove("selected");
        selectedItem.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    } else if (e.key === "ArrowUp") {
      console.log("up");
      if (index > 0) {
        index--;
        console.log(index);
        selectedItem = listItems[index];
        console.log(selectedItem);
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
}

export default moveCursor;
