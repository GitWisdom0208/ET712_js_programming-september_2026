// ===== Helpers =====
const modal = document.getElementById('modal');
const modalEmoji = document.getElementById('modalEmoji');
const modalWord = document.getElementById('modalWord');

// Twemoji picture settings (safe if the library didn't load)
const twOptions = {
  folder: 'svg',
  ext: '.svg',
  base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'
};
if (typeof twemoji !== 'undefined') {
  twemoji.parse(document.body, twOptions);
}

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.8;   // slower for little ears
    u.pitch = 1.3;
    window.speechSynthesis.speak(u);
  }
}

// Turns "Three" into "Three. Three apples!" (other words are unchanged)
const numberCounts = {
  One: 1, Two: 2, Three: 3, Four: 4, Five: 5,
  Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10
};

function getSpokenText(name) {
  const count = numberCounts[name];
  if (!count) return name;
  return `${name}. ${name} ${count === 1 ? 'apple' : 'apples'}!`;
}

// ===== Color the color cards from data-bg =====
document.querySelectorAll('.card[data-bg]').forEach(card => {
  card.style.background = card.dataset.bg;
  card.style.borderColor = card.dataset.bg;
});

// ===== JS Component 1: Modal window + 2: Text-to-speech =====
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const svg = card.querySelector('svg');
    modalEmoji.innerHTML = '';
    if (svg) {
      modalEmoji.appendChild(svg.cloneNode(true));
    } else {
      modalEmoji.textContent = card.dataset.emoji;
      if (typeof twemoji !== 'undefined') {
        twemoji.parse(modalEmoji, twOptions);
      }
    }
    modalWord.textContent = card.dataset.name;
    modal.hidden = false;
    speak(getSpokenText(card.dataset.name));
  });
});

document.getElementById('speakBtn').addEventListener('click', () => {
  speak(getSpokenText(modalWord.textContent));
});
document.getElementById('closeModal').addEventListener('click', () => {
  modal.hidden = true;
  window.speechSynthesis.cancel();
});
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