// Exercicio 25 - Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da 
// fórmula VOLUME ← COMPRIMENTO * LARGURA * ALTURA.

import './App.css';

var comprimento=parseInt(prompt("Digite o COMPRIMENTO da caixa"));
var largura=parseInt(prompt("Digite a LARGURA da caixa"));
var altura=parseInt(prompt("Digite a ALTURA da caixa"));



function volume(){
    return comprimento*largura*altura;
}




function exercicio25(){
    return(
        <div className = "exercicio25">
            <p>O volume da caixa corresponde à: {volume()}metros cubicos</p>
        </div>
    )
}

export default exercicio25;