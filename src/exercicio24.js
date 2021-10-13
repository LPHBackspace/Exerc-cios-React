// Exercicio 23 - Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
// utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, 
// devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
// C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
// multiplicação e apresentar doze resultados de saída.

 
import './App.css';

var a=parseInt(prompt("Digite o valor A"));
var b=parseInt(prompt("Digite o valor B"));
var c=parseInt(prompt("Digite o valor C"));
var d=parseInt(prompt("Digite o valor D"));


function soma1(){
    return a+b;
}
function soma2(){
    return a+c;
}
function soma3(){
    return a+d;
}
function soma4(){
    return b+c;
}
function soma5(){
    return b+d;
}
function soma6(){
    return c+d;
}

function mult1(){
    return a*b;
}
function mult2(){
    return a*c;
}
function mult3(){
    return a*d;
}
function mult4(){
    return b*c;
}
function mult5(){
    return b*d;
}
function mult6(){
    return c*d;
}




function exercicio24(){
    return(
        <div className = "exercicio24">
            <p>A + B: = {soma1()}</p>
            <p>A + C: = {soma2()}</p>
            <p>A + D: = {soma3()}</p>
            <p>B + C: = {soma4()}</p>
            <p>B + D: = {soma5()}</p>
            <p>C + D: = {soma6()}</p>

            <p>A x B: = {mult1()}</p>
            <p>A x C: = {mult2()}</p>
            <p>A x D: = {mult3()}</p>
            <p>B x C: = {mult4()}</p>
            <p>B x D: = {mult5()}</p>
            <p>C x D: = {mult6()}</p>
            
        </div>
    )
}

export default exercicio24;