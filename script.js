window.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const langToggle = document.getElementById('lang-toggle');

  const storedTheme = localStorage.getItem('theme'); // "dark" | "light"
  const storedLang = localStorage.getItem('lang');   // "en" | "tr"

  // TEMA: checked durumu ayarla ve yeniden oluştur (DOM reflow için)
  if (storedTheme === 'dark') {
    const newThemeToggle = themeToggle.cloneNode(true);
    newThemeToggle.checked = true;
    themeToggle.replaceWith(newThemeToggle);
  }

  // DİL: aynı şekilde
  if (storedLang === 'en') {
    const newLangToggle = langToggle.cloneNode(true);
    newLangToggle.checked = true;
    langToggle.replaceWith(newLangToggle);
  }

  // Dinleyicileri yeniden bağla
  document.getElementById('theme-toggle').addEventListener('change', (e) => {
    localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
  });

  document.getElementById('lang-toggle').addEventListener('change', (e) => {
    localStorage.setItem('lang', e.target.checked ? 'en' : 'tr');
  });
});

