['layout-fixes.css?v=13','narrow-shell.css?v=13','compact-controls.css?v=13','partnership-cards-compact.css?v=13','micro-ui-fixes.css?v=13'].forEach((href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `./${href}`;
  document.head.appendChild(link);
});

const uiStyle = document.createElement('style');
uiStyle.textContent = `
.about-more-intro{margin-top:12px!important}.about-read-more{display:inline-flex;align-items:center;justify-content:center;width:fit-content;min-width:0;min-height:28px;margin:10px auto 0;padding:5px 12px;border:1px solid #d7e2e8;border-radius:999px;background:#fff;box-shadow:0 3px 10px rgba(15,45,70,.08);color:#173752;font:inherit;font-size:.72rem;font-weight:700;line-height:1;letter-spacing:normal;cursor:pointer}.about-read-more:hover,.about-read-more:focus-visible{border-color:#9fcbd4;color:#0f6a7d;box-shadow:0 4px 12px rgba(15,45,70,.12)}.about-more-content{margin-top:12px}.about-more-content[hidden]{display:none!important}.about-more-content p{margin:0 0 10px!important}
.scope-options{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-bottom:12px}.scope-option{display:flex;flex-direction:column;min-width:0;padding:12px;border:1px solid #dfe7ec;border-radius:12px;background:#f8fafb}.scope-option h4{margin:0;color:var(--navy);font-size:.86rem;line-height:1.3}.scope-option p{margin:6px 0 0;color:#596d7c;font-size:.71rem;line-height:1.45}.scope-price{display:inline-flex;align-items:center;width:fit-content;margin:8px 0 0;padding:4px 8px;border:1px solid #d8e5ea;border-radius:999px;background:#f2f7f9;color:#176f8c;font-size:.69rem;font-weight:800;line-height:1.1;letter-spacing:normal;white-space:nowrap}.scope-option .select-route{margin-top:auto!important}.group-control{display:flex;align-items:center;gap:7px;margin-top:8px}.group-control label{color:#596d7c;font-size:.68rem;font-weight:700}.group-count-input,.route-groups-field input{width:62px!important;min-width:62px!important;height:30px!important;min-height:30px!important;padding:3px 7px!important;border:1px solid #ccdbe2!important;border-radius:8px!important;background:#fff!important;color:#173752!important;font-size:.76rem!important;font-weight:700!important;text-align:center}.programs-subheading{margin:2px 0 8px;color:var(--navy);font-size:.86rem;line-height:1.3}.route-groups-field[hidden]{display:none!important}.route-groups-field small{display:block;margin-top:4px;color:#71828e;font-size:.65rem;line-height:1.35}
@media(min-width:900px){.partnerships-section .partnership-grid{grid-template-columns:repeat(5,minmax(0,1fr))!important}}@media(max-width:760px){.scope-options{grid-template-columns:1fr}.about-read-more{font-size:.7rem}}
`;
document.head.appendChild(uiStyle);

const formatPrice = (amount) => `${new Intl.NumberFormat('he-IL').format(amount)} ₪`;
const gradeState = { elementary: 4, middle: 4 };

const heroTitle = document.getElementById('heroTitle');
const heroText = document.querySelector('.hero-text');
document.querySelector('.hero-kicker')?.remove();
if (heroTitle) heroTitle.textContent = 'דור העתיד';
if (heroText) heroText.textContent = 'תעשיידע מחברת בין מערכת החינוך לעולמות התעשייה ומאפשרת לתלמידות ולתלמידים להיחשף לעולמות תוכן עדכניים במגוון תחומי המדע והטכנולוגיה, להתנסות בלמידה מעשית ולפתח ידע ומיומנויות הנדרשים בעולם המשתנה. באמצעות פעילותה, תעשיידע מקדמת שוויון הזדמנויות ומרחיבה את הנגישות לחינוך מדעי וטכנולוגי איכותי.';

