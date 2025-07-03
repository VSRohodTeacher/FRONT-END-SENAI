// API sigla = Application Programming Interface
// Conjunto de ferramentas 
// Solucionar problemas ou facilitar a utilização de 
// serviços

const api = "https://viacep.com.br/ws/";

document.querySelector("#cep").addEventListener("focusout", () => {
    let cep = document.querySelector("#cep").value;
    // alert(cep);

    // fetch busca a requisição (requisição é pedido);
    // then - resultado se der certo
    // catch - resultado se der errado
    
    let busca = api + cep + "/json/";
    fetch(busca).then(resposta => {
        // console.log(resposta.json());
        return resposta.json();
    }).then(informacaoCep => {
        document.querySelector("#logradouro").value = informacaoCep.logradouro;
        document.querySelector("#complemento").value = informacaoCep.complemento;
        document.querySelector("#logradouro").value = informacaoCep.logradouro;
        document.querySelector("#bairro").value = informacaoCep.bairro;
        document.querySelector("#estado").value = informacaoCep.estado;
    }) ;

});