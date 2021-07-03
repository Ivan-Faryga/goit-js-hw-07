const controlsRef = document.querySelector('controls');
const refs = {
    const input: document.querySelector('input'),
    const renderBtnRef: document.querySelector('[data-action="render"]'),
    const destroyBtnRef: document.querySelector('[data-action="destroy"]'),
};

const boxesDivRef = document.querySelector('#boxes');

let inputValue = 0;

refs.input.addEventListener('input', onInputChange);
refs.renderBtnRef.addEventListener('click', onRender);
refs.destroyBtnRef.addEventListener('click', onDestroy);


function onInputChange(event) {
    inputValue = event.currentTarget.value;
};

function onRender(inputValue) { };

function onDestroy() { };

