clientes = Number(prompt("Quantos clientes na mesa?"));
valorTotal = Number(prompt("Qual o valor da mesa?"));

valorPerCliente = valorTotal / clientes;

alert(`O valor para cada cliente é de R$ ${valorPerCliente}`);