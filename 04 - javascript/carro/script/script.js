class Carro {
    constructor(marca,modelo,ano,cor,velocidadeMax){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
        this.acelerar = function(valor){
            this.velocidadeAtual += valor
        }
    }
}

var carro = undefined;
function criarCarro(){
    let marcaInput = document.querySelector("#marca").value;
    let modeloInput = document.querySelector("#modelo").value;
    let anoInput = document.querySelector("#ano").value;
    let corInput = document.querySelector("#cor").value;
    let velocidadeMaxInput = Number(document.querySelector("#velocidadeMax").value);

    carro = new Carro(marcaInput,modeloInput,anoInput,corInput,velocidadeMaxInput);

    listarCarro();
}

function listarCarro(){
     document.querySelector("#carro").innerHTML = `
        <div id="corCarro" style="background-color: ${carro.cor};"> </div>
        <p> ${carro.marca} </p>
        <p> ${carro.modelo} </p>
        <p> ${carro.velocidadeMax} </p>
        <p> ${carro.velocidadeAtual} </p>
        <button onclick="acelerarCarro(1)">ACELERAR</button>
    `
}

function acelerarCarro(valor){
    carro.acelerar(valor);
    listarCarro()
    
}