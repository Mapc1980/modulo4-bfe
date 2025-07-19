const nombre1 = "Camisa";
let precio1 = 39000;
let cantidad1 = 1;

const nombre2 = "Pantalón";
let precio2 = 29000;
let cantidad2 = 2;

const nombre3 = "Abrigo";
let precio3 = 79000;
let cantidad3 = 1;

let total1 = 0;
let total2 = 0;
let total3 = 0;

if (cantidad1 > 0) {
  total1 = (precio1 * cantidad1);
}

if (cantidad2 > 0) {
  total2 = (precio2 * cantidad2);
}

if (cantidad3 > 0) {
  total3 = (precio3 * cantidad3);
}

let total = total1 + total2 + total3;

let neto = total / 1.19;

let iva = total - neto;

let despacho = 0;

if (total >= 100000) {
  despacho = total * (5 / 100);
} else {
  despacho = 0;
}

totalfinal = total + despacho;

/* console.log(despacho.toFixed(0) + " es el valor del despacho");
 */
console.clear();
console.log("------------------------------------");
console.log("Te lo vendo");
console.log("------------------------------------");

console.table([
  { Producto: nombre1, Cantidad: cantidad1, Precio: "$" + precio1, Total: "$" + total1 },
  { Producto: nombre2, Cantidad: cantidad2, Precio: "$" + precio2, Total: "$" + total2 },
  { Producto: nombre3, Cantidad: cantidad3, Precio: "$" + precio3, Total: "$" + total3 }
]);

console.log("************************************");
console.log("Valor Neto: $" + neto.toFixed(0));
console.log("IVA (19%): $" + iva.toFixed(0));
console.log("Despacho: $" + despacho.toFixed(0));
console.log("TOTAL FINAL: $" + totalfinal.toFixed(0));
console.log("************************************");
