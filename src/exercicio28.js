// Exercicio 28 - Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido
// em  real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
// com o usuário, para que seja apresentado o valor em moeda americana.


import './App.css';

var real=parseInt(prompt("Digite um valor em reais"));
var cotacao=parseInt(prompt("Digite o valor da cotação do dolar"));



function dolar(){
    return real*cotacao;
}


function exercicio28(){
    return(
        <div className = "exercicio28">
            <p>O valor apresentado corresponde em dólares: R${dolar()}</p>
        </div>
    )
}

export default exercicio28;