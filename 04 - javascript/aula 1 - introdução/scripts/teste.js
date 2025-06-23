console.log("Olá mundo");

nome = "Victor Santos Rohod";

console.log(nome);

numero = 1;
valorReais = 10.10;
ligado = true;
lista = [1];

// console.log - escreva no console
// typeof() - qual é o tipo da variavel
console.log(typeof(nome));
console.log(typeof(numero));
console.log(typeof(valorReais));
console.log(typeof(ligado));
console.log(typeof(lista)); 

// escopo global , sobrescreve
var teste = "Oi";
teste = "QUE LEGAL";
console.log(teste);

// escopo local , sobrescreve
let teste2 = "Olá";

// escopo global, não sobrescreve
const teste3 = ":)";
// erro ao tentar sobrescrever
// teste3 = 10;
console.log(teste3);

// caixa de texto
// alert - emite uma mensagem
// alert("OIA QUE LEGAL!");

// confirm - emite uma pergunta, e salva boolean (logico)
// confirm("DESEJA BAIXAR NOVAMENTE?");

// prompt(leia) - emite uma mensagem, e salva string
// prompt("Digite o seu nome");

// limpaTela
console.clear();

alert("Script de soma");
// parseInt - inteiro
// parseFloat - real
// Number - Ambos
n1 = Number(prompt("Digite o primeiro numero: "));
n2 = Number(prompt("Digite o segundo numero: "));
soma = n1 + n2;
alert("A soma dos numeros é "+soma);





