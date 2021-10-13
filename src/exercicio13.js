// Exercicio 13 - Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de 
//reajuste. Calcular e escrever o valor do novo salário.
import './App.css';

var salario = parseInt(prompt("Digite o valor do seu salário"));
var reajuste = parseInt(prompt("Digite o percentual de reajuste"));

function novoSalario(){
    return ((salario/100)*reajuste)+salario;
}


function exercicio13(){
    return(
        <div className = "exercicio13">
            <p>Seu novo salario corresponde à: R${novoSalario()}</p>
        </div>
    )
}

export default exercicio13;