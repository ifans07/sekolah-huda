let navbar = document.querySelector(".navbar-list");
let toggle = document.querySelector(".toggle");
let iconToggle = document.querySelector(".toggle .bi");

toggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
  console.log(iconToggle.classList[1]);
  if (iconToggle.classList[1] == "bi-list") {
    iconToggle.classList.add("bi-x");
    iconToggle.classList.remove("bi-list");
    // iconToggle.classList.add("bi-text-indent-right");
    // iconToggle.classList.remove("bi-text-indent-left");
    toggle.style.transform = "rotate(180deg)";
    toggle.style.transition = "transform 0.5s ease";
  } else {
    iconToggle.classList.add("bi-list");
    iconToggle.classList.remove("bi-x");
    // iconToggle.classList.add("bi-text-indent-left");
    // iconToggle.classList.remove("bi-text-indent-right");
    toggle.style.transform = "rotate(0deg)";
    toggle.style.transition = "transform 0.5s ease";
  }
});

document.addEventListener("click", function (e) {
  if (!toggle.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
    iconToggle.classList.add("bi-text-indent-left");
    iconToggle.classList.remove("bi-text-indent-right");
    toggle.style.transform = "rotate(0deg)";
    toggle.style.transition = "transform 0.5s ease";
  }
});
