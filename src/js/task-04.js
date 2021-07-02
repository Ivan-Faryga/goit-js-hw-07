let counterValue = 0;

const spanEl = document.querySelector('#value');
console.log(spanEl);

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

decrementBtn.addEventListener('click', function () {
    counterValue -= 1;
    console.log(counterValue);
    spanEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', function () {
    counterValue += 1;
    console.log(counterValue);
    spanEl.textContent = counterValue;
});