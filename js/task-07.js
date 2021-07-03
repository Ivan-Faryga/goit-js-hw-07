const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
console.log(inputRef.value);

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanRef.style.fontSize = `${inputRef.value}px`;
    console.log(inputRef.value);
};