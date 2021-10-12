btnClick = function () {
  const textInput = document.querySelector(".click").value;
  document
    .getElementById("btnToClick")
    .addEventListener("click", handleClick(textInput));
};

let handleClick = function (event) {
  console.log(event);
};

function getFocus() {
  let textInput = document.querySelector(".focus").value;
  document.querySelector(".focus").focus(console.log(textInput));
}

window.onload = function () {
  const input = document.querySelector(".value");

  if (input) {
    input.addEventListener("input", updateValue);
  }
};

function updateValue(element) {
  console.log(element.srcElement.value);
}
