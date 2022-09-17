let inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputText.addEventListener("input", onInputChange);

function onInputChange(e) {
	inputText = e.currentTarget.value;
	inputText !== "" ? (output.innerText = inputText) : output.innerText = "Anonymous";
}