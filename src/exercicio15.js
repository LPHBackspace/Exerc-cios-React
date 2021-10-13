// Exercicio 15 - Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
// mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
// efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
// vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
// vendedor. 
 
import './App.css';

var salario = parseInt(prompt("Digite o valor do seu salário fixo"));
var carros = parseInt(prompt("Digite o número de carros vendidos no mês"));
var comissao = parseInt(prompt("Digite o valor de comissão por carro vendido"));
var vendas = parseInt(prompt("Digite o valor total das vendas no mês"));


function salarioFinal(){
    return (carros*comissao)+((vendas/100)*5)+salario;
}


function exercicio15(){
    return(
        <div className = "exercicio15">
            <p>O seu salário neste mês corresponde à: R${salarioFinal()}</p>
        </div>
    )
}

export default exercicio15;