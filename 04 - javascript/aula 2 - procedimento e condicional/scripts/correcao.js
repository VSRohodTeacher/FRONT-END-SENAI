function atividade1() {
    let n1 = Number(prompt("Digite um numero:"));
    let opcao = prompt("Digite um operador: (+,*,/,-)");
    let n2 = Number(prompt("Digite o segundo numero: "));

    var resultado;

    if (opcao == "") {
        alert("ERRO! Digite um operador!");
        atividade1();
    } else {
        switch (opcao) {
            case "+":
                resultado = n1 + n2;
                break;
            case "-":
                resultado = n1 - n2;
                break;
            case "*":
                resultado = n1 * n2;
                break;
            case "/":
                resultado = n1 / n2;
                break;
            default:
                alert("ERRO! Operador inválido!");
                atividade1();
        }
        alert(`O resultado é de: ${resultado}`)
    }

}

function atividade2() {
    let idade = Number(prompt("Digite sua idade: "));

    if(idade >= 0 && idade < 15){
        alert(`Idade fornecida: ${idade} / Criança`);
    }else if(idade >= 15 && idade < 30){
        alert(`Idade fornecida: ${idade} / Jovem`);
    }else if(idade >= 30 && idade < 60){
        alert(`Idade fornecida: ${idade} / Adulto`);
    }else if(idade >= 60 ){
        alert(`Idade fornecida: ${idade} / Idoso`);
    }else{
        alert("ERRO! Idade inválida!");
        atividade2(); 
    }

}