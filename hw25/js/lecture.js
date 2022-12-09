 "use strict"
// use event listener

const someLink = document.querySelector(".some-link");
// стрелочная функция (для чего-то короткого\слабенького)
//someLink.addEventListener('click', (event) => {
//	console.log(event);
//	console.log('hello');
//}); 

// вызов функции. сколь угодно сложная
someLink.addEventListener('click', func); 
function func(event) {
	console.log(event);
	someLink.removeEventListener('click', func); 
	console.log('Слухач подій видалено');

}