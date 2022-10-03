function moveCursor() {
  let wrapper = document.querySelector(".inputWrapper");
  let selectedInput;
  let index = -1;
  let next;

  document.addEventListener(
    "keydown",
    function (event) {
      let len = document.querySelectorAll(".inputField").length - 1;
      if (event.key === "ArrowDown") {
        console.log("down");
        index++;
        //down
        if (selectedInput) {
          removeClass(selectedInput, "selected");
          next = document.querySelectorAll(".inputField")[index];
          if (typeof next !== undefined && index <= len) {
            selectedInput = next;
          } else {
            index = 0;
            selectedInput = document.querySelectorAll(".inputField")[0];
          }
          addClass(selectedInput, "selected");
          console.log(index);
        } else {
          index = 0;

          selectedInput = document.querySelectorAll(".inputField")[0];
          addClass(selectedInput, "selected");
        }
      } else if (event.key === "ArrowUp") {
        console.log("up");
        //up
        if (selectedInput) {
          removeClass(selectedInput, "selected");
          index--;
          console.log(index);
          next = document.querySelectorAll(".inputField")[index];
          if (typeof next !== undefined && index >= 0) {
            selectedInput = next;
          } else {
            index = len;
            selectedInput = document.querySelectorAll(".inputField")[len];
          }
          addClass(selectedInput, "selected");
        } else {
          index = 0;
          selectedInput = document.querySelectorAll(".inputField")[len];
          addClass(selectedInput, "selected");
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
