var images = document.querySelectorAll(".images");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    this.classList.toggle("images-transform");
  });
}
