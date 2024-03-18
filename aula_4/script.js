// class Conta_bancaria {
//     constructor(){
//         this.saldo = 0;
//         this.tipo;
//     }

//     depositar(){
//         let dinheiro = parseFloat(window.prompt("digite o valor que deseja depositar"));
//         this.saldo += dinheiro;
//         window.alert("Depósito realizado. Seu saldo é: " + this.saldo);
//     }
//     sacar(){
//         let dinheiro = parseFloat(window.prompt("digite o valor que deseja sacar"));
//         if(dinheiro <= this.saldo){
//             this.saldo -= dinheiro;
//             window.alert("Saque realizado. Seu saldo é: " + this.saldo);
//         } else {
//             window.alert("Você não tem dinheiro suficiente em conta");
//         }
//     }
//     visualizar_saldo(){
//         window.alert(this.saldo)
//     }
// }

// class Conta_poupanca extends Conta_bancaria{
//     constructor(){
//         super()
//         this.saldo
//         this.tipo = 'Poupança'
//     }
//     render_juros(){
//         this.saldo = this.saldo + (this.saldo * 0.10)
//     }
// }

// class Conta_corrente extends Conta_bancaria{
//     constructor(){
//         super()
//         this.saldo
//         this.tipo = 'Corrente'
//     }
// }

// class Livros{
//     constructor(){
//         this.nome
//         this.autor
//         this.identificador
//         this.categoria
//         this.quantidade_de_Livros
//         this.emprestado = false
//     }
//     emprestar_livro(){
//         if(this.emprestado = false){
//             this.emprestado = true
//             window.alert("Você pegou o livro emprestado")
//         }else{
//             window.alert("Ese livro ja esta emprestado")
//         }
//     }
//     devolver_livro(){
//         if(this.emprestado = true){
//             this.emprestado = False
//             window.alert("Você devolveu o livro")
//         }else{
//             window.alert("Esse livro ja esta emprestado")
//         }
//     }
// }

class Usuario {
    constructor(username, senha) {
        this.username = username;
        this.senha = senha;
        this.logado = false;
    }

    isLogado() {
        return this.logado;
    }
}

class Autenticacao {
    constructor() {
        this.usuarios = [];
        this.usuarioLogado = null;
    }

    registrar(username, senha) {
        const novoUsuario = new Usuario(username, senha);
        this.usuarios.push(novoUsuario);
        console.log(`Usuário ${username} registrado com sucesso.`);
    }

    login(username, senha) {
        const usuario = this.usuarios.find(user => user.username === username && user.senha === senha);
        if (usuario) {
            usuario.logado = true;
            this.usuarioLogado = usuario;
            console.log(`Usuário ${username} logado com sucesso.`);
        } else {
            console.log("Usuário ou senha incorretos.");
        }
    }

    logout() {
        if (this.usuarioLogado && this.usuarioLogado.isLogado()) {
            console.log(`Usuário ${this.usuarioLogado.username} deslogado.`);
            this.usuarioLogado.logado = false;
            this.usuarioLogado = null;
        } else {
            console.log("Nenhum usuário logado.");
        }
    }

    getUsuarioLogado() {
        if (this.usuarioLogado && this.usuarioLogado.isLogado()) {
            console.log(`Usuário logado: ${this.usuarioLogado.username}`);
        } else {
            console.log("Nenhum usuário logado.");
        }
    }
}

const auth = new Autenticacao();

auth.registrar("Davi", "568786");
auth.registrar("Neymar", "23445");

auth.login("CR7", "35466");
auth.login("Davi", "568786");

auth.logout();
auth.getUsuarioLogado();




