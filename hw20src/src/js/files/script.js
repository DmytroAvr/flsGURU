// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let blogText = document.querySelectorAll(".about-latest-post__text-about");

for (let i = 0; i < blogText.length; i++) {
	blogText[i].innerText = blogText[i].innerText.slice(0, 100) + '...';
	console.log(blogText[i]);
}
