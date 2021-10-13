// Exercicio 17 -  Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
// Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
// final é: 
// n1 * 2 + n2 * 3 + n3 * 5 
// mediafinal = -----------------------------------
// 10  
 
import './App.css';

var nota1 = parseInt(prompt("Digite sua 1° nota 'peso 2'"));
var nota2 = parseInt(prompt("Digite sua 2° nota 'peso 3'"));
var nota3 = parseInt(prompt("Digite sua 3° nota 'peso 5'"));




function media(){
    return ((nota1*2)+(nota2*3)+(nota3*5))/10;
}


function exercicio17(){
    return(
        <div className = "exercicio17">
            <p>Sua media no bimestre: {media()}</p>
        </div>
    )
}

export default exercicio17;