'use strict'

//!24-2 Ex.2
//step 1

let users = ['Error', 'Vicktor'];
//step 2
users.push('Kolya');
//step 3
for (let i = 0; i < users.length; i++) {
	if (users[i] == 'Error') {
		users[i] = 'Alina';
	}
}
//step 4
users.shift();
//step 5
users.unshift('Masha','Petro');
console.log(users);

//!24-2 Ex.3
let users3 = ['Error', 'Vicktor', 'DeleteThis'];
//step 1-3
let userTaken = users3.splice(users3.indexOf('DeleteThis', 0),
	users3.indexOf('DeleteThis', 0));
//check
console.log(users3);
console.log(userTaken);

//!24-2ex4
let user4 = 'Вася,Діма,Юра'
console.log(user4);
let array4 = user4.split(",");
console.log(array4);


//! end 24-2
//! end 24-2
//! end 24-2

console.log('====================');
console.log('====================');

//!24-3
//!24-3
//!24-3


//!24-3ex1
// <div data-say-hi="Yes">Вітаю!</div>
let foundDataSay = document.querySelector('[data-say-hi]');
console.log(foundDataSay.innerText);

//!24-3ex2
let getAllLi = document.querySelectorAll('li');
let getNeededLi;
for (const li of getAllLi) {
	if (li.textContent == 'Йончи') {
		getNeededLi = li.textContent;
	} 
}
console.log(getNeededLi);


//!24-3ex3
let getAllLikes = document.querySelectorAll('.like');
console.log(getAllLikes);

//!24-3ex4
const list = document.querySelector('ul');
list.insertAdjacentHTML('beforeend', '<li>text</li>');


//==============================================================
//==============================================================
//==============================================================
console.log('=================================================');


//!24-4
//!24-4
//!24-4

//!24-4ex1
	const mainElement = document.documentElement;
	const bodyWidth = mainElement.clientWidth; 
	
	console.log(`Your browser window width is ${bodyWidth}px`);



	console.log('=================================================');
	


	//!24-4ex2
function scrollTopAfter(scrollTopSize) {
	window.scrollBy(0, scrollTopSize);
	console.log(`Scrolled on ${scrollTopSize}px lower `);
	//setTimeout(scrollTopAfter, 1000, scrollTopSize);
}
setTimeout(scrollTopAfter, 1000, 10);



console.log('=================================================');
//!24-4ex3
function getOffsetParent(element) {
	const elementOffsetParent = document.querySelector(element);
	const elementParent = elementOffsetParent.offsetParent;
	return elementParent;
}
function getPositionLeft(element) {
	const elementposition = document.querySelector(element);
	const elementOffsetLeft = elementposition.offsetLeft;
	return elementOffsetLeft;
}
function getPositionTop(element) {
	const elementposition = document.querySelector(element);
	const elementOffsetTop = elementposition.offsetTop;
	return elementOffsetTop;
}

function addMessage(element) {
	let left = getPositionLeft(element);
	let top = getPositionTop(element);
	let relative = getOffsetParent(element);
	console.log(`You looking for element "${element}". \n\
	You can found It by coordinates:\n\
	left= ${left}, top= ${top} relative to the ${relative}`);
}

let elementsList = [".les24-3__title", ".les24-5__text", ".les24-2__answers > li:first-child"];
for (let i = 0; i < elementsList.length; i++) {
	const element = elementsList[i];
	addMessage(element);
	console.log(getOffsetParent(element));
}
