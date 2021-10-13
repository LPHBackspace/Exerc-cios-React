// Exercicio 14 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
// seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
// calcular e escrever o custo final ao consumidor. 
import './App.css';

var carro = parseInt(prompt("Digite o valor de fábrica do carro"));


function valor(){
    return ((carro/100)*28)+((carro/100)*45)+carro;
}


function exercicio14(){
    return(
        <div className = "exercicio14">
            <p>O valor de mercado do carro corresponde à: R${valor()}</p>
        </div>
    )
}

export default exercicio14;