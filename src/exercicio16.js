// Exercicio 16 - Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
// correspondente em graus Celsius (baseado na fórmula abaixo): 
// C F - 32 
// ---------- = -----------
// 5 9 
// Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F 
 
import './App.css';

var fahrenheit = parseInt(prompt("Digite uma temperatura em fahrenheit para tranformar em celsius"));



function celsius(){
    return (fahrenheit-32)/1.8;
}


function exercicio16(){
    return(
        <div className = "exercicio16">
            <p>a temperatura apresentada corresponde à: {celsius()}C°</p>
        </div>
    )
}

export default exercicio16;