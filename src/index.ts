let numero1 = <HTMLInputElement>document.getElementById("numero1");
let btnCargar = <HTMLButtonElement>document.getElementById("btnCargar");
let Divresultado = <HTMLParagraphElement>document.getElementById("resultado");
let numN = Number(numero1.value);
let indice: number;
let arr1: number[] = new Array(numN);
function Cargar(arr1: number) {
  let N: number;
  N = numN;
  for (indice = 0; indice < numN; indice++) {
    arr1[indice] = N;
    N = N - 1;
  }
}
btnCargar.addEventListener("click", () => {
  numN = Number(numero1.value);
  Cargar(arr1);
  Divresultado.innerHTML = `El arreglo queda de esta forma ${arr1}`;
});