const aboutParagraph = document.querySelector('.about-section .compact-heading > p:last-child');
if (aboutParagraph) {
  aboutParagraph.textContent = 'תעשיידע היא עמותה חינוכית־טכנולוגית, מיסודה של התאחדות התעשיינים בישראל, הפועלת מאז 1992 לחיבור בין מערכת החינוך לעולמות התעשייה. באמצעות תוכניות חינוכיות תהליכיות המתקיימות בפריסה ארצית, תלמידות ותלמידים חוקרים, מתנסים, מתמודדים עם אתגרים מעשיים ומפתחים ידע, כלים ומיומנויות שיסייעו להם ליצור, ליזום, להוביל ולהשתלב בעולם המשתנה.';
  aboutParagraph.insertAdjacentHTML('afterend', `
    <p class="about-more-intro">תעשיידע מפתחת ומפעילה תוכניות חינוכיות תהליכיות אשר מקנות לתלמידים כלים ומיומנויות החיוניים לעולם המשתנה ובהם חשיבה ביקורתית ויצירתית, פתרון בעיות, עבודת צוות, תקשורת בין-אישית, הצגת רעיונות, אוריינות מדעית, טכנולוגית ודיגיטלית, יוזמה, אחריות, גמישות, התמדה ולמידה עצמאית.</p>
    <button class="about-read-more" type="button" aria-expanded="false" aria-controls="aboutMoreContent">קראו עוד</button>
    <div class="about-more-content" id="aboutMoreContent" hidden>
      <p>לצד אלה הן מעודדות סקרנות ומוטיבציה ללמידה, מחזקות את תחושת המסוגלות, החוסן האישי ומאפשרות לתלמידים לגלות את יכולותיהם, להתמודד עם אתגרים ולראות אפשרויות חדשות לעתידם.</p>
      <p>תעשיידע פועלת מתוך שליחות ציבורית, חברתית ולאומית להרחבת הזדמנויות חינוכיות, להנגשת ידע ועולמות תוכן מתקדמים ולחיזוק החיבור בין חינוך, השכלה, הכשרה ותעסוקה. חזון העמותה הוא לאפשר לכל תלמידה ותלמיד להכיר את עולמות התעשייה והטכנולוגיה, להתנסות בעשייה חדשנית ולפתח ידע, כלים ומיומנויות שיסייעו להם להשתלב, להתפתח ולהוביל בעולם המשתנה.</p>
      <p>הקשר לתעשייה הוא מרכיב מרכזי בזהותה ובפעילותה של תעשיידע. העמותה פועלת בשיתוף חברות תעשייה והייטק, מפעלים, אנשי מקצוע, רשויות מקומיות, קרנות ותורמים ומחברת בינם לבין בתי ספר וקהילות ברחבי הארץ.</p>
      <p>שיתופי פעולה אלה מאפשרים לשלב בתוכניות ידע מקצועי עדכני, טכנולוגיות מתקדמות, אתגרים מהשטח ותהליכי עבודה מעולם העשייה. החיבור בין מערכת החינוך, התעשייה, הרשויות והקהילה מאפשר לתעשיידע לקדם עשייה חינוכית רלוונטית, מעשית ובעלת השפעה ולהרחיב את ההזדמנויות העומדות בפני תלמידות ותלמידים ברחבי הארץ.</p>
    </div>`);
}

document.querySelector('.about-read-more')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const content = document.getElementById('aboutMoreContent');
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  button.textContent = open ? 'קראו עוד' : 'הצג פחות';
  if (content) content.hidden = open;
});

const partnershipsTitle = document.getElementById('partnershipsTitle');
const partnershipsEyebrow = document.querySelector('.partnerships-heading .eyebrow');
const partnershipsParagraph = document.querySelector('.partnerships-heading > p:last-child');
if (partnershipsTitle) partnershipsTitle.textContent = 'בוחרים כיצד להשפיע';
if (partnershipsEyebrow) partnershipsEyebrow.textContent = 'חמישה מסלולים לבחירה';
if (partnershipsParagraph) partnershipsParagraph.textContent = 'בוחרים את קהל היעד ואת היקף הפעילות המתאים, או מסלול ייחודי המשלב תוכן מקצועי ומעורבות של החברה.';

function scopeMarkup(type, singlePrice, annualPrice) {
  const label = type === 'elementary' ? 'יסודי' : 'חטיבות';
  const groupText = type === 'elementary' ? 'בכיתות ד׳–ו׳' : 'בחטיבת הביניים או בתיכון';
  return `
    <div class="scope-options">
      <article class="scope-option"><h4>תוכנית לקבוצה אחת</h4><p>תוכנית חינוכית מלאה לקבוצת תלמידים אחת ${groupText}.</p><span class="scope-price">${formatPrice(singlePrice)}</span><button class="select-route" type="button" data-route-id="${type}-single">בחירת קבוצה אחת</button></article>
      <article class="scope-option"><h4>פעילות שכבתית</h4><p>אותה תוכנית למספר כיתות מקבילות בבית ספר אחד. ברירת המחדל היא 4 קבוצות.</p><div class="group-control"><label for="${type}GradeGroups">מספר קבוצות</label><input class="group-count-input" id="${type}GradeGroups" type="number" min="2" max="20" step="1" value="4" data-grade-type="${type}"></div><span class="scope-price" data-scope-price="${type}-grade">${formatPrice(singlePrice * 4)}</span><button class="select-route" type="button" data-route-id="${type}-grade">בחירת מסלול שכבתי</button></article>
      <article class="scope-option"><h4>מסלול שנתי</h4><p>שתי תוכניות חינוכיות במהלך שנת הלימודים במסלול ${label}.</p><span class="scope-price">${formatPrice(annualPrice)}</span><button class="select-route" type="button" data-route-id="${type}-annual">בחירת מסלול שנתי</button></article>
    </div>`;
}

