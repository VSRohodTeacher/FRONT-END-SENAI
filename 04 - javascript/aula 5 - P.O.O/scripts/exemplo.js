class Livro {
    constructor(nome,desc,autor,genero,valor){
        this.nome = nome;
        this.desc = desc;
        this.autor = autor;
        this.genero = genero;
        this.valor = valor;
    }
}

var catalogo = [];

catalogo.push(new Livro("Eragon","lorem","Christopher","Fantasia",59.99));
catalogo.push(new Livro("Percy Jackson","lorem","Rick","Fantasia",70));
catalogo.push(new Livro("Senhor dos Aneis","lorem","J.R.R Tolkien","Fantasia",100));
catalogo.push(new Livro("O iluminado","lorem","Stephen","terror",10));

catalogo.forEach((livro) => {
    document.querySelector("body").innerHTML += `
    <div class="card">
        <h3> ${livro.nome} </h3>
        <p> ${livro.desc} </p>
        <p> R$ ${livro.valor} </p>
        <h6> ${livro.autor} </h6>
    </div>
    `
});