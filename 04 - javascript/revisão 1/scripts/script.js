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

}

