// Exercicio 19 - Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
// conversão é C ← (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
 
import './App.css';

var fahrenheit = parseInt(prompt("Digite uma temperatura em fahrenheit para tranformar em celsius"));



function celsius(){
    return (fahrenheit-32)*(5/9);
}


function exercicio19(){
    return(
        <div className = "exercicio19">
            <p>a temperatura apresentada corresponde à: {celsius()}C°</p>
        </div>
    )
}

export default exercicio19;