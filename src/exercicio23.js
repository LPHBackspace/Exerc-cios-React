// Exercicio 23 - Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos
// valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor
// da variável A. Apresentar os valores trocados
 
import './App.css';

var a=parseInt(prompt("Digite o valor A"));
var b=parseInt(prompt("Digite o valor B"));


function troca1(){
    return b;
}

function troca2(){
    return a;
}



function exercicio23(){
    return(
        <div className = "exercicio23">
            <p>O valor A agora vale: {troca1()}</p>
            <p>O valor A agora vale: {troca2()} </p>
        </div>
    )
}

export default exercicio23;