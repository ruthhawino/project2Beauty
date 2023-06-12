
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
  }
  
  var imageFolder = "/images/";
  var images = ["supa3.png", "facemakeup.webp", "supa4.png", "mouthlip.webp"];
  var currentIndex = 0;
  var myDiv = document.getElementById("myDiv");
  
  function preloadImages() {
    for (var i = 0; i < images.length; i++) {
      var imageUrl = imageFolder + images[i];
      var img = new Image();
      img.src = imageUrl;
    }
  }
  
  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    var imageUrl = imageFolder + images[currentIndex];
    myDiv.style.backgroundImage = "url(" + imageUrl + ")";
  }
  
  // Preload images before setting the initial background image
  preloadImages();
  
  // Set the initial background image
  var initialImageUrl = imageFolder + images[0];
  myDiv.style.backgroundImage = "url(" + initialImageUrl + ")";
  
  // Start changing background images after 5 seconds
  setInterval(changeBackgroundImage, 5000);
  
//   function toggleMenu() {
//       var navbar = document.querySelector('.navbar');
//       navbar.classList.toggle('collapsed');
//     }
   
    
  

// const images = document.querySelectorAll('.imagess img');

// images.forEach(img => {
//   img.addEventListener('mouseover', () => {
//     img.style.animation = 'none'; 
//     void img.offsetWidth; 
//     img.style.animation = 'spin 3s ease-in-out'; 
//   });
// });
// function toggleMobileMenu(menu) {
//   menu.classList.toggle('open');
// }

// const images = document.querySelectorAll('.image');
// images.forEach((image) => {
//   image.classList.add('new-position');
// });

// document.addEventListener("DOMContentLoaded", function(event) {
//   var slides = document.getElementsByClassName("flex");
//   var currentIndex = 0;

//   setInterval(function() {
//     // Hide the current slide
//     slides[currentIndex].style.left = "-100%";

//     // Calculate the index of the next slide
//     currentIndex = (currentIndex + 1) % slides.length;

//     // Show the next slide
//     slides[currentIndex].style.left = "0";
//   }, 3000); // Change slide every 3 seconds
// });
