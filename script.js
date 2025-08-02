AOS.init();

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (name.length < 3) {
    alert('O nome deve ter pelo menos 3 caracteres.');
    e.preventDefault();
    return;
  }

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Por favor insere um email válido.');
    e.preventDefault();
    return;
  }

  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 9 || phoneDigits.length > 15) {
    alert('O número de telefone deve ter entre 9 e 15 dígitos.');
    e.preventDefault();
    return;
  }

  if (message.length < 10) {
    alert('A mensagem deve ter pelo menos 10 caracteres.');
    e.preventDefault();
    return;
  }
});