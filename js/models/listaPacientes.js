export class listaPacientes {
  #pacientes = [];

  adicionar(paciente) {
    this.#pacientes.push(paciente);
  }

  get pacientes() {
    return [].concat(this.#pacientes); //retorna uma cópia da lista
  }
}
