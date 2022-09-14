const inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputText.addEventListener("input", (e) => {
	output.textContent = e.currentTarget.value;
});