const elementaryCard = document.querySelector('.partnership-card[data-card="elementary"]');
const middleCard = document.querySelector('.partnership-card[data-card="middle-school"]');
const annualCard = document.querySelector('.partnership-card[data-card="annual"]');
const trailblazersCard = document.querySelector('.partnership-card[data-card="trailblazers"]');
const premiumCard = document.querySelector('.partnership-card[data-card="premium"]');

if (elementaryCard) {
  elementaryCard.querySelector('.route-description').textContent = 'מימון תוכנית חינוכית לכיתות ד׳–ו׳, לקבוצה אחת, לשכבה או למסלול שנתי מלא.';
  elementaryCard.querySelector('.details-heading h3').textContent = 'מסלול יסודי';
  elementaryCard.querySelector('.details-heading p').textContent = 'בחרו את היקף הפעילות המתאים לבית הספר ולקהילה.';
  elementaryCard.querySelector('.details-heading').insertAdjacentHTML('afterend', scopeMarkup('elementary', 9500, 18000));
  elementaryCard.querySelector('.program-list')?.insertAdjacentHTML('beforebegin', '<h4 class="programs-subheading">תוכניות לבחירה</h4>');
  elementaryCard.querySelector('.card-details > .select-route')?.remove();
}

let pharmaProgramHtml = '';
if (middleCard) {
  middleCard.querySelector('.route-description').textContent = 'מימון תוכנית חינוכית לחטיבה ולתיכון, לקבוצה אחת, לשכבה או לפעילות שנתית.';
  middleCard.querySelector('.details-heading h3').textContent = 'מסלול חטיבות';
  middleCard.querySelector('.details-heading p').textContent = 'בחרו את היקף הפעילות המתאים לבית הספר ולקהילה.';
  middleCard.querySelector('.details-heading').insertAdjacentHTML('afterend', scopeMarkup('middle', 10000, 19000));
  middleCard.querySelector('.program-list')?.insertAdjacentHTML('beforebegin', '<h4 class="programs-subheading">תוכניות לבחירה</h4>');
  middleCard.querySelectorAll('.program-option').forEach((program) => {
    if ((program.querySelector('h4')?.textContent || '').includes('רוקחים עולם')) {
      pharmaProgramHtml = program.outerHTML;
      program.remove();
    }
  });
  middleCard.querySelector('.card-details > .select-route')?.remove();
}

annualCard?.remove();

document.querySelectorAll('.partnership-card .route-price,.partnership-card .route-price-label').forEach((node) => node.remove());

if (trailblazersCard) {
  trailblazersCard.querySelector('.details-heading')?.insertAdjacentHTML('beforeend', '<span class="details-price-tag">13,000 ₪</span>');
  const button = trailblazersCard.querySelector('.select-route');
  if (button) { button.dataset.routeId = 'trailblazers'; button.removeAttribute('data-select-route'); }
}

if (premiumCard) {
  premiumCard.querySelector('.details-heading')?.insertAdjacentHTML('beforeend', '<span class="details-price-tag">15,000 ₪</span>');
  const button = premiumCard.querySelector('.select-route');
  if (button) { button.dataset.routeId = 'premium'; button.removeAttribute('data-select-route'); }
}

if (premiumCard) {
  premiumCard.insertAdjacentHTML('beforebegin', `
    <article class="partnership-card" data-card="pharma">
      <span class="premium-badge">אירוח בחברה</span>
      <button class="card-toggle" type="button" aria-expanded="false" aria-controls="route-pharma">
        <span class="route-number">04</span><span class="route-label">מסלול רוקחים עולם</span><span class="route-description">מימון תוכנית ״רוקחים עולם״ לצד מפגש מקצועי עם אנשי מקצוע מתעשיית הפארמצבטיקה.</span><span class="route-highlight" aria-hidden="true"></span><span class="card-action">לפרטי המסלול <svg><use href="#icon-arrow"></use></svg></span>
      </button>
      <div class="card-details" id="route-pharma" hidden>
        <div class="details-heading"><h3>רוקחים עולם – יזמות לעולם הפרמצבטיקה</h3><p class="program-meta">מספר גפ״ן: 46091 | כיתות ז׳–י׳ | 14 מפגשים</p><span class="details-price-tag">13,000 ₪</span></div>
        <div class="program-list">${pharmaProgramHtml}<article class="program-option"><h4>אירוח מקצועי בחברה התורמת</h4><p>המסלול כולל אירוח של התלמידים בחברה התורמת, היכרות עם סביבת העבודה, תהליכי פיתוח וייצור ומפגש עם אנשי מקצוע מעולמות הפרמצבטיקה, מדעי החיים והרפואה.</p></article></div>
        <button class="select-route" type="button" data-route-id="pharma">בחירת מסלול פארמצבטיקה</button>
      </div>
    </article>`);
}

