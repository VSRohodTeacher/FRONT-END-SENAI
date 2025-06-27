// document.getElementById("#nome");
// document.getElementsByClassName("caixa");
// document.querySelector(".caixa");
// document.getElementsByTagName();
document.querySelector("#nome").value = "Victor";

function pegaNome(){
    nome = document.querySelector("#nome").value;
    alert(`Seja bem vindo :  ${nome}`);
}

// ADDEVENTLISTENER - ACOMPANHA OS EVENTOS (QUAL E O QUE VOU FAZER)
// FUNCTION ANONIMA - É UMA FUNÇÃO SEM NOME, GERALMENTE UTILIZADA 
// QUANDO É NECESSÁRIO APENAS UM COMANDO SIMPLES OU A FUNÇÃO NÃO SERÁ 
// UTILIZADA NOVAMENTE / ARROW FUNCTION
divSaiu = document.querySelector("#saiu");

divSaiu.addEventListener('mouseout',() => {
    divSaiu.innerHTML = `voce saiu do quadrado!`;
})

function entrouQuadrado(){
    divSaiu.innerHTML = `
        <p>voce entrou no quadrado!</p>
        <button>SEXTOU :)</button>
        `;
}
divSaiu.addEventListener('mouseenter', entrouQuadrado);


document.querySelector("#propaganda").addEventListener('click', () => {
    document.querySelector("#propaganda").style.display = "none";
});