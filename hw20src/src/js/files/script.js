// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let blogText = document.querySelectorAll(".about-latest-post__text-about");

for (let i = 0; i < blogText.length; i++) {
	blogText[i].innerText = blogText[i].innerText.slice(0, 100) + '...';
	console.log(blogText[i]);
}


//work with spoilers 

const disableButtonSiteMap = document.querySelector(".footer-site-map__title");
const disableButtonCourses = document.querySelector(".footer-courses__title");
//refactor to querySelectorAll

if (window.innerWidth < 610) {
	disableButtonSiteMap.classList.toggle('_spoller-active');
	disableButtonSiteMap.disabled=false;
	
	disableButtonCourses.classList.toggle('_spoller-active');
	disableButtonCourses.disabled=false;
}



//add code with checking screen size with timer
// timer call function "button disable"



/*
// Ширина и высота документа
// включая прокрученную часть

let scrollWidth = Math.max(
document.body.scrollWidth, document.documentElement.scrollWidth,
document.body.offsetWidth, document.documentElement.offsetWidth,
document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
document.body.scrollHeight, document.documentElement.scrollHeight,
document.body.offsetHeight, document.documentElement.offsetHeight,
document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);
*/