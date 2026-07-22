['layout-fixes.css?v=27','narrow-shell.css?v=27','compact-controls.css?v=29','partnership-cards-compact.css?v=27','micro-ui-fixes.css?v=27'].forEach((href) => {
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
.special-quantity-control{display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;width:100%!important;margin:10px auto 12px!important}.special-quantity-control label{margin:0!important;white-space:nowrap!important;letter-spacing:normal!important}
.special-route-actions{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:10px!important;width:100%!important;margin-top:10px!important;direction:rtl!important}.special-route-actions .select-route{flex:0 0 auto!important;margin:0!important}.special-route-actions .special-quantity-control{display:flex!important;flex:0 0 auto!important;align-items:center!important;justify-content:flex-start!important;width:auto!important;margin:0!important;padding:0!important}.special-route-actions .special-quantity-control label{margin:0!important;white-space:nowrap!important;letter-spacing:normal!important}@media(max-width:520px){.special-route-actions{flex-wrap:wrap!important}}
.scope-grade-row{display:flex!important;align-items:center!important;justify-content:center!important;gap:9px!important;width:100%!important;margin-top:9px!important;margin-bottom:12px!important;direction:rtl!important}.scope-grade-row .group-control{display:flex!important;align-items:center!important;gap:6px!important;width:auto!important;margin:0!important}.scope-grade-row .group-control label{margin:0!important;white-space:nowrap!important;letter-spacing:normal!important}.scope-grade-row .group-count-input{width:48px!important;min-width:48px!important;max-width:48px!important;height:28px!important;min-height:28px!important;max-height:28px!important;margin:0!important;padding:2px 4px!important;text-align:center!important}.scope-grade-row .scope-price{flex:0 0 auto!important;margin:0!important}
#route-trailblazers .single-program-copy,#route-premium .single-program-copy{position:relative!important;overflow:hidden!important;border-color:#d6e3e8!important;background:linear-gradient(135deg,rgba(255,255,255,.98),rgba(243,248,250,.98))!important;box-shadow:inset -3px 0 0 rgba(47,159,163,.28),0 7px 20px rgba(15,45,70,.055)!important}#route-trailblazers .single-program-copy::before,#route-premium .single-program-copy::before{content:"";position:absolute;top:0;right:0;left:0;height:2px;background:linear-gradient(90deg,rgba(47,159,163,0),rgba(47,159,163,.58),rgba(47,159,163,0))}#route-trailblazers .single-program-copy>p:first-child,#route-premium .single-program-copy>p:first-child{color:#345469!important;font-weight:600!important}#route-trailblazers .special-route-actions,#route-premium .special-route-actions{position:relative!important;padding:9px 11px!important;border:1px solid #d8e5e9!important;border-radius:11px!important;background:linear-gradient(180deg,#f9fbfc 0%,#eef5f7 100%)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 4px 13px rgba(15,45,70,.06)!important}#route-trailblazers .special-route-actions .special-quantity-control label,#route-premium .special-route-actions .special-quantity-control label{color:#36566b!important;font-weight:800!important}#route-trailblazers .special-route-actions .special-group-count-input,#route-premium .special-route-actions .special-group-count-input{border-color:#bcd2da!important;box-shadow:0 2px 7px rgba(15,45,70,.07)!important}#route-trailblazers .special-route-actions .select-route,#route-premium .special-route-actions .select-route{box-shadow:0 5px 13px rgba(7,29,51,.17)!important}
`;
document.head.appendChild(uiStyle);

const formatPrice = (amount) => `${new Intl.NumberFormat('he-IL').format(amount)} ₪`;

const quantityPrices = Object.freeze({
  elementary:   Object.freeze({ 1: 9500,  2: 18500, 3: 27450, 4: 36000, 5: 45000, 6: 54000, 7: 63000, 8: 72000 }),
  middle:       Object.freeze({ 1: 10000, 2: 19500, 3: 28500, 4: 37000, 5: 45250, 6: 54000, 7: 63000, 8: 72000 }),
  trailblazers: Object.freeze({ 1: 13000, 2: 25200, 3: 36000, 4: 46000, 5: 55000, 6: 66000 }),
  pharma:       Object.freeze({ 1: 13000, 2: 25200, 3: 36000, 4: 46000, 5: 55000, 6: 66000 }),
  premium:      Object.freeze({ 1: 15000, 2: 29000, 3: 42600, 4: 56000, 5: 66250, 6: 79500 })
});
function getQuantityPrice(type, quantity) { return quantityPrices[type]?.[quantity] ?? null; }
function normalizeGradeQuantity(value) {
  const quantity = parseInt(value, 10);
  if (!Number.isFinite(quantity)) return 4;
  return Math.min(8, Math.max(2, quantity));
}
const gradeState = { elementary: 4, middle: 4 };

const specialQuantityState = { trailblazers: 1, pharma: 1, premium: 1 };
function normalizeSpecialQuantity(value) {
  const quantity = parseInt(value, 10);
  if (!Number.isFinite(quantity)) return 1;
  return Math.min(6, Math.max(1, quantity));
}
function formatGroupQuantity(quantity) {
  return quantity === 1 ? 'קבוצה אחת' : `${quantity} קבוצות`;
}

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

function specialQuantityMarkup(type, routeName) {
  return `<div class="group-control special-quantity-control"><label for="${type}Groups">מספר קבוצות</label><input class="group-count-input special-group-count-input" id="${type}Groups" type="number" min="1" max="6" step="1" value="1" data-special-type="${type}" aria-label="מספר קבוצות במסלול ${routeName}"></div>`;
}
function scopeMarkup(type) {
  const label = type === 'elementary' ? 'יסודי' : 'חטיבות';
  const groupText = type === 'elementary' ? 'בכיתות ד׳–ו׳' : 'בחטיבת הביניים או בתיכון';
  const singlePrice = getQuantityPrice(type, 1);
  const gradePrice  = getQuantityPrice(type, 4);
  const annualPrice = getQuantityPrice(type, 2);
  return `
    <div class="scope-options">
      <article class="scope-option"><h4>תוכנית לקבוצה אחת</h4><p>תוכנית חינוכית מלאה לקבוצת תלמידים אחת ${groupText}.</p><span class="scope-price">${formatPrice(singlePrice)}</span><button class="select-route" type="button" data-route-id="${type}-single">בחירת קבוצה אחת</button></article>
      <article class="scope-option"><h4>פעילות שכבתית</h4><p>אותה תוכנית למספר כיתות מקבילות בבית ספר אחד. ברירת המחדל היא 4 קבוצות.</p><div class="scope-grade-row"><div class="group-control"><label for="${type}GradeGroups">מספר קבוצות</label><input class="group-count-input" id="${type}GradeGroups" type="number" min="2" max="8" step="1" value="4" data-grade-type="${type}"></div><span class="scope-price" data-scope-price="${type}-grade">${formatPrice(gradePrice)}</span></div><button class="select-route" type="button" data-route-id="${type}-grade">בחירת מסלול שכבתי</button></article>
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
  elementaryCard.querySelector('.details-heading').insertAdjacentHTML('afterend', scopeMarkup('elementary'));
  elementaryCard.querySelector('.program-list')?.insertAdjacentHTML('beforebegin', '<h4 class="programs-subheading">תוכניות לבחירה</h4>');
  elementaryCard.querySelector('.card-details > .select-route')?.remove();
}

let pharmaProgramHtml = '';
if (middleCard) {
  middleCard.querySelector('.route-description').textContent = 'מימון תוכנית חינוכית לחטיבה ולתיכון, לקבוצה אחת, לשכבה או לפעילות שנתית.';
  middleCard.querySelector('.details-heading h3').textContent = 'מסלול חטיבות';
  middleCard.querySelector('.details-heading p').textContent = 'בחרו את היקף הפעילות המתאים לבית הספר ולקהילה.';
  middleCard.querySelector('.details-heading').insertAdjacentHTML('afterend', scopeMarkup('middle'));
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
  const heading = trailblazersCard.querySelector('.details-heading');
  heading?.insertAdjacentHTML('beforeend', `<span class="details-price-tag" data-special-price="trailblazers">${formatPrice(getQuantityPrice('trailblazers', 1))}</span>`);
  heading?.insertAdjacentHTML('afterend', specialQuantityMarkup('trailblazers', 'פורצות דרך'));
  const button = trailblazersCard.querySelector('.select-route');
  if (button) { button.dataset.routeId = 'trailblazers'; button.removeAttribute('data-select-route'); }
}

if (premiumCard) {
  const heading = premiumCard.querySelector('.details-heading');
  heading?.insertAdjacentHTML('beforeend', `<span class="details-price-tag" data-special-price="premium">${formatPrice(getQuantityPrice('premium', 1))}</span>`);
  heading?.insertAdjacentHTML('afterend', specialQuantityMarkup('premium', 'פרימיום תעשייתי'));
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
        <div class="details-heading"><h3>רוקחים עולם – יזמות לעולם הפרמצבטיקה</h3><p class="program-meta">מספר גפ״ן: 46091 | כיתות ז׳–י׳ | 14 מפגשים</p><span class="details-price-tag" data-special-price="pharma">13,000 ₪</span></div>
        ${specialQuantityMarkup('pharma', 'רוקחים עולם')}
        <div class="program-list">${pharmaProgramHtml}<article class="program-option"><h4>אירוח מקצועי בחברה התורמת</h4><p>המסלול כולל אירוח של התלמידים בחברה התורמת, היכרות עם סביבת העבודה, תהליכי פיתוח וייצור ומפגש עם אנשי מקצוע מעולמות הפרמצבטיקה, מדעי החיים והרפואה.</p></article></div>
        <button class="select-route" type="button" data-route-id="pharma">בחירת מסלול רוקחים עולם</button>
      </div>
    </article>`);
}

function placeSpecialRouteActions(card) {
  if (!card) return;
  const details = card.querySelector('.card-details');
  const quantityControl = details?.querySelector('.special-quantity-control');
  const selectButton = details?.querySelector(':scope > .select-route');
  if (!details || !quantityControl || !selectButton) return;
  let actions = details.querySelector('.special-route-actions');
  if (!actions) {
    actions = document.createElement('div');
    actions.className = 'special-route-actions';
    details.appendChild(actions);
  }
  actions.append(selectButton, quantityControl);
}
const pharmaCard = document.querySelector('.partnership-card[data-card="pharma"]');
[trailblazersCard, pharmaCard, premiumCard].forEach(placeSpecialRouteActions);

document.querySelectorAll('.partnership-card .route-number').forEach((number, index) => { number.textContent = String(index + 1).padStart(2, '0'); });
document.querySelectorAll('.card-action').forEach((action) => {
  const icon = action.querySelector('svg');
  action.replaceChildren(document.createTextNode('לפרטי המסלול'));
  if (icon) action.appendChild(icon);
});

const routes = {
  'elementary-single': { label: 'מסלול יסודי – קבוצה אחת',      amount: getQuantityPrice('elementary', 1), groups: 1, unitPrice: 9500 },
  'elementary-grade':  { label: 'מסלול יסודי – פעילות שכבתית',  amount: getQuantityPrice('elementary', 4), groups: 4, unitPrice: null, gradeType: 'elementary' },
  'elementary-annual': { label: 'מסלול יסודי – שנתי',            amount: getQuantityPrice('elementary', 2), groups: 2, unitPrice: null },
  'middle-single':     { label: 'מסלול חטיבות – קבוצה אחת',     amount: getQuantityPrice('middle', 1),     groups: 1, unitPrice: 10000 },
  'middle-grade':      { label: 'מסלול חטיבות – פעילות שכבתית', amount: getQuantityPrice('middle', 4),     groups: 4, unitPrice: null, gradeType: 'middle' },
  'middle-annual':     { label: 'מסלול חטיבות – שנתי',           amount: getQuantityPrice('middle', 2),     groups: 2, unitPrice: null },
  trailblazers: { label: 'מסלול פורצות דרך',        amount: getQuantityPrice('trailblazers', 1), groups: 1, unitPrice: null, quantityType: 'trailblazers' },
  pharma:       { label: 'מסלול רוקחים עולם',       amount: getQuantityPrice('pharma', 1),       groups: 1, unitPrice: null, quantityType: 'pharma' },
  premium:      { label: 'מסלול פרימיום תעשייתי',   amount: getQuantityPrice('premium', 1),      groups: 1, unitPrice: null, quantityType: 'premium' }
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

routeSelectLabel?.insertAdjacentHTML('afterend', '<label class="full-field route-groups-field" hidden><span id="routeGroupsLabel">מספר קבוצות</span><input type="number" id="gradeGroupsForm" min="1" max="8" step="1" value="1"><small id="routeGroupsHelp">הסכום מתעדכן לפי מספר הקבוצות.</small></label>');
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
  const quantityType = route?.gradeType || route?.quantityType;
  if (groupsField) groupsField.hidden = !quantityType;
  if (quantityType && groupsForm) {
    const isGradeRoute = Boolean(route.gradeType);
    groupsForm.min = isGradeRoute ? '2' : '1';
    groupsForm.max = isGradeRoute ? '8' : '6';
    groupsForm.value = route.groups;
    const label = document.getElementById('routeGroupsLabel');
    const help = document.getElementById('routeGroupsHelp');
    if (label) label.textContent = isGradeRoute ? 'מספר קבוצות במסלול השכבתי' : 'מספר קבוצות';
    if (help) help.textContent = isGradeRoute ? 'ניתן לבחור בין 2 ל־8 קבוצות. הסכום מתעדכן לפי טבלת המחירים.' : 'ניתן לבחור בין 1 ל־6 קבוצות. הסכום מתעדכן לפי טבלת המחירים.';
  }
  const groups = document.getElementById('routeGroups');
  const unit = document.getElementById('routeUnitPrice');
  const amount = document.getElementById('routeEstimatedAmount');
  if (groups) groups.value = route?.groups || 1;
  if (unit) unit.value = route?.unitPrice || '';
  if (amount) amount.value = route?.amount || '';
}
function refreshSpecialQuantity(type) {
  const route = routes[type];
  if (!route) return;
  const quantity = normalizeSpecialQuantity(specialQuantityState[type]);
  const finalAmount = getQuantityPrice(type, quantity);
  if (finalAmount === null) return;
  specialQuantityState[type] = quantity;
  route.groups = quantity;
  route.amount = finalAmount;
  route.unitPrice = null;
  const option = getOption(type);
  if (option) { option.value = `${route.label} – ${formatGroupQuantity(quantity)} – ${formatPrice(finalAmount)}`; option.textContent = option.value; }
  const priceTag = document.querySelector(`[data-special-price="${type}"]`);
  if (priceTag) priceTag.textContent = formatPrice(finalAmount);
  const cardInput = document.querySelector(`[data-special-type="${type}"]`);
  if (cardInput) cardInput.value = quantity;
  if (routeSelect?.selectedOptions?.[0]?.dataset.routeId === type) updateSummary();
}
function refreshGrade(type) {
  const id = `${type}-grade`;
  const route = routes[id];
  if (!route) return;
  const quantity = normalizeGradeQuantity(gradeState[type]);
  const finalAmount = getQuantityPrice(type, quantity);
  if (finalAmount === null) return;
  gradeState[type] = quantity;
  route.groups = quantity;
  route.amount = finalAmount;
  route.unitPrice = null;
  const option = getOption(id);
  if (option) { option.value = `${route.label} – ${quantity} קבוצות – ${formatPrice(finalAmount)}`; option.textContent = option.value; }
  const price = document.querySelector(`[data-scope-price="${id}"]`);
  if (price) price.textContent = formatPrice(finalAmount);
  const cardInput = document.querySelector(`[data-grade-type="${type}"]`);
  if (cardInput) cardInput.value = quantity;
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

document.querySelectorAll('.group-count-input[data-grade-type]').forEach((input) => input.addEventListener('change', () => {
  const type = input.dataset.gradeType;
  gradeState[type] = normalizeGradeQuantity(input.value);
  refreshGrade(type);
}));
document.querySelectorAll('.special-group-count-input[data-special-type]').forEach((input) => {
  input.addEventListener('change', () => {
    const type = input.dataset.specialType;
    specialQuantityState[type] = normalizeSpecialQuantity(input.value);
    refreshSpecialQuantity(type);
  });
});
groupsForm?.addEventListener('change', () => {
  const id = routeSelect?.selectedOptions?.[0]?.dataset.routeId || '';
  const route = routes[id];
  if (!route) return;
  if (route.gradeType) {
    gradeState[route.gradeType] = normalizeGradeQuantity(groupsForm.value);
    refreshGrade(route.gradeType);
    return;
  }
  if (route.quantityType) {
    specialQuantityState[route.quantityType] = normalizeSpecialQuantity(groupsForm.value);
    refreshSpecialQuantity(route.quantityType);
  }
});
routeSelect?.addEventListener('change', updateSummary);
refreshGrade('elementary');
refreshGrade('middle');
refreshSpecialQuantity('trailblazers');
refreshSpecialQuantity('pharma');
refreshSpecialQuantity('premium');
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
