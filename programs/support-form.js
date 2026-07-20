const supportProgram = document.getElementById('supportProgram');
const supportGroups = document.getElementById('supportGroups');
const supportUnitPrice = document.getElementById('supportUnitPrice');
const supportAmount = document.getElementById('supportAmount');

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

programs.forEach((program, index) => {
  const option = document.createElement('option');
  option.value = String(index);
  option.textContent = formatProgramOption(program);
  option.dataset.price = String(parseProgramPrice(program.price));
  supportProgram.appendChild(option);
});

function updateSupportAmount() {
  const selectedOption = supportProgram.options[supportProgram.selectedIndex];
  const unitPrice = Number(selectedOption?.dataset.price || 0);
  const groups = Number(supportGroups.value || 0);

  supportUnitPrice.textContent = unitPrice ? formatShekels(unitPrice) : '—';
  supportAmount.textContent = unitPrice && groups > 0
    ? formatShekels(unitPrice * groups)
    : '—';
}

supportProgram.addEventListener('change', updateSupportAmount);
supportGroups.addEventListener('input', updateSupportAmount);
supportGroups.addEventListener('blur', () => {
  if (!supportGroups.value || Number(supportGroups.value) < 1) {
    supportGroups.value = '1';
    updateSupportAmount();
  }
});

updateSupportAmount();