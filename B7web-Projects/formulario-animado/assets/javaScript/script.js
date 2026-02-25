const card = document.querySelector(".card");
const loginButton = document.querySelector(".loginButton");
const cadastroButton = document.querySelector(".cadastroButton");


/* Ativa animação ao clicar  */
loginButton.addEventListener("click", () => {
  card.classList.remove("cadastroActive");
  card.classList.add("loginActive");
});

cadastroButton.addEventListener("click", () => {
  card.classList.remove("loginActive");
  card.classList.add("cadastroActive");
});



const cadastrar = document.querySelector(".cadastrar");
/* Abre o alert na janela com a mensagem */
cadastrar.addEventListener("click", () => {
  window.alert("Cadastro realizado com sussesso");
});
