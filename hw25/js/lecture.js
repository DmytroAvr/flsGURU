 "use strict"
// use event listener

//const someLink = document.querySelector(".some-link");
	// стрелочная функция (для чего-то короткого\слабенького)
	//someLink.addEventListener('click', (event) => {
	//	console.log(event);
	//	console.log('hello');
	//}); 

// вызов функции. сколь угодно сложная
//someLink.addEventListener('click', func); 
//function func(event) {
//	console.log(event);
//	someLink.removeEventListener('click', func); 
//	console.log('Слухач подій видалено');
//	event.preventDefault();
//}

//create listener for many 

//const someLinks = document.querySelectorAll(".some-link");
//someLinks.forEach(link => {
//	link.addEventListener('click', func); 
//	//add function inside foreach
//	function func(event) {
//		console.log(event);
//		console.log('Слухач подій видалено');
//		event.preventDefault();
//		link.removeEventListener('click', func); 
//	}
//});

document.addEventListener("click", someFunc);
function someFunc(event) {
	//отримуємо куди саме клікаємо
	const targetItem = event.target;

	// сама надійна конструкція
	if (targetItem.closest(".some-link") ) {
		console.log('its linkl');
		event.preventDefault();
	}
	if (targetItem.closest("button") ) {
		console.log('its button');
		event.preventDefault();
	}
}
