// Exercicio 5 - Antecessor
import './App.css';

var numero = parseInt(prompt("Digite um valor para saber seu antecessor"));

function antecessor(){
    return numero-1
}

function exercicio5(){
    return(
        <div className = "exercicio5">
            <p>O antecessor do número informado é {antecessor()}</p>
        </div>
    )
}

export default exercicio5;