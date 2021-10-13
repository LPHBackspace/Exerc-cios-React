// Exercicio 3 - Multiplicação
import './App.css';

var a = parseInt(prompt("Digite um valor A"));
var b = parseInt(prompt("Digite um valor B"));

function multiplicacao(){
    return a*b
}

function exercicio3(){
    return(
        <div className = "exercicio3">
            <p>A multiplicação dos valores A e B corresponde à: {multiplicacao()}</p>
        </div>
    )
}

export default exercicio3;