const controlsRef = document.querySelector('controls');
const refs = {
     input: document.querySelector('input'),
     renderBtnRef: document.querySelector('[data-action="render"]'),
     destroyBtnRef: document.querySelector('[data-action="destroy"]'),
};

const boxesDivRef = document.querySelector('#boxes');
console.dir(boxesDivRef.style);

let inputValue = 0;
const newBoxesArray = [];

refs.input.addEventListener('input', onInputChange);
refs.renderBtnRef.addEventListener('click', onRender);
refs.destroyBtnRef.addEventListener('click', onDestroy);


function onInputChange(event) {
    inputValue = event.currentTarget.value;
    console.log(inputValue);
};

console.log(inputValue);

function onRender(inputValue) {
    const newBox = document.createElement('div');
    newBox.width = `100px`;
    newBox.height = `100px`;
    newBoxesArray.push(newBox);

    boxesDivRef.append(...newBoxesArray);
};

function onDestroy() { };

