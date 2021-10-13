// Exercicio 21 - Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
// automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
// (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
// distância percorrida com a fórmula DISTANCIA ← TEMPO * VELOCIDADE. Possuindo o valor da 
// distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
// LITROS_USADOS ← DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
// média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
// quantidade de litros (LITROS_USADOS) utilizada na viagem.

 
import './App.css';

var tempo= parseInt(prompt("Digite o tempo gasto na viagem"));
var velocidade= parseInt(prompt("Digite a velocidade média da viagem"));


function gasosa(){
    return (tempo*velocidade)*12;
}


function exercicio21(){
    return(
        <div className = "exercicio21">
            <p>A quantidade de gasoliga gasta durate a viagem: {gasosa()}L</p>
        </div>
    )
}

export default exercicio21;