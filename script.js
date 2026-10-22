const statusButton = document.getElementById('statusButton');
const statusText = document.getElementById('status');

if (statusButton && statusText) {
  statusButton.addEventListener('click', function () {
    statusText.textContent = 'Status: deployed and linted';
  });
}
