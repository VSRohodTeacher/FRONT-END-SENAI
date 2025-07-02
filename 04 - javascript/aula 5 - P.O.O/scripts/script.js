// ITAU
// var clienteNome1 = "Esdras";
// var clienteDataNasci1 = "17/11/2004";
// var clienteNome2 = "Vanessa";
// var clienteDataNasci2 = "01/06/1995";

// function emprestimo(valor){}
// var cliente1 = ['Esdras','17/11/2004',emprestimo(400)];
// cliente1[10] = "(61)9999-9999";

class Cliente {
    nome;
    dataDeNascimento;
    cpf;
    numeroTel;
    // score;
    pontos = 0;
    saldo = 0;
    depositar(valor) {
        if (valor <= 0) {
            return "Valor inválido!";
        } else {
            this.saldo += valor;
            return "Deposito efetuado com sucesso!";
        }
    }
    // metodo arrow function
    // sacar = () =>{

    // }
}

var cliente1 = new Cliente();
cliente1.nome = "Victor";
cliente1.dataDeNascimento = "11/02/2003";
cliente1.numeroTel = "99999999";
cliente1.cpf = "88888888";
cliente1.depositar(200);

class ClienteUpdate {
    constructor(nomePa, dataPa, numeroPa, cpfPa) {
        this.nomePr = nomePa;
        this.dataPr = dataPa;
        this.numeroPr = numeroPa;
        this.cpfPr = cpfPa;
        this.pontos = 0;
        this.saldo = 0;
        this.depositar = function (valor) {
            if (valor <= 0) {
                return "Valor inválido!";
            } else {
                this.saldo += valor;
                return "Deposito efetuado com sucesso!";
            }
        }
    }
}

var cliente2 = new ClienteUpdate("Alessandra", "02/02/2000", "7777777", "666666");
cliente2.nomePr = "Bruna";