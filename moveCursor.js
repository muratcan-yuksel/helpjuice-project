function moveCursor() {
  let wrapper = document.getElementById("main");
  let selectedItem;
  let index = -1;
  let next;

  document.addEventListener(
    "keydown",
    function (event) {
      let len = document.querySelectorAll(".listItem").length - 1;
      if (event.key === "ArrowDown") {
        console.log("down");
        index++;
        //down
        if (selectedItem) {
          removeClass(selectedItem, "selected");
          next = document.querySelectorAll(".listItem")[index];
          if (typeof next !== undefined && index <= len) {
            selectedItem = next;
          } else {
            index = 0;
            selectedItem = document.querySelectorAll(".listItem")[0];
          }
          addClass(selectedItem, "selected");
          console.log(index);
          console.log(selectedItem);
          selectedItem.focus();
        } else {
          index = 0;

          selectedItem = document.querySelectorAll(".listItem")[0];
          addClass(selectedItem, "selected");
          console.log(selectedItem);
          // selectedItem.focus();
        }
      } else if (event.key === "ArrowUp") {
        console.log("up");
        //up
        if (selectedItem) {
          removeClass(selectedItem, "selected");
          index--;
          console.log(index);
          next = document.querySelectorAll(".listItem")[index];
          if (typeof next !== undefined && index >= 0) {
            selectedItem = next;
          } else {
            index = len;
            selectedItem = document.querySelectorAll(".listItem")[len];
          }
          addClass(selectedItem, "selected");
        } else {
          index = 0;
          selectedItem = document.querySelectorAll(".listItem")[len];
          addClass(selectedItem, "selected");
        }
      }
    },
    false
  );

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
    }
  }

  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += " " + className;
    }
  }
}

export default moveCursor;
