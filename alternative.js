const languageToggle = document.getElementById('languageToggle');
let currentLanguage = 'de';

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-de][data-en]').forEach(element => {
    element.innerHTML = element.dataset[currentLanguage];
  });
  languageToggle.textContent = currentLanguage === 'de' ? 'EN' : 'DE';
  languageToggle.setAttribute('aria-label', currentLanguage === 'de' ? 'Switch language' : 'Sprache wechseln');
});

document.getElementById('year').textContent = new Date().getFullYear();
