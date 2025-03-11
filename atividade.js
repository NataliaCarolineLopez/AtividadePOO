console.log("=== Sistema do Hospital ===");

const outputDiv = typeof document !== "undefined" ? document.getElementById("output") : null;

// Função auxiliar para exibir na tela e no console
function exibirNaTela(titulo, mensagem) {
    console.log(`${titulo}: ${mensagem}`);
    if (outputDiv) outputDiv.innerHTML += `<p><strong>${titulo}:</strong> ${mensagem}</p>`;
}

// 🔹 1. ABSTRAÇÃO - Classe genérica `Funcionario`
class Funcionario {
    #salario; // Encapsulamento: atributo privado

    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.#salario = salario; // Protegendo o salário
    }

    // Método para obter o salário (getter)
    getSalario() {
        return "Informação restrita! O valor do salário é confidencial.";
    }

    // Método comum a todos
    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }

    // Método que será sobrescrito (Polimorfismo)
    falar() {
        return `${this.nome} diz: "Estou no hospital."`;
    }
}

// 🔹 2. HERANÇA - Criando subclasses específicas
class Medico extends Funcionario {
    constructor(nome, especialidade, salario) {
        super(nome, "Médico", salario);
        this.especialidade = especialidade;
    }

    falar() {
        return `${this.nome} diz: "Sou ${this.especialidade} e vou cuidar dos pacientes!"`;
    }
}

class Enfermeiro extends Funcionario {
    constructor(nome, setor, salario) {
        super(nome, "Enfermeiro", salario);
        this.setor = setor;
    }

    falar() {
        return `${this.nome} diz: "Sou enfermeiro no setor ${this.setor}, estou aqui para ajudar!"`;
    }
}

class Recepcionista extends Funcionario {
    constructor(nome, turno, salario) {
        super(nome, "Recepcionista", salario);
        this.turno = turno;
    }

    falar() {
        return `${this.nome} diz: "Bem-vindo ao hospital! Como posso ajudar?"`;
    }
}

class Cozinheiro extends Funcionario {
    falar() {
        return `${this.nome} diz: "Estou preparando refeições saudáveis para os pacientes."`;
    }
}

class Limpeza extends Funcionario {
    falar() {
        return `${this.nome} diz: "Estou mantendo o hospital limpo e seguro!"`;
    }
}

class Estagiario extends Enfermeiro {
    constructor(nome, setor) {
        super(nome, setor, 2000); // Salário fixo para estagiários
    }

    falar() {
        return `${this.nome} diz: "Sou estagiário e estou aprendendo muito no hospital!"`;
    }
}

// 🔹 3. OBJETOS - Criando funcionários
const funcionarios = [
    new Medico("Dr. Felipe", "Cirurgião", 15000),
    new Medico("Dra. Nicolly", "Otorrino", 14000),
    new Enfermeiro("Enzo", "Emergência", 5000),
    new Recepcionista("Sarah", "Diurno, Noturno", 3000),
    new Cozinheiro("Yuri", "Cozinheiro", 4000),
    new Limpeza("Jeff", "Limpeza", 2500),
    new Estagiario("Bryan", "Enfermagem")
];

// 🔹 4. TESTANDO O SISTEMA
funcionarios.forEach(func => {
    exibirNaTela(func.cargo, func.falar());
    exibirNaTela("Trabalho", func.trabalhar());
    exibirNaTela("Salário", func.getSalario());
});