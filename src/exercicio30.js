// Exercicio 30 - Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado
// final o quadrado da soma dos três valores lidos.


import './App.css';

var a=parseInt(prompt("Digite o valor A"));
var b=parseInt(prompt("Digite o valor B"));
var c=parseInt(prompt("Digite o valor C"));



function conta(){
    return (a+b+c)**2;
}


function exercicio30(){
    return(
        <div className = "exercicio30">
            <p>o quadrado da soma dos três valores lidos: {conta()}</p>
        </div>
    )
}

export default exercicio30;