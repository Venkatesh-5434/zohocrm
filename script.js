// --- Form Validation Function ---
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

// --- Zoho SalesIQ Live Chat Widget ---
var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  widgetcode: "siqdce91e2b4f7078b728f3ae91e865318e1605798d575c17ef25d1164340099823",
  values: {},
  ready: function () {}
};

(function () {
  var d = document;
  var s = d.createElement("script");
  s.type = "text/javascript";
  s.id = "zsiqscript";
  s.defer = true;
  s.src = "https://salesiq.zoho.in/widget";
  var t = d.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(s, t);
})();
