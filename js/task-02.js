const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

ingredients.forEach(el => {
	let item = document.createElement("li");

	item.classList.add("item"), item.textContent = el;
	document.querySelector("#ingredients").append(item);
})