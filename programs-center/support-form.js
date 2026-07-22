const partnershipForm = document.getElementById('partnershipForm');
const formSubmit = document.getElementById('formSubmit');
const formStatus = document.getElementById('formStatus');
const formSubject = document.getElementById('formSubject');
const partnershipRoute = document.getElementById('partnershipRoute');

/* Route 03 includes a professional lecture delivered by the supporting company. */
const trailblazersCard = document.querySelector('.partnership-card[data-card="trailblazers"]');
if (trailblazersCard) {
  const routeDescription = trailblazersCard.querySelector('.route-description');
  if (routeDescription) {
    routeDescription.textContent = 'תוכנית יזמות טכנולוגית לנערות, הכוללת הרצאה מקצועית מטעם החברה התורמת.';
  }

  const lectureParagraph = [...trailblazersCard.querySelectorAll('.single-program-copy > p')]
    .find((paragraph) => paragraph.textContent.includes('הרצאת'));
  if (lectureParagraph) {
    lectureParagraph.textContent = 'המסלול כולל הרצאה מקצועית מטעם החברה התורמת, בהשתתפות נציגה או נציג מהחברה.';
  }
}

const SUPABASE_URL = 'https://szinlhjuwyiyszdpsdop.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6aW5saGp1d3lpeXN6ZHBzZG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NzIyOTgsImV4cCI6MjA5MzU0ODI5OH0.yOK5rkApbYd4jbLAA_FR3F9JvBXJU_6wWCiReu0k70Q';

function setFormStatus(message, type = '') {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = `form-status${type ? ` is-${type}` : ''}`;
}

function readNumberField(id) {
  const value = document.getElementById(id)?.value || '';
  if (!value) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

async function saveInquiry() {
  const groups = readNumberField('routeGroups') || 1;
  const unitPrice = readNumberField('routeUnitPrice');
  const estimatedAmount = readNumberField('routeEstimatedAmount');

  const payload = {
    full_name: document.getElementById('fullName').value.trim(),
    role: document.getElementById('role').value.trim() || null,
    organization: document.getElementById('company').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    email: document.getElementById('email').value.trim(),
    program: partnershipRoute.value,
    message: document.getElementById('message').value.trim() || null,
    locality: null,
    groups,
    unit_price: unitPrice,
    estimated_amount: estimatedAmount,
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

if (partnershipForm) {
  partnershipForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!partnershipForm.reportValidity()) return;
    if (document.getElementById('websiteField').value) return;

    const routeName = partnershipRoute.value || 'ללא בחירת מסלול';
    formSubject.value = `פנייה חדשה מדף שותפות עם התעשייה – ${routeName}`;
    formSubmit.disabled = true;
    formSubmit.setAttribute('aria-busy', 'true');
    setFormStatus('הפנייה נשלחת…');

    try {
      await saveInquiry();
    } catch (error) {
      console.error(error);
      // שליחת המייל נשארת פעילה גם אם השמירה במסד הנתונים אינה זמינה זמנית.
    }

    HTMLFormElement.prototype.submit.call(partnershipForm);
  });
}

const params = new URLSearchParams(window.location.search);
if (params.get('submitted') === '1') {
  setFormStatus('הפנייה נשלחה בהצלחה. צוות תעשיידע יחזור אליכם בהקדם.', 'success');
  params.delete('submitted');
  const cleanQuery = params.toString();
  const cleanUrl = `${window.location.pathname}${cleanQuery ? `?${cleanQuery}` : ''}${window.location.hash || '#contact'}`;
  window.history.replaceState({}, document.title, cleanUrl);
}
