import { Paciente } from "../models/paciente.js";
import { listaPacientes } from "../models/listaPacientes.js";

export class PacienteController {
  #campoNome;
  #campoSobrenome;
  #campoPeso;
  #campoAltura;
  #listaPacientes = new listaPacientes();

  constructor() {
    this.#campoAltura = document.getElementById("altura");
    this.#campoNome = document.getElementById("nome");
    this.#campoSobrenome = document.getElementById("sobrenome");
    this.#campoPeso = document.getElementById("peso");
  }

  criarPaciente() {
    let nome = this.#campoNome.value;
    let sobrenome = this.#campoSobrenome.value;
    let peso = this.#campoPeso.value;
    let altura = this.#campoAltura.value;
    let paciente = new Paciente(nome, sobrenome, peso, altura);
    this.#listaPacientes.adicionar(paciente);
    console.log(this.#listaPacientes.pacientes);
  }
}
