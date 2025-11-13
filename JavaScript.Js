document.addEventListener('DOMContentLoaded', () => {
  const btnTop = document.getElementById('btnTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTop.style.display = 'block';
    } else {
      btnTop.style.display = 'none';
    }
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      msg.textContent = "✅ Mensaje enviado correctamente.";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.textContent = "❌ Hubo un error, intentá de nuevo.";
      msg.style.color = "red";
    }
  } catch (err) {
    msg.textContent = "⚠️ Error de conexión.";
    msg.style.color = "orange";
  }
});