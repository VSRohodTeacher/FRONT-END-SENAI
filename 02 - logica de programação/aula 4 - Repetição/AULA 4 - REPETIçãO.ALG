Algoritmo "aula 4 - repetição"

Var
contador : inteiro
usuarioSalvo , senhaSalvo : caractere
usuario, senha : caractere

Inicio
senhaSalv <- "123senha"
usuarioSalvo <- "fulano"

enquanto (verdadeiro) faca
  escreval("Digite o seu usuario")
  leia(usuario)
  escreval("Digite a sua senha")
  leia(senha)

  se (senhaSalvo = senha) e (usuarioSalvo = usuario)entao
     escreval("Login efetuado com sucesso!")
     interrompa
  senao
     limpatela
     escreval("Usuario ou senha incorretos")
  fimSe
fimEnquanto

// se (condicao) entao faça algo fimse
//enquanto (contador <= 10) faca
//   escreval("OLÁ")
//   contador <- contador + 1
//   interrompa
//fimenquanto

Fimalgoritmo