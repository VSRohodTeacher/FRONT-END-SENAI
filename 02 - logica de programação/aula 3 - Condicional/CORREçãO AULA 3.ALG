Algoritmo "corre��o aula 3"

Var
aluno : caractere
nota : real
opcao : inteiro

Inicio
// aluno - Entrada
escreval("DIARIO DE NOTAS")
escreval("1) J�ao")
escreval("2) Maria")
escreval("3) Pedro")
leia(opcao)

// salvar a nota - Processo

// METODO SE
//se (opcao = 1) entao
//     aluno <- "J�ao"
//senao
//     se (opcao = 2) entao
//       aluno <- "Maria"
//     senao
//       se (opcao = 3) entao
//         aluno <- "Pedro"
//
//       senao
//            escreval("Aluno incorreto!")
//       fimSe
//     fimSe
//fimSe

//escreval(aluno)
//leia(nota)
//limpaTela
//escreval("A nota do ",aluno," � ", nota)

// METODO CASO
escolha(opcao)
   caso 1
    aluno <- "J�ao"
    leia(nota)
    escreval("Nota de ",aluno," � ",nota)
   caso 2
    aluno <- "Maria"
    leia(nota)
    escreval("Nota de ",aluno," � ",nota)
   caso 3
    aluno <- "Pedro"
    leia(nota)
    escreva("Nota de ",aluno," � ",nota)
   outrocaso
    escreval("Aluno n�o existe")
fimEscolha

se (nota >= 7)entao
   escreval("Aprovado :) ")
senao
   escreval("Reprovado ;-; ")
fimSe
// Mostrar nota - Sa�da de dados


Fimalgoritmo