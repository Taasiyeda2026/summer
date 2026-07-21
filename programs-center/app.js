const pageLayoutStyle = document.createElement('link');
pageLayoutStyle.rel = 'stylesheet';
pageLayoutStyle.href = './layout-fixes.css?v=5';
document.head.appendChild(pageLayoutStyle);

const narrowShellStyle = document.createElement('link');
narrowShellStyle.rel = 'stylesheet';
narrowShellStyle.href = './narrow-shell.css?v=3';
document.head.appendChild(narrowShellStyle);

const compactControlsStyle = document.createElement('link');
compactControlsStyle.rel = 'stylesheet';
compactControlsStyle.href = './compact-controls.css?v=2';
document.head.appendChild(compactControlsStyle);

const heroKicker = document.querySelector('.hero-kicker');
heroKicker?.remove();

const heroTitle = document.getElementById('heroTitle');
if (heroTitle) {
  heroTitle.textContent = 'שותפות חינוכית לקידום דור העתיד בקהילה';
}

const aboutParagraph = document.querySelector('.about-section .compact-heading > p:last-child');
if (aboutParagraph) {
  aboutParagraph.textContent = 'תעשיידע היא עמותה חינוכית־טכנולוגית, מיסודה של התאחדות התעשיינים בישראל, הפועלת מאז 1992 לחיבור בין מערכת החינוך לעולמות התעשייה. באמצעות תוכניות חינוכיות תהליכיות המתקיימות בפריסה ארצית, תלמידות ותלמידים חוקרים, מתנסים, מתמודדים עם אתגרים מעשיים ומפתחים ידע, כלים ומיומנויות שיסייעו להם ליצור, ליזום, להוביל ולהשתלב בעולם המשתנה.';
}

const partnershipsTitle = document.getElementById('partnershipsTitle');
if (partnershipsTitle) {
  partnershipsTitle.textContent = 'בוחרים כיצד להשפיע';
}

const partnershipsParagraph = document.querySelector('.partnerships-heading > p:last-child');
if (partnershipsParagraph) {
  partnershipsParagraph.textContent = 'אנו מזמינים אתכם להיות שותפים ביצירת הזדמנויות חינוכיות משמעותיות, בהתאם לתחום ההשפעה שתרצו לקדם.';
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
const partnershipGrid = document.querySelector('.partnership-grid');
const routeDetailsHost = document.createElement('div');
let activeRouteCard = null;

if (partnershipGrid) {
  routeDetailsHost.className = 'route-details-host';
  routeDetailsHost.hidden = true;
  partnershipGrid.insertAdjacentElement('afterend', routeDetailsHost);
}

function getCardDetails(card) {
  const toggle = card?.querySelector('.card-toggle');
  const detailsId = toggle?.getAttribute('aria-controls');
  return detailsId ? document.getElementById(detailsId) : null;
}

function useSharedDetailsPanel() {
  return window.matchMedia('(min-width: 761px)').matches;
}

function placeCardDetails(card) {
  const details = getCardDetails(card);
  if (!details) return;

  if (useSharedDetailsPanel() && partnershipGrid) {
    routeDetailsHost.appendChild(details);
    routeDetailsHost.hidden = false;
  } else {
    card.appendChild(details);
    routeDetailsHost.hidden = true;
  }
}

function closeCard(card) {
  const toggle = card.querySelector('.card-toggle');
  const details = getCardDetails(card);
  if (!toggle || !details) return;

  toggle.setAttribute('aria-expanded', 'false');
  details.hidden = true;
  card.classList.remove('is-open');

  if (activeRouteCard === card) activeRouteCard = null;
  if (!activeRouteCard) routeDetailsHost.hidden = true;
}

function openCard(card) {
  routeCards.forEach((otherCard) => {
    if (otherCard !== card) closeCard(otherCard);
  });

  const toggle = card.querySelector('.card-toggle');
  const details = getCardDetails(card);
  if (!toggle || !details) return;

  activeRouteCard = card;
  placeCardDetails(card);
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
  if (activeRouteCard) placeCardDetails(activeRouteCard);
});