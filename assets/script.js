const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name');
  const phone = form.get('phone');
  const message = form.get('message');
  const subject = encodeURIComponent(`Travel enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nJourney requirement:\n${message}`);
  window.location.href = `mailto:${document.body.dataset.email}?subject=${subject}&body=${body}`;
});
