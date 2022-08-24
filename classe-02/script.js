const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("change", function (event) {
    const inputModificado = event.target;

    if (inputModificado.dataset.resposta === inputModificado.value) {
      input.classList.add("acerto")
    }
  })
});