document.querySelectorAll('.partnership-card .route-number').forEach((number, index) => { number.textContent = String(index + 1).padStart(2, '0'); });
document.querySelectorAll('.card-action').forEach((action) => {
  const icon = action.querySelector('svg');
  action.replaceChildren(document.createTextNode('לפרטי המסלול'));
  if (icon) action.appendChild(icon);
});

const routes = {
  'elementary-single': { label: 'מסלול יסודי – קבוצה אחת', amount: 9500, groups: 1, unitPrice: 9500 },
  'elementary-grade': { label: 'מסלול יסודי – פעילות שכבתית', amount: 38000, groups: 4, unitPrice: 9500, gradeType: 'elementary' },
  'elementary-annual': { label: 'מסלול יסודי – שנתי', amount: 18000, groups: 1, unitPrice: null },
  'middle-single': { label: 'מסלול חטיבות – קבוצה אחת', amount: 10000, groups: 1, unitPrice: 10000 },
  'middle-grade': { label: 'מסלול חטיבות – פעילות שכבתית', amount: 40000, groups: 4, unitPrice: 10000, gradeType: 'middle' },
  'middle-annual': { label: 'מסלול חטיבות – שנתי', amount: 19000, groups: 1, unitPrice: null },
  trailblazers: { label: 'מסלול פורצות דרך', amount: 13000, groups: 1, unitPrice: 13000 },
  pharma: { label: 'מסלול פארמצבטיקה – רוקחים עולם ואירוח בחברה', amount: 13000, groups: 1, unitPrice: 13000 },
  premium: { label: 'מסלול פרימיום תעשייתי', amount: 15000, groups: 1, unitPrice: 15000 }
};

const routeSelect = document.getElementById('partnershipRoute');
const routeSelectLabel = routeSelect?.closest('label');
if (routeSelect) {
  routeSelect.innerHTML = '<option value="">בחירת מסלול תרומה</option>';
  Object.entries(routes).forEach(([id, route]) => {
    const option = document.createElement('option');
    option.dataset.routeId = id;
    option.value = `${route.label} – ${formatPrice(route.amount)}`;
    option.textContent = option.value;
    routeSelect.appendChild(option);
  });
}

routeSelectLabel?.insertAdjacentHTML('afterend', '<label class="full-field route-groups-field" hidden><span>מספר קבוצות במסלול השכבתי</span><input type="number" id="gradeGroupsForm" min="2" max="20" step="1" value="4"><small>ברירת המחדל היא 4 קבוצות. הסכום מתעדכן לפי מספר הקבוצות.</small></label>');
const partnershipForm = document.getElementById('partnershipForm');
partnershipForm?.insertAdjacentHTML('afterbegin', '<input type="hidden" id="routeGroups" name="מספר קבוצות" value="1"><input type="hidden" id="routeUnitPrice" name="מחיר לקבוצה" value=""><input type="hidden" id="routeEstimatedAmount" name="סכום התרומה" value="">');

const groupsField = document.querySelector('.route-groups-field');
const groupsForm = document.getElementById('gradeGroupsForm');
const selectedRouteName = document.getElementById('selectedRouteName');
const selectedRouteSummary = document.getElementById('selectedRouteSummary');
const contactSection = document.getElementById('contact');

