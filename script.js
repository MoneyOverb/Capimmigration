function scrollToForm() {
  document.getElementById('formulaire').scrollIntoView({ behavior: 'smooth' });
}

function toggleFees() {
  const el = document.getElementById('fees-info');
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

function toggleCookies() {
  const el = document.getElementById('cookies-info');
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

// Page de succès après envoi du formulaire
if (window.location.search.includes('success')) {
  document.body.innerHTML = `
    <div style="text-align:center;padding:120px 20px;font-family:Poppins,sans-serif;background:#000;color:#fff;">
      <h1 style="color:#d4af37;font-size:3rem;">Formulaire envoyé !</h1>
      <p style="font-size:1.3rem;margin:20px 0;">Un agent dédié vous contactera sous 24h pour la suite.</p>
      <a href="/" style="color:#d4af37;font-size:1.1rem;">Retour à l'accueil</a>
    </div>
  `;
}
