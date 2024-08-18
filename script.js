
function toggleNav() {
  var navLinks = document.querySelector('.ul-links');
  navLinks.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", function() {
  typeParagraph();
});

document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed("#typingParagraph", {
      strings: [
          "<b>Experience the refreshing power of our water wash! <br>efficient and eco-friendly process guarantees a spotless shine for your vehicle.</b>",
          " are the professionals  dedicated to ensuring your vehicle <br>receives the highest quality care and attention,<br> leaving it sparkling clean and rejuvenated after every visit.",
          "specialize in providing top-notch car care services.<br> From thorough exterior washes to meticulous interior detailing,<br> we ensure your vehicle receives the attention it deserves.<br> Trust us to keep your car looking its best!"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
  });
});
