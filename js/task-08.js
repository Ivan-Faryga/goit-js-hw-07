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
    return inputValue = event.currentTarget.value;
    console.log(inputValue);
};

console.log(inputValue);

function onRender(inputValue) {
    for (let i = 0; i < inputValue; i += 1) {
        const newBox = document.createElement('div');
        newBox.style.width = `100px`;
        newBox.style.height = `100px`;
        newBoxesArray.push(newBox);
    };
    

    boxesDivRef.append(...newBoxesArray);
};

function onDestroy() { };

