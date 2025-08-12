
// // Мобильная навигация

const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');

navBtn.onclick = function () {
	
	nav.classList.toggle('mobile-nav--open');
	menuIcon.classList.toggle('nav-icon--active');
	document.body.classList.toggle('no-scroll');
	
};

const navLinks = document.querySelectorAll(".mobile-nav a");
// console.log(navLinks);

//обходим ссылки методом форич и убираем классы
nav.addEventListener("click", function () {
	
	navBtn.classList.remove("nav-icon--active");//Убираем активный класс у иконки моб навигации
	nav.classList.remove("mobile-nav--open");//Убираем активный класс у блока моб навигации
	
	menuIcon.classList.remove('nav-icon--active');// делаем обратно в линии значек
	document.body.classList.remove('no-scroll');// возващаем scrole
})


// swiper
var swiper = new Swiper(".mySwiper", {

	slidesPerView: "auto",
	spaceBetween: 10,
	loop: true,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});
