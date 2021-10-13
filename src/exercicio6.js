// Exercicio 6 - Sucessor
import './App.css';

var numero = parseInt(prompt("Digite um valor para saber seu sucessor"));

function sucessor(){
    return numero+1
}

function exercicio6(){
    return(
        <div className = "exercicio6">
            <p>O sucessor do número informado é: {sucessor()}</p>
        </div>
    )
}

export default exercicio6;