// ===== Helpers =====
const modal = document.getElementById('modal');
const modalEmoji = document.getElementById('modalEmoji');
const modalWord = document.getElementById('modalWord'); 
// ===== Turn emoji into colorful picture files =====
const twOptions = {
  folder: 'svg',
  ext: '.svg',
  base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'
};
twemoji.parse(document.body, twOptions);
let score = 0;

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.8;   // slower for little ears
    u.pitch = 1.3;
    window.speechSynthesis.speak(u);
  }
}

// ===== Color the color cards from data-bg =====
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const svg = card.querySelector('svg');
    modalEmoji.innerHTML = '';
    if (svg) {
      modalEmoji.appendChild(svg.cloneNode(true));
    } else {
      modalEmoji.textContent = card.dataset.emoji;
      twemoji.parse(modalEmoji, twOptions);
    }
    modalWord.textContent = card.dataset.name;
    modal.hidden = false;
    speak(card.dataset.name);
  });
});
// ===== JS Component 1: Modal window + 2: Text-to-speech =====
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    modalEmoji.textContent = card.dataset.emoji;
    modalWord.textContent = card.dataset.name;
    modal.hidden = false;
    speak(card.dataset.name);
  });
});

document.getElementById('speakBtn').addEventListener('click', () => speak(modalWord.textContent));
document.getElementById('closeModal').addEventListener('click', () => modal.hidden = true);
modal.addEventListener('click', e => { if (e.target === modal) modal.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.hidden = true; });

// ===== JS Component 3: Informational slides =====
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(n) {
  slides[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
}
document.getElementById('nextSlide').addEventListener('click', () => showSlide(current + 1));
document.getElementById('prevSlide').addEventListener('click', () => showSlide(current - 1));
setInterval(() => showSlide(current + 1), 6000);

// ===== JS Component 4: Go to Top button =====
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => { toTop.hidden = window.scrollY < 300; });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

