// Typing Effect for Hero Section
const texts = [
  "Aspiring Software Developer",
  "MERN Full Stack Developer",
  "IoT Enthusiast",
  "Backend Engineer in Making",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeEffect() {
  if (count === texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1500);
  }

  setTimeout(typeEffect, 100);
}

typeEffect();

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});
