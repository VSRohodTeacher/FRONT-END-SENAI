// enquanto () faca ... !controlador
// WHILE - VERIFICA E FAZ APENAS QUANDO A CONDIÇÃO
// FOR FAVORÁVEL
var i = 0;
console.log("----------WHILE-------------");
while (i < 3) {
    console.log(`Eu repeti ${i + 1} vezes`);
    i++;
}

// DO WHILE - FAZ UMA VEZ E REPETE APENAS QUANDO
// A CONDIÇÃO FOR FAVORÁVEL
i = 0;
console.log("-----------DO WHILE------------");
do {
    console.log(`Eu repeti ${i + 1} vezes`);
    i++;
} while (i < 3);

console.log("---------FOR--------");
for (i = 0; i < 10; i++) {
    console.log(`Repeti ${i + 1} vezes`);
}


// FOR EACH
var alunos = ['Victor', 'Rafael', 'Bruno', 'Alessandra','Vanessa','Eduardo','Leo','Sarah','Fabiane','Shirley','Bruna','Esdras','Ryan','Alicia'];
var contador = 0
alunos.forEach(cadaAluno => {
    document.querySelector("tbody").innerHTML += `
        <tr> 
            <th> ${contador + 1} </th>
            <td> ${cadaAluno} <td>                                 
        </tr>
    `;
    // console.log(`${contador+1} - ${cadaAluno}`);
    contador++
});