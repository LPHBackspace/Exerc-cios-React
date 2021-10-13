// Exercicio 8 - Área do circulo
import './App.css';

var r = parseInt(prompt("Digite o raio do círculo"));


function area(){
    return (Math.PI*(r*r))
}

function exercicio8(){
    return(
        <div className = "exercicio8">
            <p>A área do circulo corresponde à: {area()}</p>
        </div>
    )
}

export default exercicio8;