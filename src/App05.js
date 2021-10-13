import "./App.css";



const forma = prompt(

  "SELECIONE: " +

    "\n [Q] para quadrado" +

    "\n [R] para retângulo" +

    "\n [T] para triângulo" +

    "\n [C] para círculo"

);



if (forma === "Q") {

  var lado = parseFloat(prompt("Digite o valor do lado: "));



}



if (forma === "T" || forma === 'R') {

  var altura = parseFloat(prompt("Digite a altura: "));

  var base = parseFloat(prompt("Digite a base: "));



} 



if (forma === "C") {

  var raio = parseFloat(prompt("Digite o raio: "));



}



function quad(lado) {

  return lado ** 2;

}



function tri(base, altura) {

  return parseFloat(base * altura) / 2;

}



function cir(raio) {

  return parseFloat(Math.PI.toFixed(2) * raio ** 2);

}



function ret(base, altura) {

  return parseFloat(base * altura);

}
function App05() {

    switch (forma) {
  
      case "Q":
  
        return (
  
          <div className="App05">
  
            <p>
  
              O seu quadrado mede {quad(lado)}
  
              cm²
  
            </p>
  
          </div>
  
        );
  
  
  
      case "T":
  
        return (
  
          <div className="App05">
  
            <p>
  
              O seu triangulo mede {tri(base, altura)}cm²
  
            </p>
  
          </div>
  
        );
  
  
  
      case "R":
  
        return (
  
          <div className="App05">
  
            <p>
  
              O seu retangulo mede {ret(base, altura)}cm²
  
            </p>
  
          </div>
  
        );
  
  
  
      case "C":
  
        return (
  
          <div className="App05">
  
            <p>
  
              O seu circulo mede {cir(raio)}cm²
  
            </p>
  
          </div>
  
        );
  
  
  
      default:
  
        return (
  
          <div className="App05">
  
            <p>
  
              Sua operação foi inválidada, aperte F5 e tente com inserções
  
              diferentes
  
            </p>
  
          </div>
  
        );
  
    }
  
  }
  
  
  
  export default App05;