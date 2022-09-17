const inputText = document.querySelector("#validation-input");
const inputLength = inputText.dataset.length;

inputText.addEventListener("blur", e => {
	const valueText = e.target.value;

	if (valueText.length === Number(inputLength)) {
		inputText.classList.add('valid');
		inputText.classList.remove('invalid');
	} else {
		inputText.classList.remove('valid');
		inputText.classList.add('invalid');
	}
})

