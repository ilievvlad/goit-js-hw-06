const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counterValue = Number(document.querySelector('#value').textContent);
let valueEl = document.querySelector('#value');

decrBtn.addEventListener("click", () => {
	counterValue -= 1;
	valueEl.innerText = counterValue;
});

incrBtn.addEventListener("click", () => {
	counterValue += 1;
	valueEl.innerText = counterValue;
});