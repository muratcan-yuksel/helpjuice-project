function moveCursor() {
  let listItems = document.querySelectorAll(".listItem");
  let selectedItem;
  let index = -1;
  let next;

  document.addEventListener("scroll", (e) => {
    console.log("scroll");
  });
  console.log(listItems);
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

  // document.addEventListener(
  //   "keydown",
  //   function (event) {
  //     let len = document.querySelectorAll(".listItem").length - 1;
  //     if (event.key === "ArrowDown") {
  //       console.log("down");
  //       index++;
  //       //down
  //       if (selectedItem) {
  //         removeClass(selectedItem, "selected");
  //         next = document.querySelectorAll(".listItem")[index];
  //         if (typeof next !== undefined && index <= len) {
  //           selectedItem = next;
  //         } else {
  //           index = 0;
  //           selectedItem = document.querySelectorAll(".listItem")[0];
  //         }
  //         addClass(selectedItem, "selected");
  //         console.log(index);
  //         console.log(selectedItem.id);
  //         // selectedItem.focus();
  //         // selectedItem.id = "itemTable"
  //         //   ? console.log("table")
  //         //   : console.log("not table");
  //         // wrapper.scrollTop = 50;
  //         if (selectedItem.id == "itemTable") {
  //           console.log("table");
  //           wrapper.scrollTop = 50;
  //           console.log(wrapper);
  //         }
  //       } else {
  //         index = 0;

  //         selectedItem = document.querySelectorAll(".listItem")[0];
  //         addClass(selectedItem, "selected");
  //         console.log(selectedItem);
  //         // selectedItem.focus();
  //       }
  //     } else if (event.key === "ArrowUp") {
  //       console.log("up");
  //       //up
  //       if (selectedItem) {
  //         removeClass(selectedItem, "selected");
  //         index--;
  //         console.log(index);
  //         next = document.querySelectorAll(".listItem")[index];
  //         if (typeof next !== undefined && index >= 0) {
  //           selectedItem = next;
  //         } else {
  //           index = len;
  //           selectedItem = document.querySelectorAll(".listItem")[len];
  //         }
  //         addClass(selectedItem, "selected");
  //       } else {
  //         index = 0;
  //         selectedItem = document.querySelectorAll(".listItem")[len];
  //         addClass(selectedItem, "selected");
  //       }
  //     }
  //   },
  //   false
  // );

  // function removeClass(el, className) {
  //   if (el.classList) {
  //     el.classList.remove(className);
  //   } else {
  //     el.className = el.className.replace(
  //       new RegExp(
  //         "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
  //         "gi"
  //       ),
  //       " "
  //     );
  //   }
  // }

  // function addClass(el, className) {
  //   if (el.classList) {
  //     el.classList.add(className);
  //   } else {
  //     el.className += " " + className;
  //   }
  // }
}

export default moveCursor;
