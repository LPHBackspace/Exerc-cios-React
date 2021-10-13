// Exercicio 4 - Divisão
import './App.css';

var a = parseInt(prompt("Digite um valor A"));
var b = parseInt(prompt("Digite um valor B"));

function div(){
    return a/b
}

function exercicio4(){
    return(
        <div className = "exercicio4">
            <p>A divisão dos valores A e B corresponde à: {div()}</p>
        </div>
    )
}

export default exercicio4;