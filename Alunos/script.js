// array

let nomes = [ { nome: "Alice",   nota: 92},
              { nome: "Bento",   nota: 38},
              { nome: "Carol",   nota: 88},
              { nome: "Marco",   nota: 65},
              { nome: "Elaine",  nota: 72}  

];


function listar(){
    let resposta; 
    for(let i = 0; i < nomes.length; i++){
    resposta = "<p>Aluno [" + i + "]:" + nomes[i].nome +
            "</p>Nota [" + i + "]:" + nomes[i].nota + "</p> <br>";
    //exibindo o resultado   
    document.getElementById('lista').innerHTML += resposta;
    }
    }






    //função que exibe a maior nota dos alunos e seu nome
function maior(){
    let maior = nomes[0].nota;
    let nomeMaior = nomes[0].nome;
    
    for(let i = 0; i < nomes.length; i++){
    if (nomes[i].nota > maior){
     maior = nomes[i].nota;
     nomeMaior = nomes[i].nome;
    }
    }
    
    //exibindo o resultado
    let resposta = "<p>O aluno com a maior nota é:" + "<br>" +
            "Nome: " + nomeMaior + "<br>" +
            "Nota: " + maior + "</p>";
    document.getElementById('maior').innerHTML = resposta;
    }
    

    //função que exibe a menor nota dos alunos e seu nome
function menor(){
    let menor = nomes[0].nota;
    let nomeMenor = nomes[0].nome;
    
    for(let i = 0; i < nomes.length; i++){
    if (nomes[i].nota < menor){
     menor = nomes[i].nota;
     nomeMenor = nomes[i].nome;
    }
    }
    
    //exibindo o resultado
    let resposta = "<p>O aluno com a menor nota é:" + "<br>" +
            "Nome: " + nomeMenor + "<br>" +
            "Nota: " + menor + "</p>";
    document.getElementById('menor').innerHTML = resposta;
    }
