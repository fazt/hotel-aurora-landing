const DEMO_USER = {
  email: 'demo@hotelaurora.com',
  password: 'hotel123',
  name: 'Huésped Demo',
};

const form = document.querySelector('#login-form');
const message = document.querySelector('#login-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim().toLowerCase();
  const password = document.querySelector('#password').value;

  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    localStorage.setItem('hotelAuroraSession', JSON.stringify({
      email: DEMO_USER.email,
      name: DEMO_USER.name,
      loggedAt: new Date().toISOString(),
    }));
    message.textContent = `Bienvenido, ${DEMO_USER.name}. Login correcto.`;
    message.className = 'login-message success';
    form.dataset.state = 'success';
    return;
  }

  localStorage.removeItem('hotelAuroraSession');
  message.textContent = 'Email o contraseña incorrectos.';
  message.className = 'login-message error';
  form.dataset.state = 'error';
});
