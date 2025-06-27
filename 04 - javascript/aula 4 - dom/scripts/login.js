const nomeCadastrado = "victor";
const senhaCadastrado = "senha";

document.querySelector("#btnLogin").addEventListener('click', () => {
    var nome = document.querySelector("#nome").value;
    var senha = document.querySelector("#senha").value;

    if (nome === '' || senha === '') {
        alert('Digite as informações corretamente!');
    } else {
        if (nome === nomeCadastrado && senha === senhaCadastrado) {
            alert("Login efetuado com sucesso!");
        } else {
            alert("Senha ou Nome incorretos!");
        }
    }


})
