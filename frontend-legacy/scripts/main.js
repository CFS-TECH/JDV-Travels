// scripts/main.js
// Dark‑mode toggle with persistence
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Load saved theme
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
    toggle.textContent = saved === 'dark' ? '☀️' : '🌙';
  }

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
    toggle.textContent = current === 'dark' ? '☀️' : '🌙';
  });
});

// Simple form validation before mailto submission
function validateForm() {
  const form = document.querySelector('.contact form');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !phone || !message) {
    alert('Please fill in all fields.');
    return false;
  }
  // Basic email pattern
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  // Phone pattern (digits, optional +)
  const phonePattern = /^[+]?\d{7,15}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number.');
    return false;
  }
  return true; // allow mailto submission
}
