var slideshow1 = document.getElementById("slideshow1");
slideshow1.CurrentSlide = 1;
showSlides(slideshow1.CurrentSlide, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.CurrentSlide = 1;
showSlides(slideshow2.CurrentSlide, slideshow2);

var slideshow3 = document.getElementById("slideshow3");
slideshow3.CurrentSlide = 1;
showSlides(slideshow3.CurrentSlide, slideshow3);

function changeSlides(n, slideshow) {
  showSlides(slideshow.CurrentSlide += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.CurrentSlide = n, slideshow);
}

function Randomize(){
  var rand = Math.floor(Math.random() * 3) + 1;
  showSlides(slideshow1.CurrentSlide = rand, slideshow1);

  var rand = Math.floor(Math.random() * 3) + 1;
  showSlides(slideshow2.CurrentSlide = rand, slideshow2);

  var rand = Math.floor(Math.random() * 3) + 1;
  showSlides(slideshow3.CurrentSlide = rand, slideshow3);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("Slides");
  if (n > slides.length) {slideshow.CurrentSlide = 1}
  if (n < 1) {slideshow.CurrentSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideshow.CurrentSlide-1].style.display = "block";
}

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
 function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
