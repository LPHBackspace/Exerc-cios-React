// Exercicio 2 - Subtração
import './App.css';

var a = parseInt(prompt("Digite um valor A"));
var b = parseInt(prompt("Digite um valor B"));

function sub(){
    return a-b
}

function exercicio2(){
    return(
        <div className = "exercicio2">
            <p>A subtração dos valores A e B corresponde à: {sub()}</p>
        </div>
    )
}

export default exercicio2;