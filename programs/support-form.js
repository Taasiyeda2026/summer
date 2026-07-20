const supportProgram = document.getElementById('supportProgram');
const supportGroups = document.getElementById('supportGroups');
const supportAmount = document.getElementById('supportAmount');

function parseProgramPrice(priceText) {
  const match = String(priceText || '').match(/[\d,]+/);
  return match ? Number(match[0].replace(/,/g, '')) : 0;
}

function formatShekels(amount) {
  return `${amount.toLocaleString('he-IL')} ₪`;
}

programs.forEach((program, index) => {
  const option = document.createElement('option');
  option.value = String(index);
  option.textContent = program.shortName;
  option.dataset.price = String(parseProgramPrice(program.price));
  supportProgram.appendChild(option);
});

function updateSupportAmount() {
  const selectedOption = supportProgram.options[supportProgram.selectedIndex];
  const unitPrice = Number(selectedOption?.dataset.price || 0);
  const groups = Math.max(0, Number(supportGroups.value || 0));

  supportAmount.textContent = unitPrice && groups
    ? formatShekels(unitPrice * groups)
    : '—';
}

supportProgram.addEventListener('change', updateSupportAmount);
supportGroups.addEventListener('input', updateSupportAmount);
updateSupportAmount();
