Algoritmo "AiFood"

Var
opcao : inteiro

Inicio
escreval("************************")
escreval("*****SEJA BEM VINDO*****")
escreval("************************")
escreval("1) PIZZA - R$ 68")
escreval("2) SUCO E REFRI - R$ 10")
escreval("3) CREPE - R$ 17.99")
escreval("4) LASANHA - R$ 49.50")
escreval("5) CANCELAR")
escreval("6) FINALIZAR")

escreval("Escolha uma opção: ")
leia(opcao)

escolha(opcao)
  caso 1
       escreval("Pizza")
  caso 2
       escreval("Suco e refri")
  caso 3
       escreval("crepe")
  caso 4
       escreval("lasanha")
  outrocaso
       escreval("Não válido")
fimEscolha

Fimalgoritmo