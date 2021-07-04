const controlsRef = document.querySelector('controls');
const refs = {
     input: document.querySelector('input'),
     renderBtnRef: document.querySelector('[data-action="render"]'),
     destroyBtnRef: document.querySelector('[data-action="destroy"]'),
};

const boxesDivRef = document.querySelector('#boxes');
console.log(boxesDivRef.style);

let inputValue = 0;

refs.input.addEventListener('input', onInputChange);
refs.renderBtnRef.addEventListener('click', onRender);
refs.destroyBtnRef.addEventListener('click', onDestroy);


function onInputChange(event) {
    inputValue = event.currentTarget.value;
};

function onRender(inputValue) {
    const newBox = document.createElement('div');

};

function onDestroy() { };

