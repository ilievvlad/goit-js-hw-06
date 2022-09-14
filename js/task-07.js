const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", e => {
	let size = inputEl.value;

	textEl.style.fontSize = size + "px";
})