let menu = document.getElementById("menu");
let slideIndex = 1;

menu.onclick = function hideMenu() {
	let navMenu = document.getElementById("main-nav");

	if (navMenu.className === "main-nav") {
		navMenu.className += " responsive";
		navMenu.style.display = "block";
	} else {
		navMenu.className = "main-nav";
		navMenu.style.display = "flex";
	}
};

let showSlides = (n) => {
	let slides = document.getElementsByClassName("slides");
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1;
	} else if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}

	slides[slideIndex - 1].style.display = "block";
	slides[slideIndex - 1].style.position = "relative";
	dots[slideIndex - 1].classList.add("active");
};

let currentSlide = (n) => {
	showSlides((slideIndex = n));
};

showSlides(slideIndex);
