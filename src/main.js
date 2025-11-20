import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('button.md\\:hidden');
  const nav = document.querySelector('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('hidden');
      nav.classList.toggle('flex');
      nav.classList.toggle('flex-col');
      nav.classList.toggle('absolute');
      nav.classList.toggle('top-16');
      nav.classList.toggle('left-0');
      nav.classList.toggle('w-full');
      nav.classList.toggle('bg-paper');
      nav.classList.toggle('p-4');
      nav.classList.toggle('shadow-sketch');
    });
  }
});