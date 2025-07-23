/* Ejercicio 1 */
console.clear();
console.log(`Ejercicio 1: Verificación de número favorable`);
let numero = 8;

console.log(`Resultado con ifs:`);
if (numero > 5 && numero < 15) {
  console.log(`El número ${numero} es favorable`);
} else if (numero === 55 || numero === 70) {
    console.log(`El número ${numero} es favorable`);
    }
else {
  console.log(`El número ${numero} no es favorable`);
}

let mensaje = ((numero > 5 && numero < 15) || numero === 55 || numero === 70)
  ? `El número ${numero} es favorable ya que tiene mas opciones de ganar`
  : `El número ${numero} no es favorable ya que tiene menos opciones de ganar`;

console.log(`Resultado con operadores ternarios: ${mensaje}`);


let esFavorable = (numero > 5 && numero < 15) || numero === 55 || numero === 70;

let mensaje1 = esFavorable ? "es favorable ya que tiene más opciones de ganar" : "no es favorable ya que tiene menos opciones de ganar";

console.log(`Resultado con operadores ternarios opcion 2:El número ${numero} ${mensaje1}`);

/* Ejercicio 2 */
console.log(`Ejercicio 2: Verificación de año bisiesto`);

let anio = 2000;

if (anio < 0) {
  console.log(`El año ${anio} es Año inválido`);
} else if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
  console.log(`El año ${anio} es bisiesto`);
} else {
  console.log(`El año ${anio} no es bisiesto`);
}

let mensajeanio = (anio < 0)
  ? `Año inválido: ${anio}`
  : ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0))
    ? `El año ${anio} es bisiesto`
    : `El año ${anio} no es bisiesto`;

console.log(mensajeanio);

console.log(`Ejercicio 3: Verificación de resultado tenis`);

let jugadorA = 0; // Cambia según el resultado
let jugadorB = 5;

if (jugadorA < 0 || jugadorB < 0 || jugadorA > 7 || jugadorB > 7) {
  console.log("Resultado inválido");
} else if ((jugadorA === 7 && (jugadorB === 5 || jugadorB === 6)) ||
           (jugadorA === 6 && jugadorB <= 4)) {
  console.log("A ganó el set");
} else if ((jugadorB === 7 && (jugadorA === 5 || jugadorA === 6)) ||
           (jugadorB === 6 && jugadorA <= 4)) {
  console.log("B ganó el set");
} else if (jugadorA === jugadorB) {
  console.log("El set esta empatado");
} else {
  console.log("El set todavia no termina");
}

let resultadoTenis = (jugadorA < 0 || jugadorB < 0 || jugadorA > 7 || jugadorB > 7)
  ? "Resultado inválido"
  : ((jugadorA === 7 && (jugadorB === 5 || jugadorB === 6)) ||
     (jugadorA === 6 && jugadorB <= 4))
    ? "A ganó el set"
    : ((jugadorB === 7 && (jugadorA === 5 || jugadorA === 6)) ||
       (jugadorB === 6 && jugadorA <= 4))
      ? "B ganó el set"
      : (jugadorA === jugadorB)
        ? "El set esta empatado"
        : "El set todavia no termina";
console.log(`Resultado con operadores ternarios: ${resultadoTenis}`);
