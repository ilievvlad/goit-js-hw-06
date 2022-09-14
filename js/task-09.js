const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", e => {
	let valueColor = body.style.backgroundColor = getRandomHexColor();

	color.textContent = valueColor;
})
