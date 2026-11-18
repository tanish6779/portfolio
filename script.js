// Fade-in on scroll
// Every element with the class "reveal" fades in when it comes onto the screen.
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(function (item) {
  observer.observe(item);
});
