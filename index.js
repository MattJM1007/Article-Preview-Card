let button = document.getElementById("share-button");
let socialSection = document.getElementById("social-section");
let triangle = document.querySelector(".triangle");

button.addEventListener("click", function (){
    button.classList.toggle("share-btn-active");
    socialSection.classList.toggle("hidden");
    triangle.classList.toggle("hidden")
});