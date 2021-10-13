// Exercicio 12 - Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
// brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
// de eleitores. 
import './App.css';

var eleitores = parseInt(prompt("Digite a quantidade de eleitores no município"));
var brancos = parseInt(prompt("Digite a quantidade de votos em branco"));
var nulos = parseInt(prompt("Digite a quantidade de votos  nulos"));
var validos = parseInt(prompt("Digite a quantidade de votos validos"));

function percentualB(){
    return ((brancos/eleitores)*100);
}
function percentualN(){
    return ((nulos/eleitores)*100);
}
function percentualV(){
    return ((validos/eleitores)*100);
}

function exercicio12(){
    return(
        <div className = "exercicio12">
            <p>Percentual de votos em branco: {percentualB()} %</p>
            <p>Percentual de votos nulos: {percentualN()} %</p>
            <p>Percentual de votos validos: {percentualV()} %</p>
        </div>
    )
}

export default exercicio12;