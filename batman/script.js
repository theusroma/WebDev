function verifica() {

    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 == 0 && numero % 5 == 0) {
        alert("O número é PAR e É divisível por 5.");
    }

    else if (numero % 2 != 0 && numero % 5 == 0) {
        alert("O número é IMPAR e É divisível por 5.");
    }

    else if (numero % 2 == 0 && numero % 5 != 0) {
        alert("O número é PAR e NÃO É divisível por 5.");
    }

    else if (numero % 2 != 0 && numero % 5 != 0) {
        alert("O número é IMPAR e NÃO É divisível por 5.");
    }
}


function mostrar() {

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    alert("Nome: " + nome + "\nMensagem: " + mensagem);

    console.log("Nome:", nome);
    console.log("Mensagem:", mensagem);


    const rodape = document.getElementById("rodape");
    rodape.textContent = "Nome: " + nome + " - Mensagem: " + mensagem;


}


