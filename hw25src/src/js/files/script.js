// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("click", clickFunction);

function clickFunction(e) {
	const targetItem = e.target;
	if (targetItem.closest(".newGoogle__search-start")) {
		parentSearchBlock.classList.toggle("--activate-input");
	}
	if (!targetItem.closest(".newGoogle__search-start")) {
		parentSearchBlock.classList.remove("--activate-input");
	}
}
const parentSearchBlock = document.querySelector(".newGoogle__search-start");


const buttonSee = document.querySelector(".push-to-see");
const searchRow = document.querySelector(".newGoogle__body-form-search");

const changeTheme = document.querySelector(".header__theme");

function activeSearch() {
	//buttonSee.setAttribute("hidden", true);
	//buttonSee.classList.toggle("--activate-search");
	//searchRow.classList.toggle("--activate-input");
	

}