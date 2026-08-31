['layout-fixes.css?v=27','narrow-shell.css?v=27','compact-controls.css?v=30','partnership-cards-compact.css?v=27','micro-ui-fixes.css?v=27'].forEach((href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `./${href}`;
  document.head.appendChild(link);
});

const uiStyle = document.createElement('style');
uiStyle.textContent = `
.about-more-intro{margin-top:14px!important;color:#566c7c!important;font-size:.82rem!important;line-height:1.65!important}
.scope-options{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:12px 0 14px}.scope-option{display:flex;flex-direction:column;min-width:0;padding:12px;border:1px solid #dfe7ec;border-radius:12px;background:#f8fafb}.scope-option h4{margin:0;color:var(--navy);font-size:.86rem;line-height:1.3}.scope-option p{margin:6px 0 0;color:#596d7c;font-size:.71rem;line-height:1.45}.scope-price{display:inline-flex;align-items:center;width:fit-content;margin:8px 0 0;padding:4px 8px;border:1px solid #d8e5ea;border-radius:999px;background:#f2f7f9;color:#176f8c;font-size:.69rem;font-weight:800;line-height:1.1;white-space:nowrap}.scope-option .select-route{margin-top:auto!important}.group-control{display:flex;align-items:center;gap:7px;margin-top:8px}.group-control label{color:#596d7c;font-size:.68rem;font-weight:700}.group-count-input,.route-groups-field input{width:62px!important;min-width:62px!important;height:30px!important;min-height:30px!important;padding:3px 7px!important;border:1px solid #ccdbe2!important;border-radius:8px!important;background:#fff!important;color:#173752!important;font-size:.76rem!important;font-weight:700!important;text-align:center}.programs-subheading{margin:2px 0 8px;color:var(--navy);font-size:.86rem;line-height:1.3}.route-groups-field[hidden]{display:none!important}.route-groups-field small{display:block;margin-top:4px;color:#71828e;font-size:.65rem;line-height:1.35}.scope-grade-row{display:flex!important;align-items:center!important;justify-content:center!important;gap:9px!important;width:100%!important;margin:9px 0 12px!important;direction:rtl!important}.scope-grade-row .group-control{margin:0!important}.scope-grade-row .group-count-input{width:48px!important;min-width:48px!important;max-width:48px!important;height:28px!important;min-height:28px!important;max-height:28px!important;margin:0!important;padding:2px 4px!important}.scope-grade-row .scope-price{flex:0 0 auto!important;margin:0!important}
.special-route-actions{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:10px!important;width:100%!important;margin-top:10px!important;padding:9px 11px!important;border:1px solid #d8e5e9!important;border-radius:11px!important;background:linear-gradient(180deg,#f9fbfc 0%,#eef5f7 100%)!important;direction:rtl!important}.special-route-actions .select-route{flex:0 0 auto!important;margin:0!important}.special-route-actions .special-quantity-control{display:flex!important;flex:0 0 auto!important;align-items:center!important;justify-content:flex-start!important;width:auto!important;margin:0!important;padding:0!important}.special-route-actions .special-quantity-control label{margin:0!important;white-space:nowrap!important}.single-program-copy strong{color:#173752}.contact-section .section-heading{margin-bottom:14px!important}.contact-section .section-heading h2{margin-bottom:7px!important}
.about-section .facts-grid{margin-top:36px!important}.about-section .fact{min-height:112px!important;padding:17px 24px!important}.about-section .fact::before{margin-bottom:12px!important}.about-section .fact span{margin-top:6px!important;line-height:1.45!important}
@media(min-width:900px){.partnerships-section .partnership-grid{grid-template-columns:repeat(5,minmax(0,1fr))!important}}
@media(max-width:760px){.scope-options{grid-template-columns:1fr}.special-route-actions{flex-wrap:wrap!important}.about-section .fact{min-height:0!important}}
`;
document.head.appendChild(uiStyle);

const partnershipsTitle = document.getElementById('partnershipsTitle');
const partnershipsEyebrow = document.querySelector('.partnerships-heading .eyebrow');
const partnershipsDescription = document.querySelector('.partnerships-heading > p:last-child');
if (partnershipsEyebrow) partnershipsEyebrow.remove();
if (partnershipsTitle) partnershipsTitle.textContent = 'השקעה בדור העתיד';
if (partnershipsDescription) partnershipsDescription.textContent = 'בלחיצה על כל כרטיס ייפתח מידע מלא על מסלול התרומה.';

const formatPrice = (amount) => `${new Intl.NumberFormat('he-IL').format(amount)} ₪`;

