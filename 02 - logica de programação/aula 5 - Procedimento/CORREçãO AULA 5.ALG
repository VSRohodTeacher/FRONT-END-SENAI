Algoritmo "Corre��o aula 5"

Var


Inicio
// 1) Jo�o Papo-de-Pescador, homem de bem,
// comprou um microcomputador para controlar o
// rendimento di�rio de seu trabalho. Toda vez que
// ele traz um peso de peixes maior que o estabelecido
// pelo regulamento de pesca do estado de S�o Paulo
// (50 quilos) deve pagar um multa de R$ 4,00 por
// quilo excedente. Jo�o precisa que voc� fa�a um
// algoritmo que leia a vari�vel P (peso de peixes)
// e verifique se h� excesso. Se houver, gravar na
// vari�vel E (Excesso) e na vari�vel M o valor da
// multa que Jo�o dever� pagar. Caso contr�rio
// mostrar tais vari�veis com o conte�do ZERO.

// entrada
// Peso de Peixe

// processo
// verificar excesso
// (condicional) caso sim, multa, caso n�o, mostrar
// 0

// saida
// se multa, mostrar o que pagar, caso n�o, avisar
// que n�o h� multa
procedimento ex1()
   VAR
     peso , multa , excesso , taxa : real
   INICIO
     taxa <- 4
     escreval("Escreva o peso em KG de peixes")
     leia(peso)
     
     se (peso > 50) entao
       excesso <- peso - 50
       multa <- excesso * taxa
       escreval("Multa de R$ ",multa)
     senao
       excesso <- 0
       multa <- 0
       escreval("N�o tem multa")
     fimSe
fimProcedimento





procedimento ex2()
   VAR
      valorTotal , valor , contador : inteiro
   INICIO
      contador <- 1
      
      enquanto (contador <= 10) faca
         leia(valor)
         valorTotal <- valorTotal + valor
         contador <- contador + 1
         limpaTela
         escreval("SOMA ATUAL: ",valorTotal)
      fimEnquanto
         limpaTela
         escreval("SOMA TOTAL: ",valorTotal)
fimProcedimento







procedimento ex3()
    var
     idade : inteiro
    inicio
     leia(idade)
     
     se ( idade >= 5 ) e (idade <= 7) entao
        escreval("Infantil A")
     senao
       se ( idade >= 8 ) e (idade <= 11) entao
          escreval("Infantil B")
       senao
         se ( idade >= 12 ) e (idade <= 13) entao
           escreval("Juvenil A")
         senao
           se ( idade >= 14 ) e (idade <= 17) entao
              escreval("Juvenil B")
           senao
             se( idade > 18) entao
              escreval("Adulto")
             senao
              escreval("Idade Inv�lida")
             fimse
           fimse
         fimse
       fimse
     fimse
     
fimProcedimento

ex2()



Fimalgoritmo