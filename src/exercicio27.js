// Exercicio 27 - Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
// dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
// disponível com o usuário, para que seja apresentado o valor em moeda brasileira.


import './App.css';

var dolar=parseInt(prompt("Digite um valor em dólares"));
var cotacao=parseInt(prompt("Digite o valor da cotação do dolar"));



function real(){
    return dolar/cotacao;
}


function exercicio27(){
    return(
        <div className = "exercicio27">
            <p>O valor apresentado corresponde em reais: R${real()}</p>
        </div>
    )
}

export default exercicio27;