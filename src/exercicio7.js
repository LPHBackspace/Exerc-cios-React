// Exercicio 7 - Área do triangulo
import './App.css';

var a = parseInt(prompt("Digite a altura do triangulo"));
var b = parseInt(prompt("Digite a base do triangulo"));

function area(){
    return (a*b)/2
}

function exercicio7(){
    return(
        <div className = "exercicio7">
            <p>A área do triangulo corresponde à: {area()}</p>
        </div>
    )
}

export default exercicio7;