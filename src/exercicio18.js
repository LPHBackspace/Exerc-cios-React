// Exercicio 16 - Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
// conversão é F ← (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
import './App.css';

var celsius = parseInt(prompt("Digite uma temperatura em celsius para tranformar em fahrenheit"));



function fahrenheit(){
    return (celsius*1.8)+32;
}


function exercicio18(){
    return(
        <div className = "exercicio18">
            <p>a temperatura apresentada corresponde à: {fahrenheit()}F°</p>
        </div>
    )
}

export default exercicio18;