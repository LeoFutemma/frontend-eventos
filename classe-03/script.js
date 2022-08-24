const botaoInscrever = document.querySelector(".btn");
const janela = document.querySelector(".modal")
const botoesModal = document.querySelectorAll(".modal button");
const botaoSim = document.querySelector(".confirmar");


botaoInscrever.addEventListener("click", inscrever);

botoesModal.forEach(botao => {
  botao.addEventListener("click", function () {
    janela.classList.add("escondido");
  })
})

botaoSim.addEventListener("click", function () {
  botaoInscrever.textContent = "INSCREVER-SE"
  botaoInscrever.classList.remove("inscrito");

  botaoInscrever.addEventListener("click", inscrever);
  botaoInscrever.removeEventListener("click", adicionaModal);
});

function inscrever(event) {
  const botaoClicado = event.target;
  botaoClicado.textContent = "INSCRITO";
  botaoClicado.classList.add("inscrito");

  botaoClicado.addEventListener("click", adicionaModal)
}

function adicionaModal() {
  janela.classList.remove("escondido");
}
