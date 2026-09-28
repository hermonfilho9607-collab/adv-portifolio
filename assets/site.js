// Revela os blocos ao entrar na tela. Sem JS, tudo aparece normalmente.
(function () {
  var itens = document.querySelectorAll('.revelar');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js');
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  itens.forEach(function (el) { obs.observe(el); });
})();
