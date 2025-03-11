class Funcionario {
  constructor(nome, idade, cpf, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.cargo = cargo;
  }
}

const cargos = [
  "Médico",
  "Enfermeiro",
  "Recepcionista",
  "Cirurgião",
  "Socorrista",
  "Funcionário da Limpeza",
  "Diretor",
];
const nomes = [
  "Eduardo",
  "Beatriz",
  "Lucas",
  "Fernanda",
  "Gabriel",
  "Sofia",
  "Ricardo",
];
const idades = [50, 42, 31, 55, 37, 45, 60];
const cpfs = [
  "123.456.789-00",
  "987.654.321-11",
  "456.789.123-22",
  "321.654.987-33",
  "159.357.456-44",
  "753.951.852-55",
  "852.456.159-66",
];

const funcionarios = nomes.map(
  (nome, index) =>
    new Funcionario(nome, idades[index], cpfs[index], cargos[index])
);

const tableBody = document.querySelector("#funcionariosTable tbody");

funcionarios.forEach((func) => {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${func.cargo}</td>
      <td>${func.nome}</td>
      <td>${func.idade}</td>
      <td>${func.cpf}</td>
    `;
  tableBody.appendChild(row);
});
