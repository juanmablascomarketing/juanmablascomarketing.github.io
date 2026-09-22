(function(){
  var burger = document.querySelector('.burger');
  var drawer = document.querySelector('.drawer');
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { drawer.classList.remove('open'); });
    });
  }

  var toastEl = document.getElementById('toast');
  var toastTimer = null;
  window.ctaToast = function (msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 3400);
  };

  // Conmutador de tarifas (solo existe en tarifas.html)
  var billingBtns = document.querySelectorAll('[data-billing]');
  if (billingBtns.length) {
    var p2 = document.getElementById('precio-2dias');
    var p3 = document.getElementById('precio-3dias');
    var unit = document.querySelectorAll('.precio-unidad');
    billingBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = btn.getAttribute('data-billing');
        billingBtns.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle('is-on', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        if (mode === 'tri') {
          p2.textContent = '145 €'; p3.textContent = '195 €';
          unit.forEach(function (u) { u.textContent = '/trimestre'; });
        } else {
          p2.textContent = '60 €'; p3.textContent = '80 €';
          unit.forEach(function (u) { u.textContent = '/mes'; });
        }
      });
    });
  }
})();
