// function exec1() {
//     var lista = [];
//     for (var i = 0; i <= 5; i++) {
//         var userInput = window.prompt('Digite os números para a lista');
//         var number = parseInt(userInput);
//         lista.push(number);
//         window.alert(lista);
//     }
//     lista = lista.map(n => n * 2);
//     window.alert(lista);
//     return;
// }
// exec1();

// function exec2() {
//     let lista = [];
//     let sum = 0;

//     // Prompt the user for numbers
//     for (var i = 0; i <= 8; i++) {
//         let userInput = window.prompt('Digite os números');
//         let number = parseInt(userInput);
//         lista.push(number);
//         sum += number; // Add the number to the sum
//     }

//     // Calculate the average
//     let average = sum / lista.length;

//     // Display the average
//     window.alert(parseFloat(average));
// }

// exec2();

// let idades = [];
// let soma = 0;

// for (let i = 0; i < 20; i++) {
//     let idade = parseInt(window.prompt("Digite a idade da pessoa " + (i+1)));
//     idades.push(idade);
//     soma += idade;
// }

// let media = soma / 20;
// let acimaDaMedia = [];

// for (let idade of idades) {
//     if (idade > media) {
//         acimaDaMedia.push(idade);
//     }
// }
// window.alert(acimaDaMedia)

// window.alert("As idades acima da média são: " + acimaDaMedia.join(", "));

// let pares = [];

// for (let i = 0; i < 10; i++) {
//     let numero = parseInt(window.prompt("Digite o número " + (i+1)));
//     if (numero % 2 === 0) {
//         pares.push(numero);
//     }
// }

// if (pares.length === 0) {
//     window.alert("Todos os números são ímpares.");
// } else {
//     window.alert("Os números pares são: " + pares.join(", "));
// }

// let nomes = ["Ana", "Carlos", "João", "Maria", "Pedro", "Sofia", "Rafael", "Mariana", "Daniel", "Laura"];

// let nomeBusca = window.prompt("Digite um nome para buscar");

// let posicao = nomes.indexOf(nomeBusca);

// if (posicao !== -1) {
//     window.alert("O nome " + nomeBusca + " foi encontrado na posição " + posicao);
// } else {
//     window.alert("Nome não encontrado!");
// }

// let vetorA = [];
// let vetorB = [];

// for (let i = 0; i < 5; i++) {
//     let numeroA = parseInt(window.prompt("Digite o número " + (i+1) + " para o vetor A"));
//     let numeroB = parseInt(window.prompt("Digite o número " + (i+1) + " para o vetor B"));
//     vetorA.push(numeroA);
//     vetorB.push(numeroB);
// }

// let vetorC = [];

// for (let i = 0; i < 5; i++) {
//     vetorC.push(vetorA[i]);
//     vetorC.push(vetorB[i]);
// }

// window.alert("Valores do vetor C: " + vetorC.join(", "));