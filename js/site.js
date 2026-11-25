/* StipendTracker website: language switch, menu, and small animations. */
(function () {
  'use strict';

  // ---- Where the "Open the web app" buttons go ----
  var APP_URL = 'https://app.stipendtracker.com'; // the web app
  // -----------------------------------------------------------------

  var T = {
    en: {
      'nav.home': 'Home', 'nav.how': 'How to use it', 'nav.download': 'Download', 'nav.faq': 'FAQ',
      'nav.contact': 'Contact', 'nav.about': 'About us', 'nav.open': 'Open web app',

      'hero.pill': 'Free · No account · Works offline',
      'hero.h1': 'Make your stipend last the <span class="gb">whole month</span>.',
      'hero.lead': 'StipendTracker is a simple budget tracker for stipend and fellowship recipients. See at a glance whether you are on pace, spend freely from your own savings buffer, and keep everything private on your own device.',
      'hero.open': 'Open the web app', 'hero.how': 'How to install',
      'hero.fine': 'Works on Mac, Windows, iPhone and Android. Install it right from the web app.',

      'feat.pill': 'What it does',
      'feat.h2': 'Everything you need, <span class="gt">nothing you don\'t</span>',
      'feat.sub': 'Built for people living on a fixed monthly amount, often in a new country, who want to know if they are okay without a spreadsheet.',
      'f1.h': 'Pace tracking',
      'f1.p': 'Each category shows where you should be by today, not just what is left. Green, yellow and red tell you if you are on pace, a little high or way over, while there is still time to adjust.',
      'f2.h': 'Baller Budget',
      'f2.p': 'Underspend in a month and the surplus rolls into a savings buffer you can spend guilt-free, plus any funds you add yourself.',
      'f3.h': 'History at a glance',
      'f3.p': 'Open any past month to see a sleek ring chart of where your money went. Categories that ran over are flagged in yellow and red.',
      'f4.h': 'Bank import: PDF and CSV',
      'f4.p': 'No need to enter every little transaction one at a time. Drop in a Santander PDF or a CSV file from most banks, such as Chase, check the purchases, pick categories and import them in seconds. It remembers your stores and skips ones you already imported.',

      'f5.h': 'Three currencies, one budget',
      'f5.p': 'Paid in dollars but budgeting in euros? Tap €, $ or £ next to the amount, or choose the currency of an imported file, and StipendTracker converts each purchase at the exchange rate from its own date.',

      'show.pill': 'See the month clearly',
      'show.h2': 'A ring chart that shows <span class="gt">where it all went</span>',
      'show.p': 'Every finished month keeps its own budgets and its own story. Click a month in your history and see the split at a glance.',
      'show.t1': 'Over-budget categories turn yellow or red, with a label',
      'show.t2': 'Each month remembers the budgets it had',
      'show.t3': 'Per-category logs you can look back through',

      'f6.h': 'Trends and projections',
      'f6.p': 'See this month against your usual, a projected total, your pace, a safe amount to spend per day and a calendar of your spending, all in plain pictures.',
      'f7.h': 'Streaks and budget check-up',
      'f7.p': 'Count the periods you stay under budget and get a gentle nudge about budgets that could be lowered or are running high. Both live in the Trends page.',
      'f8.h': 'Recurring entries',
      'f8.p': 'Add rent or a subscription once and it is added for you every month, on its day.',
      'tr.pill': 'See where you are heading',
      'tr.h2': 'Trends that show <span class="gt">how the month will end</span>',
      'tr.p': 'Your spending, turned into a few clear pictures. Know how this month compares with your usual, where you are projected to finish, and how much is safe to spend each day.',
      'tr.t1': 'A projected total for the month, from your average early on and your pace later',
      'tr.t2': 'This month against your usual, category by category',
      'tr.t3': 'Streaks and a budget check-up, right in Trends',
      'tr.t4': 'A calendar that shades each day from green to red',
      'dup.pill': 'Stay on track',
      'dup.h2': 'Streaks and a <span class="gt">budget check-up</span>',
      'dup.sub': 'Two small boxes in Trends that keep you motivated and keep your budgets honest.',
      'dup.s.h': 'Build a streak',
      'dup.s.p': 'Count how many periods in a row you finish under budget, and see which categories stay on track. The money tree is there to cheer you on.',
      'dup.c.h': 'Check your budgets',
      'dup.c.p': 'After a few finished periods, the check-up points out budgets you could lower, ones running high, and ones that are just right.',
      'priv.h2': 'Your money. Your device.',
      'priv.p': 'There are no accounts, no servers and no tracking. Everything you enter stays on your own device, and you can save a backup file whenever you like.',
      'priv.1': 'No sign-up', 'priv.2': 'Works offline', 'priv.3': 'Free', 'priv.4': 'Backup anytime',

      'cta.h2': 'Ready to see where your stipend <span class="gt">really</span> goes?',
      'cta.p': 'Open the web app, set your monthly budgets and start tracking in about two minutes.',
      'cta.how': 'See how it works',

      'foot.explore': 'Explore', 'foot.get': 'Get the app', 'foot.web': 'Web app',
      'foot.win': 'Install on your device', 'foot.email': 'Email us',
      'foot.fine': 'Made by JJ Chehab. StipendTracker is an independent project and is not affiliated with any bank. Bank names, like Santander, are mentioned only to say which statements the import understands.'
    },
    es: {
      'nav.home': 'Inicio', 'nav.how': 'Cómo se usa', 'nav.download': 'Descargar', 'nav.faq': 'Preguntas',
      'nav.contact': 'Contacto', 'nav.about': 'Sobre nosotros', 'nav.open': 'Abrir la app web',

      'hero.pill': 'Gratis · Sin cuenta · Funciona sin conexión',
      'hero.h1': 'Haz que tu beca dure <span class="gb">todo el mes</span>.',
      'hero.lead': 'StipendTracker es un gestor de presupuesto sencillo para quienes viven de una beca. Mira de un vistazo si vas bien de ritmo, gasta con tranquilidad de tu colchón de ahorro y mantén todo en privado, en tu propio dispositivo.',
      'hero.open': 'Abrir la app web', 'hero.how': 'Cómo instalarla',
      'hero.fine': 'Funciona en Mac, Windows, iPhone y Android. Instálala desde la propia app web.',

      'feat.pill': 'Qué hace',
      'feat.h2': 'Todo lo que necesitas, <span class="gt">y nada más</span>',
      'feat.sub': 'Pensada para quienes viven con una cantidad fija al mes, a menudo en un país nuevo, y quieren saber si van bien sin una hoja de cálculo.',
      'f1.h': 'Control de ritmo',
      'f1.p': 'Cada categoría muestra dónde deberías estar hoy, no solo lo que te queda. Verde, amarillo y rojo te dicen si vas bien, algo alto o te has pasado, cuando aún hay tiempo de corregir.',
      'f2.h': 'Baller Budget',
      'f2.p': 'Si gastas menos de lo previsto en un mes, el sobrante pasa a un colchón de ahorro que puedes gastar sin culpa, más los fondos que añadas tú.',
      'f3.h': 'Historial de un vistazo',
      'f3.p': 'Abre cualquier mes pasado y mira un elegante gráfico de anillo con adónde fue tu dinero. Las categorías que se pasaron se marcan en amarillo y rojo.',
      'f4.h': 'Importar del banco: PDF y CSV',
      'f4.p': 'No hace falta apuntar cada pequeño gasto uno por uno. Sube un PDF de Santander o un CSV de la mayoría de bancos, como Chase, revisa las compras, elige categorías e impórtalas en segundos. Recuerda tus tiendas y omite las que ya importaste.',

      'f5.h': 'Tres monedas, un presupuesto',
      'f5.p': '¿Pagaste en dólares pero presupuestas en euros? Toca €, $ o £ junto al importe, o elige la moneda de un archivo importado, y StipendTracker convierte cada compra con el tipo de cambio de su propia fecha.',

      'show.pill': 'Ve el mes con claridad',
      'show.h2': 'Un gráfico de anillo que muestra <span class="gt">adónde fue todo</span>',
      'show.p': 'Cada mes terminado conserva sus propios presupuestos y su propia historia. Haz clic en un mes del historial y mira el reparto de un vistazo.',
      'show.t1': 'Las categorías pasadas de presupuesto se ponen amarillas o rojas, con etiqueta',
      'show.t2': 'Cada mes recuerda los presupuestos que tenía',
      'show.t3': 'Registros por categoría para revisar el pasado',

      'f6.h': 'Tendencias y previsiones',
      'f6.p': 'Mira este mes frente a lo habitual, un total previsto, tu ritmo, una cantidad segura para gastar por día y un calendario de tus gastos, todo en imágenes claras.',
      'f7.h': 'Rachas y revisión de presupuesto',
      'f7.p': 'Cuenta los periodos que te quedas dentro del presupuesto y recibe un aviso amable sobre presupuestos que se podrían bajar o van altos. Ambos están en la página de Tendencias.',
      'f8.h': 'Gastos recurrentes',
      'f8.p': 'Añade el alquiler o una suscripción una sola vez y se añade solo cada mes, en su día.',
      'tr.pill': 'Mira hacia dónde vas',
      'tr.h2': 'Tendencias que muestran <span class="gt">cómo terminará el mes</span>',
      'tr.p': 'Tus gastos, convertidos en unas pocas imágenes claras. Sabrás cómo va este mes frente a lo habitual, dónde se prevé que termines y cuánto es seguro gastar cada día.',
      'tr.t1': 'Un total previsto para el mes, con tu media al principio y tu ritmo después',
      'tr.t2': 'Este mes frente a lo habitual, categoría por categoría',
      'tr.t3': 'Rachas y una revisión de presupuesto, dentro de Tendencias',
      'tr.t4': 'Un calendario que colorea cada día de verde a rojo',
      'dup.pill': 'Mantente en el camino',
      'dup.h2': 'Rachas y una <span class="gt">revisión de presupuesto</span>',
      'dup.sub': 'Dos pequeñas secciones en Tendencias que te mantienen motivado y mantienen tus presupuestos al día.',
      'dup.s.h': 'Crea una racha',
      'dup.s.p': 'Cuenta cuántos periodos seguidos terminas dentro del presupuesto y mira qué categorías siguen bien. El árbol del dinero está ahí para animarte.',
      'dup.c.h': 'Revisa tus presupuestos',
      'dup.c.p': 'Tras unos periodos terminados, la revisión señala presupuestos que podrías bajar, otros que van altos y otros que están justos.',
      'priv.h2': 'Tu dinero. Tu dispositivo.',
      'priv.p': 'No hay cuentas, ni servidores, ni seguimiento. Todo lo que escribes se queda en tu propio dispositivo, y puedes guardar una copia de seguridad cuando quieras.',
      'priv.1': 'Sin registro', 'priv.2': 'Sin conexión', 'priv.3': 'Gratis', 'priv.4': 'Copia de seguridad',

      'cta.h2': '¿Listo para ver adónde va <span class="gt">de verdad</span> tu beca?',
      'cta.p': 'Abre la app web, define tus presupuestos mensuales y empieza a registrar en unos dos minutos.',
      'cta.how': 'Mira cómo funciona',

      'foot.explore': 'Explorar', 'foot.get': 'Obtener la app', 'foot.web': 'App web',
      'foot.win': 'Instalar en tu dispositivo', 'foot.email': 'Escríbenos',
      'foot.fine': 'Creado por JJ Chehab. StipendTracker es un proyecto independiente y no está afiliado a ningún banco. Los nombres de bancos, como Santander, se mencionan solo para indicar qué extractos entiende la importación.'
    }
  };

  if (window.ST_EXTRA) { ['en', 'es'].forEach(function (l) { Object.assign(T[l], window.ST_EXTRA[l] || {}); }); }

  window.ST_T = T;
  var lang = 'en';
  try {
    var q = new URLSearchParams(window.location.search).get('lang');
    var saved = window.localStorage.getItem('st-lang');
    lang = (q === 'es' || q === 'en') ? q : (saved === 'es' ? 'es' : 'en');
  } catch (e) { lang = 'en'; }

  function apply() {
    var dict = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i]').forEach(function (el) {
      var key = el.getAttribute('data-i');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === lang);
    });
  }

  function setLang(next) {
    lang = next;
    try { window.localStorage.setItem('st-lang', lang); } catch (e) { /* fine */ }
    apply();
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  document.querySelectorAll('[data-app-link]').forEach(function (a) { a.setAttribute('href', APP_URL); });

  // short looping clips: play only while visible, and never autoplay for people who prefer less motion
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clips = document.querySelectorAll('video[data-lazy]');
  if (calm) {
    clips.forEach(function (v) { v.setAttribute('controls', ''); });
  } else if ('IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } else { v.pause(); }
      });
    }, { threshold: 0.35 });
    clips.forEach(function (v) { vio.observe(v); });
  }

  var copyBtn = document.querySelector('[data-copy]');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var text = copyBtn.getAttribute('data-copy');
      var done = function () {
        copyBtn.classList.add('done');
        setTimeout(function () { copyBtn.classList.remove('done'); }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done); else done();
    });
  }

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) nav.classList.remove('open'); });
  }

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  apply();
})();
