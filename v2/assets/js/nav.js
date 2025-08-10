(() => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!toggle || !mobileNav) return;

  function setExpanded(isExpanded) {
    toggle.classList.toggle('active', isExpanded);
    toggle.setAttribute('aria-expanded', String(isExpanded));
    mobileNav.classList.toggle('active', isExpanded);
  }

  toggle.addEventListener('click', () => {
    const isActive = !mobileNav.classList.contains('active');
    setExpanded(isActive);
    if (isActive) toggle.focus();
  });

  mobileNav.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
      setExpanded(false);
      toggle.focus();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setExpanded(false);
      toggle.focus();
    }
  });
})();