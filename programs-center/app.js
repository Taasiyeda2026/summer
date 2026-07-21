const compactDesktopStyle = document.createElement('style');
compactDesktopStyle.textContent = `
  @media (min-width: 901px) {
    html {
      zoom: .70;
      background: #eef2f5;
    }

    body {
      width: 100%;
      max-width: 1600px;
      margin-inline: auto;
      background: #fff;
      box-shadow: 0 0 60px rgba(7, 29, 51, .10);
    }

    .site-header,
    main,
    .site-footer {
      width: 100%;
      max-width: 1600px;
      margin-inline: auto;
    }

    .facts-grid {
      justify-items: center;
    }

    .fact {
      position: relative;
      width: 50%;
      min-height: 120px;
      padding: 22px 25px 22px 28px;
      overflow: hidden;
    }

    .fact::before {
      content: "";
      position: absolute;
      top: 18px;
      right: 0;
      bottom: 18px;
      display: block;
      width: 3px;
      height: auto;
      margin: 0;
      border-radius: 3px 0 0 3px;
      background: var(--navy);
      opacity: .72;
    }

    .fact:nth-child(2)::before {
      background: var(--teal);
    }

    .fact:nth-child(3)::before {
      background: var(--gold);
    }
  }
`;
document.head.appendChild(compactDesktopStyle);

const aboutParagraph = document.querySelector('.about-section .compact-heading > p:last-child');
if (aboutParagraph) {
  aboutParagraph.textContent = 'תעשיידע, מיסודה של התאחדות התעשיינים בישראל, פועלת מאז 1992 לחיבור משמעותי בין מערכת החינוך לבין עולם התעשייה. באמצעות תוכניות חינוכיות תהליכיות המתקיימות בפריסה ארצית, תלמידות ותלמידים נחשפים לעולמות המדע, הטכנולוגיה, ההנדסה, היזמות והחדשנות, מתמודדים עם אתגרים מעשיים ומפתחים את הידע, הכלים והמיומנויות הנדרשים להם כדי ליצור, ליזום ולהוביל בעולם המשתנה.';
}

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('mainNav');

function setNavigationState(isOpen) {
  if (!navToggle || !mainNav) return;
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'סגירת התפריט' : 'פתיחת התפריט');
  mainNav.classList.toggle('open', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
  const iconUse = navToggle.querySelector('use');
  if (iconUse) iconUse.setAttribute('href', isOpen ? '#icon-close' : '#icon-menu');
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    setNavigationState(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setNavigationState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setNavigationState(false);
  });
}

const routeCards = [...document.querySelectorAll('.partnership-card')];

function closeCard(card) {
  const toggle = card.querySelector('.card-toggle');
  const details = card.querySelector('.card-details');
  if (!toggle || !details) return;
  toggle.setAttribute('aria-expanded', 'false');
  details.hidden = true;
  card.classList.remove('is-open');
}

function openCard(card) {
  routeCards.forEach((otherCard) => {
    if (otherCard !== card) closeCard(otherCard);
  });
  const toggle = card.querySelector('.card-toggle');
  const details = card.querySelector('.card-details');
  if (!toggle || !details) return;
  toggle.setAttribute('aria-expanded', 'true');
  details.hidden = false;
  card.classList.add('is-open');
}

routeCards.forEach((card) => {
  const toggle = card.querySelector('.card-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeCard(card);
    else openCard(card);
  });
});

const routeSelect = document.getElementById('partnershipRoute');
const contactSection = document.getElementById('contact');

document.querySelectorAll('[data-select-route]').forEach((button) => {
  button.addEventListener('click', () => {
    const route = button.dataset.selectRoute || '';
    if (routeSelect) {
      routeSelect.value = route;
      routeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => document.getElementById('fullName')?.focus({ preventScroll: true }), 650);
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) setNavigationState(false);
});