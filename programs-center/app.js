const pageLayoutStyle = document.createElement('link');
pageLayoutStyle.rel = 'stylesheet';
pageLayoutStyle.href = './layout-fixes.css?v=5';
document.head.appendChild(pageLayoutStyle);

const narrowShellStyle = document.createElement('link');
narrowShellStyle.rel = 'stylesheet';
narrowShellStyle.href = './narrow-shell.css?v=6';
document.head.appendChild(narrowShellStyle);

const compactControlsStyle = document.createElement('link');
compactControlsStyle.rel = 'stylesheet';
compactControlsStyle.href = './compact-controls.css?v=2';
document.head.appendChild(compactControlsStyle);

const compactPartnershipCardsStyle = document.createElement('link');
compactPartnershipCardsStyle.rel = 'stylesheet';
compactPartnershipCardsStyle.href = './partnership-cards-compact.css?v=5';
document.head.appendChild(compactPartnershipCardsStyle);

const microUiStyle = document.createElement('link');
microUiStyle.rel = 'stylesheet';
microUiStyle.href = './micro-ui-fixes.css?v=9';
document.head.appendChild(microUiStyle);

const gradeRouteStyle = document.createElement('style');
gradeRouteStyle.textContent = `
  @media (min-width: 980px) {
    .partnerships-section .container {
      width: min(980px, calc(100% - 40px)) !important;
    }

    .partnerships-section .partnership-grid,
    .route-details-host {
      max-width: 930px !important;
    }

    .partnerships-section .partnership-grid {
      grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
    }
  }

  @media (min-width: 900px) and (max-width: 979px) {
    .partnerships-section .partnership-grid {
      max-width: 720px !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    }
  }
`;
document.head.appendChild(gradeRouteStyle);

const heroKicker = document.querySelector('.hero-kicker');
heroKicker?.remove();

const heroTitle = document.getElementById('heroTitle');
if (heroTitle) {
  heroTitle.textContent = 'דור העתיד';
}

const heroText = document.querySelector('.hero-text');
if (heroText) {
  heroText.textContent = 'תעשיידע מחברת בין מערכת החינוך לעולמות התעשייה ומאפשרת לתלמידות ולתלמידים להיחשף לעולמות תוכן עדכניים במגוון תחומי המדע והטכנולוגיה, להתנסות בלמידה מעשית ולפתח ידע ומיומנויות הנדרשים בעולם המשתנה. באמצעות פעילותה, תעשיידע מקדמת שוויון הזדמנויות ומרחיבה את הנגישות לחינוך מדעי וטכנולוגי איכותי.';
}

const aboutParagraph = document.querySelector('.about-section .compact-heading > p:last-child');
if (aboutParagraph) {
  aboutParagraph.textContent = 'תעשיידע היא עמותה חינוכית־טכנולוגית, מיסודה של התאחדות התעשיינים בישראל, הפועלת מאז 1992 לחיבור בין מערכת החינוך לעולמות התעשייה. באמצעות תוכניות חינוכיות תהליכיות המתקיימות בפריסה ארצית, תלמידות ותלמידים חוקרים, מתנסים, מתמודדים עם אתגרים מעשיים ומפתחים ידע, כלים ומיומנויות שיסייעו להם ליצור, ליזום, להוביל ולהשתלב בעולם המשתנה.';
}

const partnershipsTitle = document.getElementById('partnershipsTitle');
if (partnershipsTitle) {
  partnershipsTitle.textContent = 'בוחרים כיצד להשפיע';
}

const partnershipsEyebrow = document.querySelector('.partnerships-heading .eyebrow');
if (partnershipsEyebrow) {
  partnershipsEyebrow.textContent = 'שישה מסלולים לבחירה';
}

const partnershipsParagraph = document.querySelector('.partnerships-heading > p:last-child');
if (partnershipsParagraph) {
  partnershipsParagraph.textContent = 'אנו מזמינים אתכם להיות שותפים ביצירת הזדמנויות חינוכיות משמעותיות, בהתאם לתחום ההשפעה שתרצו לקדם.';
}

