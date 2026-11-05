/* Update the email below before publishing. No account credentials belong here. */
const FARM_EMAIL = 'REPLACE_WITH_YOUR_PROTON_EMAIL';
const configured = FARM_EMAIL.includes('@') && !FARM_EMAIL.includes('REPLACE_');
const contactEmail = document.getElementById('contact-email');
const formNote = document.getElementById('form-note');
if (configured && contactEmail) {
  contactEmail.textContent = FARM_EMAIL;
  contactEmail.href = `mailto:${FARM_EMAIL}`;
} else if (contactEmail) {
  contactEmail.textContent = 'Add your Proton Mail address in site.js';
  contactEmail.removeAttribute('href');
  formNote.textContent = 'Site setup required: enter your Proton Mail address in site.js to activate this form.';
}
document.querySelectorAll('#year, .year').forEach(el => el.textContent = new Date().getFullYear());
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}));
document.getElementById('contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  if (!configured) { formNote.textContent = 'Please configure FARM_EMAIL in site.js before using the contact form.'; return; }
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const topic = document.getElementById('topic').value;
  const message = document.getElementById('message').value.trim();
  const timing = document.getElementById('timing').value.trim();
  const subject = `Backyard Farm: ${topic}`;
  const body = `Name: ${name}\nEmail: ${email}\nInterest: ${topic}\nPreferred timeframe: ${timing || "Not specified"}\n\n${message}`;
  window.location.href = `mailto:${FARM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent = 'Your email application should open with a prepared message. Please click Send there to deliver it.';
});
document.getElementById('updates-link')?.addEventListener('click', () => {
  document.getElementById('topic').value = 'Newsletter request';
  document.getElementById('message').value = 'Please contact me about receiving occasional Backyard Farm email updates. I understand this message is a request, not an automatic subscription.';
});
document.querySelectorAll('.inquiry-link').forEach(link => link.addEventListener('click', () => {
  document.getElementById('topic').value = 'Whole chicken availability';
  document.getElementById('message').value = `I'd like to learn more about ${link.dataset.product}, including current availability and pricing.`;
}));
