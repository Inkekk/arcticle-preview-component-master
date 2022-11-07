const botao = document.getElementById("botao-share");
const container = document.getElementById("perfilShare");
const containerShare = document.querySelector(".share-container");
const containerPerfil = document.querySelector(".perfil");

botao.addEventListener("click", () => {
  container.classList.toggle("active");
  containerShare.classList.toggle("hidden");
  // containerPerfil.classList.toggle("hidden");
});
