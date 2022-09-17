const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	const {
		elements: { email, password }
	} = e.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all the fields!");
	}
	let obj = {
		email: email.value,
		password: password.value
	}
	console.log(obj);
	e.currentTarget.reset();
}
