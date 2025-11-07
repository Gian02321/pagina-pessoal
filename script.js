function abrirInfo(jogo) {
  alert("Você clicou em: " + jogo + " 😎");
}

// Animação ao rolar
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Iniciar animação invisível
document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});
