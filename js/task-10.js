const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById("boxes");
const input = document.querySelector("#controls input");

create.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
	let amount = input.value;
	createBoxes(amount);
}

function createBoxes(amount) {
	let basicSize = 30;
	let fragment = document.createDocumentFragment();
	for (let i = 0; i < amount; i++) {
		let size = basicSize + i * 10;
		let div = document.createElement('div');
		div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
		fragment.appendChild(div);
	}
	boxes.appendChild(fragment);
}

function destroyBoxes() {
	boxes.innerHTML = '';
	input.value = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}