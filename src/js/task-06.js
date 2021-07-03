const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const inputDataLengthRef = +inputRef.dataset.length;
console.log(inputDataLengthRef);

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.target.value.length === inputDataLengthRef) {
        inputRef.classList.replace('invalid', 'valid');
        return
    };
    
    inputRef.classList.add('invalid');
};
