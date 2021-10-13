// Exercicio 22 - Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
// PRESTACAO ← VALOR + (VALOR * TAXA/100) * TEMPO).

 
import './App.css';

var valor=parseInt(prompt("Digite o valor da prestação"))
var taxa= parseInt(prompt("Digite a porcentagem de juros"));
var tempo= parseInt(prompt("Digite a quantidade de dias de atraso da prestação"));


function prestacao(){
    return valor+((valor*(taxa/100))*tempo);
}


function exercicio22(){
    return(
        <div className = "exercicio22">
            <p>Valor da prestação: R$ {prestacao()}</p>
        </div>
    )
}

export default exercicio22;