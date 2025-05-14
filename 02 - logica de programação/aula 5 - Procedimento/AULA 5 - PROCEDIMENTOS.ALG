Algoritmo "aula 5 - Procedimentos"

Var
nome : caractere

Inicio
// Procedimento
procedimento perguntarNome()
    var
      msg : caractere
    inicio
      // resto do código
      msg <- "Bom dia :)"
      escreval(msg)
      escreval("Insira seu nome")
      leia(nome)
      escreval("O(a) ",nome," foi adicionado(a) com sucesso!")
fimProcedimento

perguntarNome()


procedimento alerta(texto : caractere)
  inicio
  escreval("!---",texto,"---!")
fimProcedimento

alerta("Cuidado com fechamento")
alerta("Cuidado com sintaxe")
// soma(1,3)

//procedimento ex1()

//fimProcedimento

//procedimento ex2()

//fimProcedimento






Fimalgoritmo