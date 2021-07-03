const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

inputRef.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
// }

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {}
