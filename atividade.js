
// Funcionários do hospital com método falar
class Funcionario {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`${this.nome} diz algo...`);
    }
}

class Medico extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Vou cuidar do paciente!"`);
    }
}

class Enfermeiro extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Vou aplicar a medicação!"`);
    }
}

class Recepcionista extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Bem-vindo ao hospital, como posso ajudar?"`);
    }
}

class Fisioterapeuta extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Vamos realizar os exercícios de reabilitação!"`);
    }
}

class Psicologo extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Vamos trabalhar a sua saúde mental!"`);
    }
}

class Farmaceutico extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Aqui está o medicamento correto para o seu tratamento."`);
    }
}

class AuxiliarLimpeza extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Vou limpar o ambiente para garantir a segurança!"`);
    }
}

// Criando os objetos para cada funcionário
const medico = new Medico('Dr. João');
const enfermeiro = new Enfermeiro('Enfermeira Ana');
const recepcionista = new Recepcionista('Carla');
const fisioterapeuta = new Fisioterapeuta('Lucas');
const psicologo = new Psicologo('Dra. Maria');
const farmaceutico = new Farmaceutico('Pedro');
const auxiliar = new AuxiliarLimpeza('José');

// Professores e alunos com herança e encapsulamento
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`${this.nome} diz: "Olá!"`);
    }
}

class Professor extends Pessoa {
    constructor(nome, salario) {
        super(nome);
        this._salario = salario;  // Dado privado (encapsulado)
    }
    falar() {
        console.log(`${this.nome} diz: "Vou ensinar algo importante!"`);
    }
    get salario() {
        return this._salario;
    }
}

class Aluno extends Pessoa {
    constructor(nome, nota) {
        super(nome);
        this._nota = nota;  // Dado privado (encapsulado)
    }
    falar() {
        console.log(`${this.nome} diz: "Estou aprendendo muito!"`);
    }
    get nota() {
        return this._nota;
    }
}

// Criando um professor e um aluno
const professor = new Professor('Professor Paulo', 3500);
const aluno = new Aluno('João', 8.5);

// Exibindo dados
document.getElementById("salarioProfessor").textContent = professor.salario;
document.getElementById("notaAluno").textContent = aluno.nota;

// Testando métodos de fala
medico.falar();
enfermeiro.falar();
recepcionista.falar();
fisioterapeuta.falar();
psicologo.falar();
farmaceutico.falar();
auxiliar.falar();

professor.falar();
aluno.falar();

