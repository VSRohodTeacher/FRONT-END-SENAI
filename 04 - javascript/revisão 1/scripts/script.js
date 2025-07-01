// 1)Monte um script conforme o layout apresentado abaixo contendo 
// uma caixa de texto e um botão quando digitarmos um endereço da 
// internet e clicarmos no botão “Ir” será aberto uma
// nova página acessando o endereço digitado.
function ex1() {
    const enderecoInput = document.querySelector('#enderecoInput');

    let link = "https://" + enderecoInput.value;

    location = link;
}

// 2) Monte um script conforme o layout apresentado abaixo contendo 
// uma caixa de listagem onde possui as seguintes opções: Globo, 
// Terra e Uol. Quando escolhermos uma opção será acessado 
// a página da opção escolhida.
function ex2(){
    let link = document.querySelector("#links").value;

    location = link; 
}
document.querySelector("#links").addEventListener('change',ex2);

//4) Monte um script conforme o layout apresentado abaixo contendo duas 
// caixa de texto. Quando sair da caixa de percentual efetuar o 
// cálculo de uma percentual sobre o valor digitado mostrando em uma caixa 
// de alerta.

// arrow function -> exercicio 4 - percentual do valor
document.querySelector("#perc").addEventListener('focusout', () => {
    // Nan - Not a Number
    const valor = Number(document.querySelector("#valor").value);
    const perc = Number(document.querySelector("#perc").value);

    let resultado = valor * (perc / 100);

    // toFixed() limita as casas decimais
    alert(`O percentual do valor é ${resultado.toFixed(2)}`);
});