const annualRouteCard = document.querySelector('.partnership-card[data-card="annual"]');
if (annualRouteCard && !document.querySelector('.partnership-card[data-card="grade-level"]')) {
  annualRouteCard.insertAdjacentHTML('beforebegin', `
    <article class="partnership-card" data-card="grade-level">
      <button class="card-toggle" type="button" aria-expanded="false" aria-controls="route-grade-level">
        <span class="route-number">03</span>
        <span class="route-label">מסלול שכבתי</span>
        <span class="route-price-label">סכום התרומה</span>
        <span class="route-price">לפי מספר הקבוצות</span>
        <span class="route-description">מימון תוכנית חינוכית לשכבת גיל שלמה בבית ספר אחד, במספר קבוצות מקבילות.</span>
        <span class="route-highlight" aria-hidden="true"></span>
        <span class="card-action">לפרטי המסלול <svg><use href="#icon-arrow"></use></svg></span>
      </button>
      <div class="card-details" id="route-grade-level" hidden>
        <div class="details-heading">
          <h3>פעילות לשכבת גיל שלמה</h3>
          <p>אותה תוכנית חינוכית למספר כיתות מקבילות בבית ספר אחד.</p>
        </div>
        <div class="single-program-copy">
          <p>המסלול מאפשר להרחיב את הפעילות לכל כיתות השכבה וליצור חוויית למידה משותפת והשפעה רחבה בבית הספר.</p>
          <p>ניתן לבחור תוכנית המתאימה ליסודי או לחטיבות. מספר הקבוצות וסכום התרומה ייקבעו בהתאם למבנה השכבה ולתוכנית הנבחרת.</p>
        </div>
        <button class="select-route" type="button" data-select-route="מסלול שכבתי – לפי מספר הקבוצות">בחירת מסלול שכבתי</button>
      </div>
    </article>
  `);
}

document.querySelectorAll('.partnership-card .route-number').forEach((number, index) => {
  number.textContent = String(index + 1).padStart(2, '0');
});

const partnershipRouteSelect = document.getElementById('partnershipRoute');
if (partnershipRouteSelect && ![...partnershipRouteSelect.options].some((option) => option.value.startsWith('מסלול שכבתי'))) {
  const gradeRouteOption = new Option('מסלול שכבתי – לפי מספר הקבוצות', 'מסלול שכבתי – לפי מספר הקבוצות');
  const annualRouteOption = [...partnershipRouteSelect.options].find((option) => option.value === 'מסלול שנתי');
  partnershipRouteSelect.insertBefore(gradeRouteOption, annualRouteOption || null);
}

document.querySelectorAll('.card-action').forEach((action) => {
  const icon = action.querySelector('svg');
  action.replaceChildren(document.createTextNode('לפרטי המסלול'));
  if (icon) action.appendChild(icon);
});

/* Prices belong only to the opened information panel, never to the front card. */
document.querySelectorAll('.partnership-card').forEach((card) => {
  const toggle = card.querySelector('.card-toggle');
  const detailsId = toggle?.getAttribute('aria-controls');
  const details = detailsId ? document.getElementById(detailsId) : null;
  const frontPrice = toggle?.querySelector('.route-price');

  if (!frontPrice) return;

  if (card.dataset.card === 'annual') {
    frontPrice.remove();
    return;
  }

  const detailsHeading = details?.querySelector('.details-heading');
  if (!detailsHeading) {
    frontPrice.remove();
    return;
  }

  frontPrice.classList.add('details-price-tag');
  frontPrice.classList.remove('route-price-split');
  detailsHeading.appendChild(frontPrice);
});

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
const selectedRouteSummary = document.getElementById('selectedRouteSummary');
const selectedRouteName = document.getElementById('selectedRouteName');

function updateSelectedRouteSummary() {
  const route = routeSelect?.value || '';
  if (selectedRouteName) {
    selectedRouteName.textContent = route || 'בחרו את מסלול התרומה המבוקש';
  }
  selectedRouteSummary?.classList.toggle('has-selection', Boolean(route));
}

routeSelect?.addEventListener('change', updateSelectedRouteSummary);
updateSelectedRouteSummary();

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

document.querySelector('.footer-top-link')?.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#top');
});
