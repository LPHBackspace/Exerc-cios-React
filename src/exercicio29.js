// Exercicio 9 - Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado
// final à soma dos quadrados dos três valores lidos.


import './App.css';

var a=parseInt(prompt("Digite o valor A"));
var b=parseInt(prompt("Digite o valor B"));
var c=parseInt(prompt("Digite o valor C"));



function conta(){
    return (a**2)+(b**2)+(c**2);
}


function exercicio29(){
    return(
        <div className = "exercicio29">
            <p>à soma dos quadrados dos três valores lidos: {conta()}</p>
        </div>
    )
}

export default exercicio29;