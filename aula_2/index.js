// function mensagem() {
//    n1 = window.prompt("Insira o numero desejado");
//    const quadrado = (n1) => n2 = n1 * n1; 
//    const resultado = quadrado(n1, n1);
//    window.alert(resultado)
// }

// mensagem()

// function imparPar() {
//     n1 = window.prompt("Insira o numero desejado");
//     if(n1 % 2 == 0){
//         window.alert("par");
//     }else {
//         window.alert("impar");
//     }
// }
    
// imparPar()

// function Maior() {
    
//     n1 = window.prompt("Insira o numero 1 desejado");
//     n2 = window.prompt("Insira o numero 2 desejado");
//     n3 = window.prompt("Insira o numero 3 desejado");
    
//     if(n1>n2 && n1>n3){
//         window.alert(n1 + " é o maior")
//     }
//     else if(n2>n1 && n2>n3){
//         window.alert(n2 + "  é o maior")
//     }
//     else if(n3>n1 && n3>n2){
//         window.alert(n3 + " é o maior")
//     }else{
//         window.alert("Voce inseriu numeros")
//     }
// }

// Maior()


// function calculador() {
//     let opcao = window.prompt("Insira a operação desejada (-, /, *, +, ** , Fibonacci, n!)");
    
//     if (opcao < '6') {
//         let n1 = parseFloat(window.prompt('Digite o primeiro numero'));
//         let n2 = parseFloat(window.prompt('Digite o segundo numero'));

//         switch (opcao) {
//             case '-':
//                 window.alert(n1 - n2);
//                 break;
//             case '/':
//                 window.alert(n1 / n2);
//                 break;
//             case '*':
//                 window.alert(n1 * n2);
//                 break;
//             case '+':
//                 window.alert(n1 + n2);
//                 break;
//             case '**':
//                 window.alert(Math.pow(n1, n2));
//                 break;
//             default:
//                 window.alert('Opção inválida!');
//         }
//     } else if (opcao === '6') {
//         fib()
//     } else if (opcao == '7') {
//         factorialize()
//     }
// }
// calculador()

// function fib() {
//     let num = parseInt(window.prompt('Digite o número para calcular o Fibonacci'));
//     let a = 0, b = 1, nextTerm;
//     let lista = []

//     for (let i = 1; i <= num; i++) {
//         nextTerm = a + b;
//         a = b;
//         b = nextTerm;
//         lista += b + ' ,'
//     }
//     window.alert("0,1," + lista)
//     return
// }


// function factorialize() {
//     let n1 = parseFloat(window.prompt('Digite o número'));

//     if (n1 < 0) {
//         window.alert("Não é possível calcular o fatorial de um número negativo.");
//         return -1;
//     } else if (n1 === 0) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 1; i <= n1; i++) {
//             result *= i;
//         }
//         window.alert("O fatorial de " + n1 + " é " + result);
//         return result;
//     }
// }

// factorialize();


