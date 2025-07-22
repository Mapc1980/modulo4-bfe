
const tipoCambio = 745;
let montoDolares = 150.75; 

console.log(typeof montoDolares); 
const esNumero = typeof montoDolares === "number";

if (esNumero) {
  const montoPesos = montoDolares * tipoCambio;
  console.log("El monto en pesos chilenos es: " + montoPesos);
} else {
  console.log("Ingrese un monto válido en dólares.");
}


let edad = 21;
let tieneCedula = true;
let ahorroUF = 5;
let porcentajeRSH = 55;

if (edad >= 18 && tieneCedula && ahorroUF >= 4 && porcentajeRSH <= 70) {
  console.log("Puede postular al subsidio.");
} else {
  console.log("No cumple con los requisitos.");
}
