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
        // selectedItem.scrollIntoView();
        // selectedItem.scrollIntoView({ block: "center" });
        // selectedItem.scrollIntoView({ behavior: "smooth" });
        selectedItem.scrollIntoView({ block: "center", behavior: "smooth" });
        // selectedItem.scrollIntoView({ block: "end", behavior: "smooth" });
        // selectedItem.scrollIntoView({ block: "start", behavior: "smooth" });
        // selectedItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
        // selectedItem.scrollIntoView({ block: "end", behavior: "smooth" });
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
        // selectedItem.scrollIntoView();
        // selectedItem.scrollIntoView({ block: "center" });
        // selectedItem.scrollIntoView({ behavior: "smooth" });
        selectedItem.scrollIntoView({ block: "center", behavior: "smooth" });
        // selectedItem.scrollIntoView({ block: "end", behavior: "smooth" });
        // selectedItem.scrollIntoView({ block: "start", behavior: "smooth" });
        // selectedItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
        // selectedItem.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  });
}

export default moveCursor;