const quantityPrices = Object.freeze({
  elementary:   Object.freeze({ 1: 9500, 2: 18500, 3: 27450, 4: 36000, 5: 45000, 6: 54000, 7: 63000, 8: 72000 }),
  middle:       Object.freeze({ 1: 10000, 2: 19500, 3: 28500, 4: 37000, 5: 45250, 6: 54000, 7: 63000, 8: 72000 }),
  trailblazers: Object.freeze({ 1: 13000, 2: 25200, 3: 36000, 4: 46000, 5: 55000, 6: 66000 }),
  pharma:       Object.freeze({ 1: 13000, 2: 25200, 3: 36000, 4: 46000, 5: 55000, 6: 66000 }),
  premium:      Object.freeze({ 1: 15000, 2: 29000, 3: 42600, 4: 56000, 5: 66250, 6: 79500 })
});

function getQuantityPrice(type, quantity) {
  return quantityPrices[type]?.[quantity] ?? null;
}

function normalizeGradeQuantity(value) {
  const quantity = parseInt(value, 10);
  if (!Number.isFinite(quantity)) return 4;
  return Math.min(8, Math.max(2, quantity));
}

function normalizeSpecialQuantity(value) {
  const quantity = parseInt(value, 10);
  if (!Number.isFinite(quantity)) return 1;
  return Math.min(6, Math.max(1, quantity));
}

function formatGroupQuantity(quantity) {
  return quantity === 1 ? 'קבוצה אחת' : `${quantity} קבוצות`;
}

const gradeState = { elementary: 4, middle: 4 };
const specialQuantityState = { trailblazers: 1, pharma: 1, premium: 1 };

const routes = {
  'elementary-single': { label: 'מסלול יסודי – קבוצה אחת', amount: getQuantityPrice('elementary', 1), groups: 1, unitPrice: 9500 },
  'elementary-grade':  { label: 'מסלול יסודי – מספר קבוצות', amount: getQuantityPrice('elementary', 4), groups: 4, unitPrice: null, gradeType: 'elementary' },
  'elementary-annual': { label: 'מסלול יסודי – שתי תוכניות במהלך השנה', amount: getQuantityPrice('elementary', 2), groups: 2, unitPrice: null },
  'middle-single':     { label: 'מסלול חטיבה ותיכון – קבוצה אחת', amount: getQuantityPrice('middle', 1), groups: 1, unitPrice: 10000 },
  'middle-grade':      { label: 'מסלול חטיבה ותיכון – מספר קבוצות', amount: getQuantityPrice('middle', 4), groups: 4, unitPrice: null, gradeType: 'middle' },
  'middle-annual':     { label: 'מסלול חטיבה ותיכון – שתי תוכניות במהלך השנה', amount: getQuantityPrice('middle', 2), groups: 2, unitPrice: null },
  trailblazers: { label: 'פורצות דרך', amount: getQuantityPrice('trailblazers', 1), groups: 1, unitPrice: null, quantityType: 'trailblazers' },
  pharma:       { label: 'רוקחים עולם', amount: getQuantityPrice('pharma', 1), groups: 1, unitPrice: null, quantityType: 'pharma' },
  premium:      { label: 'פרימיום תעשייתי', amount: getQuantityPrice('premium', 1), groups: 1, unitPrice: null, quantityType: 'premium' }
};

const routeSelect = document.getElementById('partnershipRoute');
const groupsField = document.querySelector('.route-groups-field');
const groupsForm = document.getElementById('gradeGroupsForm');
const selectedRouteName = document.getElementById('selectedRouteName');
const selectedRouteSummary = document.getElementById('selectedRouteSummary');
const contactSection = document.getElementById('contact');

function routeOptionText(route) {
  const quantityType = route.gradeType || route.quantityType;
  if (quantityType) return `${route.label} – ${formatGroupQuantity(route.groups)} – ${formatPrice(route.amount)}`;
  return `${route.label} – ${formatPrice(route.amount)}`;
}

function rebuildRouteOptions() {
  if (!routeSelect) return;
  const selectedId = routeSelect.selectedOptions?.[0]?.dataset.routeId || '';
  routeSelect.innerHTML = '<option value="">בחירת מסלול תרומה</option>';
  Object.entries(routes).forEach(([id, route]) => {
    const option = document.createElement('option');
    option.dataset.routeId = id;
    option.value = routeOptionText(route);
    option.textContent = option.value;
    routeSelect.appendChild(option);
  });
  if (selectedId) {
    const option = [...routeSelect.options].find((item) => item.dataset.routeId === selectedId);
    if (option) routeSelect.value = option.value;
  }
}

