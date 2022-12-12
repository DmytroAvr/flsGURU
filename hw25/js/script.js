"use strict"

function addLoadedClass() {
	window.addEventListener("load", (function() {
		setTimeout((function() {
			document.documentElement.classList.add("loaded");
			console.log('page was loaded');
		}), 0);
	}));
}
addLoadedClass();

const relativeActive = document.querySelector(".newGoogle");
const inputedValue = document.querySelector(".searching-form__row > input");
const charactersCounter = document.querySelector(".searching-form__characters");
let counted;

document.addEventListener("click", action);
function action(event) {
	const targetItem = event.target;
	if (targetItem.closest(".newGoogle__wrapper")) {
		if (!relativeActive.classList.contains("--activate-input")) {
			relativeActive.classList.add("--activate-input");
			console.log('add "--activate-input" to classList');

			//add listen to esc
			
		}
	}
	if (!targetItem.closest(".newGoogle__wrapper")) {
		if (relativeActive.classList.contains("--activate-input")) {
			relativeActive.classList.remove("--activate-input");
			console.log('remove "--activate-input" from classList & clear value');
			inputedValue.value  = "";
		}
	}
}

document.addEventListener("keydown", escPress);
function escPress(e) {
	if (relativeActive.classList.contains("--activate-input")) {
		if (e.code === "Escape") {
			relativeActive.classList.remove("--activate-input");
			inputedValue.value = "";
			console.log('remove "--activate-input" from classList & clear value');
		}
	}
}


//characters settings
inputedValue.addEventListener("keydown", counter);
function counter(event) {
	counted = inputedValue.value.length+1;
	if (counted == 1) {
		charactersCounter.textContent = `Now you entered ${counted} symbol`;
	} else if (counted > 1) {
		charactersCounter.textContent = `Now you entered ${counted} symbols`;
	}

}

