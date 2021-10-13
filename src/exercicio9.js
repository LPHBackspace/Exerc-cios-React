// Exercicio 9 - Área do quadrado
import './App.css';

var l = parseInt(prompt("Digite o lado do quadrado"));


function area(){
    return l*l
}

function exercicio9(){
    return(
        <div className = "exercicio9">
            <p>A área do quadrado corresponde à: {area()}</p>
        </div>
    )
}

export default exercicio9;