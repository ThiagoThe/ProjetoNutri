import { Paciente } from "../models/paciente.js";

const tituloPrincipal = document.getElementById("titulo-principal");
tituloPrincipal.textContent = "Aparecida Nutricionista";
let paciente = new Paciente("Maria", "Souza", 98, 1.85);
console.log(paciente.nome);
console.log(paciente.sobrenome);
console.log(paciente.peso);
console.log(paciente.altura);
paciente.peso = 58;
console.log(paciente.peso);
