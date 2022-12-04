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
//HTML Button
{/*<button id="jsDisableButton" type="button" style="margin: 12px;">
  JS Toggle Disable
</button>*/}

//JS Click Event Listener
//const jsDisableButton = document.getElementById("jsDisableButton");
//if (jsDisableButton) {
//  jsDisableButton.addEventListener("click", () =>
//    handleJSBtnClick(jsDisableButton)
//  );
//}
const disableButtonSiteMap = document.querySelector(".footer-site-map__title");
const disableButtonCourses = document.querySelector(".footer-courses__title");


if (window.innerWidth < 610) {
	disableButtonSiteMap.classList.toggle('_spoller-active');
	disableButtonSiteMap.disabled=false;
	
	disableButtonCourses.classList.toggle('_spoller-active');
	disableButtonCourses.disabled=false;
}

//JS Click Handler
//const handleJSBtnClick = (jsDisableButton) => {
//  jsDisableButton.disabled = true;
//  console.log("JS Disabled");
//};