function getOption(id) {
  return [...(routeSelect?.options || [])].find((option) => option.dataset.routeId === id);
}

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
    groupsForm.value = String(route.groups);
    const label = document.getElementById('routeGroupsLabel');
    const help = document.getElementById('routeGroupsHelp');
    if (label) label.textContent = 'מספר קבוצות';
    if (help) help.textContent = isGradeRoute ? 'ניתן לבחור בין 2 ל־8 קבוצות. הסכום מתעדכן בהתאם.' : 'ניתן לבחור בין 1 ל־6 קבוצות. הסכום מתעדכן בהתאם.';
  }

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
  if (!route) return;
  const quantity = normalizeGradeQuantity(gradeState[type]);
  const amount = getQuantityPrice(type, quantity);
  if (amount === null) return;

  gradeState[type] = quantity;
  route.groups = quantity;
  route.amount = amount;

  const option = getOption(id);
  if (option) {
    option.value = routeOptionText(route);
    option.textContent = option.value;
  }

  const price = document.querySelector(`[data-scope-price="${id}"]`);
  if (price) price.textContent = formatPrice(amount);

  const cardInput = document.querySelector(`[data-grade-type="${type}"]`);
  if (cardInput) cardInput.value = String(quantity);

  if (routeSelect?.selectedOptions?.[0]?.dataset.routeId === id) {
    routeSelect.value = option?.value || routeSelect.value;
    updateSummary();
  }
}

function refreshSpecialQuantity(type) {
  const route = routes[type];
  if (!route) return;
  const quantity = normalizeSpecialQuantity(specialQuantityState[type]);
  const amount = getQuantityPrice(type, quantity);
  if (amount === null) return;

  specialQuantityState[type] = quantity;
  route.groups = quantity;
  route.amount = amount;

  const option = getOption(type);
  if (option) {
    option.value = routeOptionText(route);
    option.textContent = option.value;
  }

  const priceTag = document.querySelector(`[data-special-price="${type}"]`);
  if (priceTag) priceTag.textContent = formatPrice(amount);

  const cardInput = document.querySelector(`[data-special-type="${type}"]`);
  if (cardInput) cardInput.value = String(quantity);

  if (routeSelect?.selectedOptions?.[0]?.dataset.routeId === type) {
    routeSelect.value = option?.value || routeSelect.value;
    updateSummary();
  }
}

function selectRoute(id) {
  const option = getOption(id);
  if (!routeSelect || !option) return;
  routeSelect.value = option.value;
  routeSelect.dispatchEvent(new Event('change', { bubbles: true }));
  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => document.getElementById('fullName')?.focus({ preventScroll: true }), 500);
}

rebuildRouteOptions();
refreshGrade('elementary');
refreshGrade('middle');
refreshSpecialQuantity('trailblazers');
refreshSpecialQuantity('pharma');
refreshSpecialQuantity('premium');
updateSummary();

document.querySelectorAll('.group-count-input[data-grade-type]').forEach((input) => {
  input.addEventListener('change', () => {
    const type = input.dataset.gradeType;
    gradeState[type] = normalizeGradeQuantity(input.value);
    refreshGrade(type);
  });
});

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
document.querySelectorAll('[data-route-id]').forEach((button) => button.addEventListener('click', () => selectRoute(button.dataset.routeId)));

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('mainNav');

function closeMobileNav() {
  mainNav?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'פתיחת התפריט');
  navToggle?.querySelector('use')?.setAttribute('href', '#icon-menu');
  document.body.classList.remove('nav-open');
}

navToggle?.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = mainNav?.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'סגירת התפריט' : 'פתיחת התפריט');
  navToggle.querySelector('use')?.setAttribute('href', isOpen ? '#icon-close' : '#icon-menu');
  document.body.classList.toggle('nav-open', Boolean(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileNav));

document.addEventListener('click', (event) => {
  if (mainNav?.classList.contains('open') && !mainNav.contains(event.target) && !navToggle?.contains(event.target)) closeMobileNav();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMobileNav();
});

const routeCards = [...document.querySelectorAll('.partnership-card')];
const partnershipGrid = document.querySelector('.partnership-grid');
const detailsHost = document.createElement('div');
let activeCard = null;

if (partnershipGrid) {
  detailsHost.className = 'route-details-host';
  detailsHost.hidden = true;
  partnershipGrid.insertAdjacentElement('afterend', detailsHost);
}

const getDetails = (card) => document.getElementById(card?.querySelector('.card-toggle')?.getAttribute('aria-controls'));

function placeDetails(card) {
  const details = getDetails(card);
  if (!details) return;
  if (matchMedia('(min-width:761px)').matches) {
    detailsHost.appendChild(details);
    detailsHost.hidden = false;
  } else {
    card.appendChild(details);
    detailsHost.hidden = true;
  }
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
  routeCards.forEach((other) => {
    if (other !== card) closeCard(other);
  });
  const details = getDetails(card);
  if (!details) return;
  activeCard = card;
  placeDetails(card);
  card.querySelector('.card-toggle')?.setAttribute('aria-expanded', 'true');
  details.hidden = false;
  card.classList.add('is-open');
}

routeCards.forEach((card) => {
  card.querySelector('.card-toggle')?.addEventListener('click', () => {
    card.classList.contains('is-open') ? closeCard(card) : openCard(card);
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeMobileNav();
  if (activeCard) placeDetails(activeCard);
});

document.querySelector('.footer-top-link')?.addEventListener('click', (event) => {
  event.preventDefault();
  scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#top');
});
