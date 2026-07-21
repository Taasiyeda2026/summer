const supportForm = document.getElementById('supportInterestForm');
const supportProgram = document.getElementById('supportProgram');
const supportGroups = document.getElementById('supportGroups');
const supportUnitPrice = document.getElementById('supportUnitPrice');
const supportAmount = document.getElementById('supportAmount');
const supportSubmit = document.getElementById('supportSubmit');
const supportStatus = document.getElementById('supportFormStatus');
const supportSubject = document.getElementById('supportSubject');
const supportUnitPriceField = document.getElementById('supportUnitPriceField');
const supportAmountField = document.getElementById('supportAmountField');

const SUPABASE_URL = 'https://szinlhjuwyiyszdpsdop.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6aW5saGp1d3lpeXN6ZHBzZG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NzIyOTgsImV4cCI6MjA5MzU0ODI5OH0.yOK5rkApbYd4jbLAA_FR3F9JvBXJU_6wWCiReu0k70Q';

function parseProgramPrice(priceText) {
  const match = String(priceText || '').match(/[\d,]+/);
  return match ? Number(match[0].replace(/,/g, '')) : 0;
}

function formatShekels(amount) {
  return `${amount.toLocaleString('he-IL')} ₪`;
}

function formatProgramOption(program) {
  const programName = program.shortName.replace(/\s+לחטיבה$/, '');
  const educationLevel = program.badge === 'חטיבות' ? 'חטיבה' : program.badge;
  return `${programName} | ${educationLevel}`;
}

programs.forEach((program) => {
  const option = document.createElement('option');
  option.value = program.shortName;
  option.textContent = formatProgramOption(program);
  option.dataset.price = String(parseProgramPrice(program.price));
  supportProgram.appendChild(option);
});

function getPricing() {
  const selectedOption = supportProgram.options[supportProgram.selectedIndex];
  const unitPrice = Number(selectedOption?.dataset.price || 0);
  const groups = Math.max(1, Number(supportGroups.value || 1));
  return {
    unitPrice,
    groups,
    estimatedAmount: unitPrice ? unitPrice * groups : 0,
    programName: selectedOption?.value || ''
  };
}

function updateSupportAmount() {
  const { unitPrice, groups, estimatedAmount } = getPricing();
  supportUnitPrice.textContent = unitPrice ? formatShekels(unitPrice) : '—';
  supportAmount.textContent = estimatedAmount && groups > 0 ? formatShekels(estimatedAmount) : '—';
  supportUnitPriceField.value = unitPrice ? formatShekels(unitPrice) : 'לא נבחר';
  supportAmountField.value = estimatedAmount ? formatShekels(estimatedAmount) : 'לא חושב';
}

function setFormStatus(message, type = '') {
  supportStatus.textContent = message;
  supportStatus.className = `support-form-status${type ? ` is-${type}` : ''}`;
}

async function saveInquiry() {
  const { unitPrice, groups, estimatedAmount, programName } = getPricing();
  const payload = {
    full_name: document.getElementById('supportName').value.trim(),
    role: document.getElementById('supportRole').value.trim() || null,
    organization: document.getElementById('supportCompany').value.trim(),
    phone: document.getElementById('supportPhone').value.trim(),
    email: document.getElementById('supportEmail').value.trim(),
    program: programName,
    locality: document.getElementById('supportLocality').value.trim() || null,
    groups,
    unit_price: unitPrice || null,
    estimated_amount: estimatedAmount || null,
    source: 'programs_site',
    status: 'new',
    page_url: window.location.href,
    user_agent: navigator.userAgent
  };

  const response = await fetch(`${SUPABASE_URL}/rest/v1/website_inquiries`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${response.status}`);
  }
}

supportProgram.addEventListener('change', updateSupportAmount);
supportGroups.addEventListener('input', updateSupportAmount);
supportGroups.addEventListener('blur', () => {
  if (!supportGroups.value || Number(supportGroups.value) < 1) {
    supportGroups.value = '1';
    updateSupportAmount();
  }
});

supportForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!supportForm.reportValidity()) return;
  if (document.getElementById('supportWebsite').value) return;

  const { programName } = getPricing();
  supportSubject.value = `פנייה חדשה מאתר תוכניות תעשיידע – ${programName}`;
  supportSubmit.disabled = true;
  supportSubmit.setAttribute('aria-busy', 'true');
  setFormStatus('שולחים את הפנייה…');

  try {
    await saveInquiry();
  } catch (error) {
    console.error(error);
    // Email delivery remains the priority, even if database storage is temporarily unavailable.
  }

  HTMLFormElement.prototype.submit.call(supportForm);
});

const params = new URLSearchParams(window.location.search);
if (params.get('submitted') === '1') {
  setFormStatus('הפנייה נשלחה בהצלחה. צוות תעשיידע יחזור אליכם בהקדם.', 'success');
  params.delete('submitted');
  const cleanQuery = params.toString();
  const cleanUrl = `${window.location.pathname}${cleanQuery ? `?${cleanQuery}` : ''}${window.location.hash || '#contact'}`;
  window.history.replaceState({}, document.title, cleanUrl);
}

updateSupportAmount();
