const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior:'smooth' });
  });
});
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const likeCount = this.previousElementSibling;
    let currentCount = parseInt(likeCount.textContent);
    currentCount++;
    likeCount.textContent = currentCount;
  });
});
const sidebarLinks = document.querySelectorAll('nav ul li a');

sidebarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior:'smooth' });
    }
  });
});