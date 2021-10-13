// Exercicio 11 -  Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a
// idade  dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
import './App.css';

var anos = parseInt(prompt("Digite a quantidade de anos vividos"));
var meses = parseInt(prompt("Digite a quantidade de meses vividos"));
var dias = parseInt(prompt("Digite a quantidade de dias vividos"));



function idade(){
    return (anos*365)+(meses*30)+(dias)
}

function exercicio10(){
    return(
        <div className = "exercicio10">
            <p>Sua idade em dias: {idade()}</p>
        </div>
    )
}

export default exercicio10;