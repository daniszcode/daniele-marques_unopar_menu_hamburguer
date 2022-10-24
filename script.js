const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
});
