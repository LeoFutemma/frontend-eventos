const input = document.querySelector("input");
const frutas = document.querySelectorAll("li");

function filtrarFruta(event) {
  if (event.code === "Enter" || event.code === "NumpadEnter") {

    frutas.forEach(fruta => {
      fruta.classList.remove("hidden");

      if (input.value && fruta.textContent !== input.value) {
        fruta.classList.add("hidden");
      }
    });
    input.value = "";
  }
}
