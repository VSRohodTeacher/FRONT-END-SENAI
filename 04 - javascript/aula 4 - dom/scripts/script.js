// JS DE CÓDIGOS GERAIS

// FORMAS ALTERNATIVAS DE PUXAR UM ELEMENTO

// document.getElementById("#nome");
// document.getElementsByClassName("caixa");
// document.querySelector(".caixa");
// document.getElementsByTagName();
document.querySelector("#nome").value = "Victor";

// FUNÇÃO PARA COLETAR O NOME DE UM INPUT
function pegaNome(){
    nome = document.querySelector("#nome").value;
    alert(`Seja bem vindo :  ${nome}`);
}

// ADDEVENTLISTENER - ACOMPANHA OS EVENTOS (QUAL E O QUE VOU FAZER)
// FUNCTION ANONIMA - É UMA FUNÇÃO SEM NOME, GERALMENTE UTILIZADA 
// QUANDO É NECESSÁRIO APENAS UM COMANDO SIMPLES OU A FUNÇÃO NÃO SERÁ 
// UTILIZADA NOVAMENTE / ARROW FUNCTION
divSaiu = document.querySelector("#saiu");

// ADICIONAR UM EVENTO DE TIRAR O MOUSE EM UMA DIV E ALTERAR SEU TEXTO
divSaiu.addEventListener('mouseout',() => {
    divSaiu.innerHTML = `voce saiu do quadrado!`;
})

// ADICIONAR UM EVENTO DE COLOCAR O MOUSE EM UMA DIV E ALTERAR SEU TEXTO
function entrouQuadrado(){
    divSaiu.innerHTML = `
        <p>voce entrou no quadrado!</p>
        <button>SEXTOU :)</button>
        `;
}
divSaiu.addEventListener('mouseenter', entrouQuadrado);


// FUNÇÃO PARA CLICAR EM UMA DIV E ALTERAR SEU DISPLAY
// FAZENDO COM QUE ELA SUMA PELO CSS
document.querySelector("#propaganda").addEventListener('click', () => {
    document.querySelector("#propaganda").style.display = "none";
});


























