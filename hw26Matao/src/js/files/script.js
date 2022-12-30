// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("click", clicked);
function clicked(e) {
	
}


SVGInject(document.querySelectorAll("img.injectable"));

SVGInject.setOptions({
	useCache: true, // no caching
	copyAttributes: false, // do not copy attributes from `<img>` to `<svg>`
	makeIdsUnique: false, // do not make ids used within the SVG unique
	afterLoad: function(svg, svgString) {
	  // add a class to the svg
	  svg.classList.add('svg-inline');
	},
	//beforeInject: function(img, svg) {
	//  // wrap SVG in a div element
	//  var div = document.createElement('div');
	//  div.appendChild(svg);
	//  return div;
	//},
	afterInject: function(img, svg) {
	  // set opacity
	  svg.style.opacity = 1;
	},
	//onFail: function(img) {
	//  // set the image background red
	//  img.style.background = 'red';
	//}
 });