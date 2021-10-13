// Exercicio 20 - Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
// Volume = 3.14 * Raio^2 * Altura
 
import './App.css';

var raio= parseInt(prompt("Digite o raio da lata de óleo"));
var altura= parseInt(prompt("Digite a altura da lata de óleo"));



function volume(){
    return Math.PI*(raio*raio)*altura;
}


function exercicio20(){
    return(
        <div className = "exercicio20">
            <p>o volume da lata de óleo corresponde à: {volume()}C°</p>
        </div>
    )
}

export default exercicio20;