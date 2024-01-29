var check = document.querySelector(".check");
var container = document.querySelector(".container");
var content = document.querySelector(".content");
var contentp1 = document.querySelectorAll(".content p")[0];
var contentp2 = document.querySelectorAll(".content p")[1];
var background = document.querySelector(".background");

console.log(contentp1);

check.addEventListener("change", function (event) {
	background.classList.toggle("play-animation");
	background.classList.remove("start");
	if (content.style.color) {
		content.style.color = null;
		contentp1.style.color = null;
		contentp2.style.color = null;
	} else {
		content.style.color = "white";
		contentp1.style.color = "white";
		contentp2.style.color = "white";
	}
});
