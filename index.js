const textAreaElem = document.getElementById("textarea");
const remainingCounterElem = document.getElementById("remaining_counter");

textAreaElem.addEventListener("keyup", () => {
	updateCounter();
});

function updateCounter() {
	remainingCounterElem.innerText =
		textAreaElem.getAttribute("maxLength") - textAreaElem.value.length;
}
