// script.js
function checkMandatory1023117000000453812() {
  const requiredFields = ['Company', 'Last Name'];
  const labels = ['Company', 'Last Name'];
  const form = document.forms['WebToLeads1023117000000453812'];

  for (let i = 0; i < requiredFields.length; i++) {
    const field = form[requiredFields[i]];
    if (field && field.value.trim() === '') {
      alert(`${labels[i]} cannot be empty.`);
      field.focus();
      return false;
    }
  }

  document.querySelector('.grand-submit').disabled = true;
  return true;
}
