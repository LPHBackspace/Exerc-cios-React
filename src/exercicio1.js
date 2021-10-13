// Exercicio 1 - Soma
import './App.css';

var a = parseInt(prompt("Digite um valor leo"));
var b = parseInt(prompt("Digite um valor B"));

function soma(){
    return a+b
}

function exercicio1(){
    return(
        <div className = "exercicio1">
            <p>A soma dos valores A e B corresponde à: {soma()}</p>
        </div>
    )
}

export default exercicio1;