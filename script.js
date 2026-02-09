const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! 🌈");
  form.reset();
});
