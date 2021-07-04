const controlsRef = document.querySelector('controls');
const refs = {
     input: document.querySelector('input'),
     renderBtnRef: document.querySelector('[data-action="render"]'),
     destroyBtnRef: document.querySelector('[data-action="destroy"]'),
};


const boxesDivRef = document.querySelector('#boxes');
// console.dir(boxesDivRef.style);

let inputValue = 0;
const newBoxesArray = [];

refs.input.addEventListener('input', onInputChange); // ('input', onInputChange);
refs.renderBtnRef.addEventListener('click', () => { onRender(inputValue) });
refs.destroyBtnRef.addEventListener('click', onDestroy);


function onInputChange() {
    inputValue = refs.input.value;
    console.log(inputValue);
};



function onRender(inputValue) {
    for (let i = 0; i < inputValue; i += 1) {
        const newBox = document.createElement('div');
        newBox.style.backgroundColor = `blue`;
        newBox.style.margin = `30px`
        newBox.style.width = `30px`;
        newBox.style.height = `30px`;
        newBoxesArray.push(newBox);
    };
    
    boxesDivRef.append(...newBoxesArray);
};

function onDestroy() {
    boxesDivRef.innerHTML = '';
    refs.input.value = '';
};

