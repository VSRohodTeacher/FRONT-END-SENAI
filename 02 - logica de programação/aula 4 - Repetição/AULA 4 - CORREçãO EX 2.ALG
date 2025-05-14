Algoritmo "aula 4 - Correção ex 2"

Var
nT1 , nT2 : caractere
gT1 , gT2 : inteiro

Inicio
// entrada
// nomeTime1, golsTime1
// nomeTime2, golsTime2
escreval("Nome t1:")
leia(nT1)
escreval("Gols do time ",nT1)
leia(gT1)
escreval("Nome t2:")
leia(nT2)
escreval("Gols do time ",nT2)
leia(gT2)

// processo
se (gT1 > gT2) entao
  escreval("Time ",nT1, " venceu!")
senao
   se (gT1 < gT2) entao
     escreval("Time ",nT2, " venceu!")
   senao
     escreval("Empate")
   fimSe
fimSe

//saida
// mostrar o vencedor


Fimalgoritmo