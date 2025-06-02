document.querySelectorAll('.radio-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.radio-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    btn.querySelector('input').checked = true;
  });
});

document.getElementById('clearAll').addEventListener('click', () => {
  document.getElementById('amount').value = '';
  document.getElementById('term').value = '25';
  document.getElementById('rate').value = '5.25';
  document.querySelectorAll('input[name="type"]')[0].checked = true;
  document.querySelectorAll('.radio-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.radio-btn')[0].classList.add('active');
  document.getElementById('result-text').textContent =
    'Complete the form and click “calculate repayments” to see what your monthly repayments would be.';
});

document.getElementById('calculate').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  const years = parseFloat(document.getElementById('term').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const isRepayment = document.querySelector('input[name="type"]:checked').value === 'repayment';

  if (!amount || !years || !rate) {
    document.getElementById('result-text').textContent = 'Please fill in all fields correctly.';
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const payments = years * 12;
  let monthly;

  if (isRepayment) {
    monthly = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
  } else {
    monthly = amount * monthlyRate;
  }

  document.getElementById('result-text').textContent = `Your monthly payment is £${monthly.toFixed(2)}`;
});
