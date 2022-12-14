"use strict"

const isMobile = {
	Android: function () {
		 return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		 return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		 return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		 return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		 return (
					isMobile.Android()
					|| isMobile.BlackBerry()
					|| isMobile.iOS()
					|| isMobile.Opera()
					|| isMobile.Windows()
					);
	}
};

if (isMobile.any()) {
	document.body.classList.add('--touch');
} else {
	document.body.classList.add('--pc');
}


//burger


const menuBurgerButton = document.querySelector(".header__icon-menu");
const headerMenu = document.querySelector(".header__menu");
if (menuBurgerButton) {
	menuBurgerButton.addEventListener('click', function (e) {
		document.body.classList.toggle('--lock');
		menuBurgerButton.classList.toggle('--active');
		headerMenu.classList.toggle('--active');
		
	})
}