const getOption = (id) => [...(routeSelect?.options || [])].find((option) => option.dataset.routeId === id);
function updateSummary() {
  const option = routeSelect?.selectedOptions?.[0];
  const route = routes[option?.dataset.routeId || ''];
  const text = option?.value || '';
  if (selectedRouteName) selectedRouteName.textContent = text || 'בחרו את מסלול התרומה המבוקש';
  selectedRouteSummary?.classList.toggle('has-selection', Boolean(text));
  if (groupsField) groupsField.hidden = !route?.gradeType;
  if (route?.gradeType && groupsForm) groupsForm.value = route.groups;
  const groups = document.getElementById('routeGroups');
  const unit = document.getElementById('routeUnitPrice');
  const amount = document.getElementById('routeEstimatedAmount');
  if (groups) groups.value = route?.groups || 1;
  if (unit) unit.value = route?.unitPrice || '';
  if (amount) amount.value = route?.amount || '';
}
function refreshGrade(type) {
  const id = `${type}-grade`;
  const route = routes[id];
  route.groups = gradeState[type];
  route.amount = route.groups * route.unitPrice;
  const option = getOption(id);
  if (option) option.value = option.textContent = `${route.label} – ${route.groups} קבוצות – ${formatPrice(route.amount)}`;
  const price = document.querySelector(`[data-scope-price="${id}"]`);
  if (price) price.textContent = formatPrice(route.amount);
  const cardInput = document.querySelector(`[data-grade-type="${type}"]`);
  if (cardInput) cardInput.value = route.groups;
  if (routeSelect?.selectedOptions?.[0]?.dataset.routeId === id) updateSummary();
}
function selectRoute(id) {
  const option = getOption(id);
  if (!routeSelect || !option) return;
  routeSelect.value = option.value;
  routeSelect.dispatchEvent(new Event('change', { bubbles: true }));
  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => document.getElementById('fullName')?.focus({ preventScroll: true }), 650);
}

document.querySelectorAll('.group-count-input').forEach((input) => input.addEventListener('change', () => {
  const type = input.dataset.gradeType;
  gradeState[type] = Math.min(20, Math.max(2, parseInt(input.value, 10) || 4));
  refreshGrade(type);
}));
groupsForm?.addEventListener('change', () => {
  const id = routeSelect?.selectedOptions?.[0]?.dataset.routeId || '';
  const type = routes[id]?.gradeType;
  if (!type) return;
  gradeState[type] = Math.min(20, Math.max(2, parseInt(groupsForm.value, 10) || 4));
  refreshGrade(type);
});
routeSelect?.addEventListener('change', updateSummary);
refreshGrade('elementary');
refreshGrade('middle');
updateSummary();
document.querySelectorAll('[data-route-id]').forEach((button) => button.addEventListener('click', () => selectRoute(button.dataset.routeId)));

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('mainNav');
function setNavigationState(open) {
  if (!navToggle || !mainNav) return;
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'סגירת התפריט' : 'פתיחת התפריט');
  mainNav.classList.toggle('open', open);
  document.body.classList.toggle('nav-open', open);
  navToggle.querySelector('use')?.setAttribute('href', open ? '#icon-close' : '#icon-menu');
}
navToggle?.addEventListener('click', () => setNavigationState(navToggle.getAttribute('aria-expanded') !== 'true'));
mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setNavigationState(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setNavigationState(false); });

const routeCards = [...document.querySelectorAll('.partnership-card')];
const partnershipGrid = document.querySelector('.partnership-grid');
const detailsHost = document.createElement('div');
let activeCard = null;
if (partnershipGrid) { detailsHost.className = 'route-details-host'; detailsHost.hidden = true; partnershipGrid.insertAdjacentElement('afterend', detailsHost); }
const getDetails = (card) => document.getElementById(card?.querySelector('.card-toggle')?.getAttribute('aria-controls'));
function placeDetails(card) {
  const details = getDetails(card);
  if (!details) return;
  if (matchMedia('(min-width:761px)').matches) { detailsHost.appendChild(details); detailsHost.hidden = false; }
  else { card.appendChild(details); detailsHost.hidden = true; }
}
function closeCard(card) {
  const details = getDetails(card);
  card.querySelector('.card-toggle')?.setAttribute('aria-expanded', 'false');
  if (details) details.hidden = true;
  card.classList.remove('is-open');
  if (activeCard === card) activeCard = null;
  if (!activeCard) detailsHost.hidden = true;
}
function openCard(card) {
  routeCards.forEach((other) => { if (other !== card) closeCard(other); });
  const details = getDetails(card);
  if (!details) return;
  activeCard = card;
  placeDetails(card);
  card.querySelector('.card-toggle')?.setAttribute('aria-expanded', 'true');
  details.hidden = false;
  card.classList.add('is-open');
}
routeCards.forEach((card) => card.querySelector('.card-toggle')?.addEventListener('click', () => card.classList.contains('is-open') ? closeCard(card) : openCard(card)));
window.addEventListener('resize', () => { if (innerWidth > 760) setNavigationState(false); if (activeCard) placeDetails(activeCard); });
document.querySelector('.footer-top-link')?.addEventListener('click', (event) => { event.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); history.replaceState(null, '', '#top'); });
