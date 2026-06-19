/* ============================================================
   Denis Kolesnikov — Portfolio
   i18n (RU/EN) · theme toggle · scroll reveal · stat counters · dock active
   ============================================================ */

const I18N = {
  en: {
    'hero.lead': "I design and build complete products — IoT hardware, Go services, React apps, and custom AI automation.",
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': 'Get in touch',

    'about.title': 'about',
    'about.p1': "Founder and engineer. I've shipped a Bluetooth pet collar with custom firmware, deployed 8 Go microservices in production, and built an Android app from the ground up.",
    'about.p2': "My startup runs on an AI team I designed from scratch. I post a goal on Telegram — agents break it into tasks, work through them in sequence, and send me a report. I review what ships. Everything else runs around the clock.",

    'stat.services': 'Go microservices',
    'stat.agents': 'AI agents',
    'stat.departments': 'departments',
    'stat.uptime': 'autonomous',

    'skills.title': 'What I build with',
    'skills.sub': 'Technologies I reach for when designing, building, and running production systems.',
    'sk.langs.t': 'Languages',
    'sk.langs.d': 'Go and Python for backend and automation, TypeScript for frontends, Kotlin for Android, C for embedded.',
    'sk.backend.t': 'Backend & APIs',
    'sk.backend.d': 'Go microservices with Gin, PostgreSQL via pgx, Kafka for streaming, Keycloak RS256 for auth.',
    'sk.ai.t': 'AI & Agents',
    'sk.ai.d': 'A custom AI team where agents pick up tasks, pass results down the chain, and finish a goal start to finish — no manual coordination.',
    'sk.data.t': 'Data',
    'sk.data.d': 'Per-minute time-series metrics, streaming ingestion, and observability with the ELK stack.',
    'sk.front.t': 'Frontend & Mobile',
    'sk.front.d': 'React 19 + Vite on the web. Kotlin + Jetpack Compose on Android with MVVM, Room, and Hilt.',
    'sk.infra.t': 'Infra & DevOps',
    'sk.infra.d': 'Docker Compose deployments, Nginx TLS edge, encrypted off-site backups, CI/CD on GitHub Actions and GitLab.',
    'sk.practice.t': 'How I work',
    'sk.practice.d': 'Designing systems end to end — from architecture to deployment.',
    'sk.practice.c1': 'System Design',
    'sk.practice.c2': 'Microservices',
    'sk.practice.c3': 'Code Review',
    'sk.practice.c4': 'Problem Solving',
    'sk.practice.c5': 'Leadership',

    'projects.t1': 'a look at some of',
    'projects.t2': 'the things I\'ve built',
    'proj.amori': 'Smart Pet Platform',

    'contact.kicker': "That's all for now.",
    'contact.l1': 'Got a project in mind?',
    'contact.l2': "Let's talk",
    'contact.btn': 'Get in touch',
  },

  ru: {
    'hero.lead': "Проектирую и строю готовые продукты — IoT-устройства, Go-сервисы, React-приложения и кастомную AI-автоматизацию.",
    'hero.ctaProjects': 'Смотреть проекты',
    'hero.ctaContact': 'Связаться',

    'about.title': 'обо мне',
    'about.p1': "Фаундер и инженер. Запустил Bluetooth-ошейник с кастомной прошивкой, поднял 8 Go-микросервисов в продакшене и написал Android-приложение с нуля.",
    'about.p2': "Стартап работает на AI-команде, которую я спроектировал сам. Публикую цель в Telegram — агенты разбивают её на задачи, выполняют по очереди и присылают отчёт. Я проверяю то, что идёт в релиз. Остальное работает круглосуточно.",

    'stat.services': 'Go-микросервисов',
    'stat.agents': 'AI-агентов',
    'stat.departments': 'отделов',
    'stat.uptime': 'автономно',

    'skills.title': 'Чем я строю',
    'skills.sub': 'Технологии, к которым обращаюсь при проектировании и эксплуатации продакшен-систем.',
    'sk.langs.t': 'Языки',
    'sk.langs.d': 'Go и Python для бэкенда и автоматизации, TypeScript для фронтенда, Kotlin для Android, C для встраиваемых систем.',
    'sk.backend.t': 'Бэкенд и API',
    'sk.backend.d': 'Go-микросервисы с Gin, PostgreSQL через pgx, Kafka для стриминга, Keycloak RS256 для авторизации.',
    'sk.ai.t': 'AI и агенты',
    'sk.ai.d': 'Кастомная AI-команда: агенты берут задачи, передают результаты по цепочке и доводят цель до конца без ручной координации.',
    'sk.data.t': 'Данные',
    'sk.data.d': 'Поминутные тайм-серии, потоковый ingestion и наблюдаемость на стеке ELK.',
    'sk.front.t': 'Фронтенд и мобайл',
    'sk.front.d': 'React 19 + Vite в вебе. Kotlin + Jetpack Compose на Android с MVVM, Room и Hilt.',
    'sk.infra.t': 'Инфра и DevOps',
    'sk.infra.d': 'Docker Compose, Nginx TLS, шифрованные бэкапы, CI/CD на GitHub Actions и GitLab.',
    'sk.practice.t': 'Как я работаю',
    'sk.practice.d': 'Проектирую системы от архитектуры до деплоя.',
    'sk.practice.c1': 'Системный дизайн',
    'sk.practice.c2': 'Микросервисы',
    'sk.practice.c3': 'Code Review',
    'sk.practice.c4': 'Решение задач',
    'sk.practice.c5': 'Лидерство',

    'projects.t1': 'несколько проектов из',
    'projects.t2': 'того, что я построил',
    'proj.amori': 'Умная платформа для питомцев',

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

function applyTheme(theme) {
  const html = document.documentElement;
  if (theme === 'light') {
    html.classList.add('light');
  } else {
    html.classList.remove('light');
  }
  try { localStorage.setItem('theme', theme); } catch (e) {}
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.contains('light');
      applyTheme(isLight ? 'dark' : 'light');
    });
  }
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

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initCopyEmail() {
  document.querySelectorAll('.copy-btn[data-email]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const email = btn.dataset.email;
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(email).then(() => {
        btn.classList.add('copied');
        btn.setAttribute('aria-label', 'Copied!');
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.setAttribute('aria-label', 'Copy email');
        }, 2000);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initReveal();
  initCounters();
  initDockActive();
  initScrollProgress();
  initCopyEmail();
});
