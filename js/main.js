/* ============================================================
   Denis Kolesnikov — Portfolio
   i18n (RU/EN) · scroll reveal · stat counters · dock active state
   ============================================================ */

const I18N = {
  en: {
    'hero.lead': "I build intelligent products end-to-end — a smart pet collar, autonomous AI agent teams, and developer tools.",
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': 'Get in touch',

    'about.title': 'about',
    'about.p1': "I'm a founder and AI engineer. I ship real products end-to-end — from BLE telemetry protocols and Go microservices to React frontends and Kotlin apps.",
    'about.p2': "I run my startup with a team of autonomous AI agents I built from scratch. I send a goal on Telegram; they decompose it into tasks, route each to a specialist, cascade outputs between dependents, and report back. I approve what ships — the rest runs on its own, 24/7.",

    'stat.services': 'Go microservices',
    'stat.agents': 'AI agents',
    'stat.departments': 'departments',
    'stat.uptime': 'autonomous',

    'skills.title': 'Skills that fuel my passion',
    'skills.sub': 'The stack I use to design, build and run real products.',
    'sk.langs.t': 'Languages',
    'sk.langs.d': 'Building reliable systems across the stack — from low-level services to strongly-typed frontends.',
    'sk.backend.t': 'Backend & APIs',
    'sk.backend.d': 'Robust Go microservices, Kafka streaming and clean handler → repository layering. Gin · pgx · Keycloak RS256.',
    'sk.ai.t': 'AI & Agents',
    'sk.ai.d': 'Autonomous agent teams that decompose goals, route tasks and ship real work with a human in the loop.',
    'sk.data.t': 'Data',
    'sk.data.d': 'Time-series metrics per minute, streaming ingestion and observability with the ELK stack.',
    'sk.front.t': 'Frontend & Mobile',
    'sk.front.d': 'React 19 + Vite web apps and Kotlin / Jetpack Compose Android with MVVM, Room and Hilt.',
    'sk.infra.t': 'Infra & DevOps',
    'sk.infra.d': 'Containerized deployments, TLS edge, encrypted backups and CI/CD on GitHub Actions and GitLab.',
    'sk.practice.t': 'Practices',
    'sk.practice.d': 'Shipping end-to-end with a human-in-the-loop AI workforce.',
    'sk.practice.c1': 'System Design',
    'sk.practice.c2': 'Microservices',
    'sk.practice.c3': 'Code Review',
    'sk.practice.c4': 'Problem Solving',
    'sk.practice.c5': 'Leadership',

    'projects.t1': 'welcome to my realm of',
    'projects.t2': 'wild projects and awesome creations',
    'proj.amori': 'Smart Pet Platform',

    'contact.kicker': "That's all for now.",
    'contact.l1': 'Got a project in mind?',
    'contact.l2': "Let's talk",
    'contact.btn': 'Get in touch',
  },

  ru: {
    'hero.lead': "Создаю интеллектуальные продукты от и до — умный ошейник для питомцев, автономные команды AI-агентов и инструменты для разработчиков.",
    'hero.ctaProjects': 'Смотреть проекты',
    'hero.ctaContact': 'Связаться',

    'about.title': 'обо мне',
    'about.p1': "Я фаундер и AI-инженер. Делаю реальные продукты от и до — от BLE-протоколов телеметрии и Go-микросервисов до React-фронтендов и Kotlin-приложений.",
    'about.p2': "Управляю стартапом с командой автономных AI-агентов, которых построил с нуля. Отправляю цель в Telegram — они разбивают её на задачи, распределяют по специалистам, передают результаты между зависимыми и отчитываются. Я утверждаю то, что идёт в релиз — остальное работает само, 24/7.",

    'stat.services': 'Go-микросервисов',
    'stat.agents': 'AI-агентов',
    'stat.departments': 'отделов',
    'stat.uptime': 'автономно',

    'skills.title': 'Навыки, которые меня драйвят',
    'skills.sub': 'Стек, на котором я проектирую, строю и запускаю реальные продукты.',
    'sk.langs.t': 'Языки',
    'sk.langs.d': 'Надёжные системы на всех уровнях — от низкоуровневых сервисов до типизированных фронтендов.',
    'sk.backend.t': 'Бэкенд и API',
    'sk.backend.d': 'Надёжные Go-микросервисы, стриминг через Kafka и чистая слоистость handler → repository. Gin · pgx · Keycloak RS256.',
    'sk.ai.t': 'AI и агенты',
    'sk.ai.d': 'Автономные команды агентов: декомпозируют цели, распределяют задачи и делают реальную работу с человеком в контуре.',
    'sk.data.t': 'Данные',
    'sk.data.d': 'Поминутные тайм-серии метрик, потоковый ingestion и наблюдаемость на стеке ELK.',
    'sk.front.t': 'Фронтенд и мобайл',
    'sk.front.d': 'Веб на React 19 + Vite и Android на Kotlin / Jetpack Compose с MVVM, Room и Hilt.',
    'sk.infra.t': 'Инфра и DevOps',
    'sk.infra.d': 'Контейнерные деплои, TLS на эдже, шифрованные бэкапы и CI/CD на GitHub Actions и GitLab.',
    'sk.practice.t': 'Практики',
    'sk.practice.d': 'Делаю продукт от и до с AI-командой и человеком в контуре.',
    'sk.practice.c1': 'Системный дизайн',
    'sk.practice.c2': 'Микросервисы',
    'sk.practice.c3': 'Code Review',
    'sk.practice.c4': 'Решение задач',
    'sk.practice.c5': 'Лидерство',

    'projects.t1': 'добро пожаловать в мир моих',
    'projects.t2': 'смелых проектов и крутых решений',
    'proj.amori': 'умная платформа для питомцев',

    'contact.kicker': 'Это пока всё.',
    'contact.l1': 'Есть проект на примете?',
    'contact.l2': 'Давай обсудим',
    'contact.btn': 'Связаться',
  },
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('.lang__btn').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang))
  );
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const browser = (navigator.language || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en';
  applyLang(saved || browser);
  document.querySelectorAll('.lang__btn').forEach((btn) =>
    btn.addEventListener('click', () => applyLang(btn.dataset.lang))
  );
}

function initReveal() {
  const targets = document.querySelectorAll('section, .footer');
  targets.forEach((t) => t.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  targets.forEach((t) => io.observe(t));
}

function initCounters() {
  const nums = document.querySelectorAll('.stat__n[data-count]');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, target = parseInt(el.dataset.count, 10);
      let cur = 0; const step = Math.max(1, Math.round(target / 22));
      const tick = () => { cur = Math.min(target, cur + step); el.textContent = cur; if (cur < target) requestAnimationFrame(tick); };
      tick(); io.unobserve(el);
    });
  }, { threshold: 0.6 });
  nums.forEach((n) => io.observe(n));
}

function initDockActive() {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact']
    .map((id) => document.getElementById(id)).filter(Boolean);
  const links = {};
  document.querySelectorAll('.dock__nav a').forEach((a) => {
    const id = a.getAttribute('href').slice(1); links[id] = a;
  });
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      Object.values(links).forEach((l) => l.classList.remove('active'));
      const id = e.target.id; if (links[id]) links[id].classList.add('active');
    });
  }, { threshold: 0.5 });
  sections.forEach((s) => io.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initReveal();
  initCounters();
  initDockActive();
});
