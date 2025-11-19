import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // --- Typing Effect for Hero Section ---
  const heroText = "Hello, I'm Vamsi Penmetsa";
  const heroElement = document.querySelector('h1');

  if (heroElement) {
    heroElement.textContent = '';
    let i = 0;
    const typeWriter = () => {
      if (i < heroText.length) {
        heroElement.textContent += heroText.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Typing speed
      } else {
        // Remove cursor from h1 after typing is done
        heroElement.style.borderRight = 'none';
      }
    };
    // Add cursor style initially
    heroElement.style.borderRight = '2px solid #f8f8f2';
    heroElement.style.display = 'inline-block';
    setTimeout(typeWriter, 500);
  }

  // --- Command Line Navigation & Scroll Spy ---
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section-output');
  const terminalOutput = document.getElementById('terminal-output');

  // Function to "execute" a command
  const executeCommand = (command, targetId) => {
    // Update URL hash without scrolling (scrolling handled manually)
    window.history.pushState(null, null, targetId);

    // Highlight nav item
    navItems.forEach(item => {
      if (item.getAttribute('href') === targetId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Show section with animation
    sections.forEach(section => {
      if ('#' + section.id === targetId) {
        section.classList.add('visible');
        section.style.display = 'block';

        // Scroll to section
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  };

  // Handle Nav Clicks
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const command = item.getAttribute('data-cmd');
      executeCommand(command, targetId);
    });
  });

  // Scroll Spy to update active command based on scroll position
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = '#' + section.id;
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === current) {
        item.classList.add('active');
      }
    });
  });

  // Initial check for hash in URL
  if (window.location.hash) {
    const targetId = window.location.hash;
    const navItem = document.querySelector(`.nav-item[href="${targetId}"]`);
    if (navItem) {
      const command = navItem.getAttribute('data-cmd');
      // Small delay to ensure DOM is ready
      setTimeout(() => executeCommand(command, targetId), 500);
    }
  }

  // Always set up the observer for scrolling animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // --- Terminal Date/Time in Footer (Optional) ---
  const footer = document.querySelector('footer p');
  if (footer) {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    // Append last login time simulation
    // footer.innerHTML += ` <br><span class="text-dracula-comment">Last login: ${timeString} on ttys000</span>`;
  }
});