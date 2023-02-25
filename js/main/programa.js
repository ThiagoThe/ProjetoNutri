import { PacienteController } from "../controllers/pacienteController.js";

const tituloPrincipal = document.getElementById("titulo-principal");
tituloPrincipal.textContent = "Aparecida Nutricionista";
const formulario = document.querySelector(".form");
const controller = new PacienteController();
formulario.addEventListener("submit", () => {
  event.preventDefault();
  controller.criarPaciente();
});
