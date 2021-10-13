// Exercicio 26 - Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro
// valor pelo segundo.


import './App.css';

var a=parseInt(prompt("Digite o valor A"));
var b=parseInt(prompt("Digite o valor B"));


function diferenca(){
    return (a-b)**2;
}


function exercicio26(){
    return(
        <div className = "exercicio26">
            <p>o resultado do quadrado da diferença do primeiro valor pelo segundo.corresponde à: {diferenca()}</p>
        </div>
    )
}

export default exercicio26;