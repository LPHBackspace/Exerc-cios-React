// Exercicio 10 -  Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e 
// escrever a área do retângulo. 
import './App.css';

var a = parseInt(prompt("Digite a altura do retângulo"));
var l = parseInt(prompt("Digite a largura do retângulo"));


function area(){
    return a*l
}

function exercicio10(){
    return(
        <div className = "exercicio10">
            <p>A área do retângulo corresponde à: {area()}</p>
        </div>
    )
}

export default exercicio10;