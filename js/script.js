const readMoreBtn = document.getElementById('read-more-btn');
const miniWindow = document.getElementById('mini-window');
const closeBtn = document.getElementById('close-btn');

readMoreBtn.addEventListener('click', () => {
  miniWindow.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  miniWindow.classList.remove('active');
});












const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const message = messageInput.value;

  // Send email and message data to server using fetch API
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, message })
  })
  .then(response => {
    if (response.ok) {
      alert('Email sent successfully!');
      emailInput.value = '';
      messageInput.value = '';
    } else {
      alert('Failed to send email.');
    }
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while sending the email.');
  });
});
