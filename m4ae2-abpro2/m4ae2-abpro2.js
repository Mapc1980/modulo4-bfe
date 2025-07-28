    let totalNeto = 0;
    let seguirComprando = true;

    let precioPolera = 12000;
    let precioPantalon = 25000;
    let precioZapatos = 40000;

    let cantPoleras = 0;
    let cantPantalones = 0;
    let cantZapatos = 0;

    while (seguirComprando) {
      let opcion = prompt(`🛍️ MENÚ DE PRODUCTOS:
1. Polera ($${precioPolera})
2. Pantalón ($${precioPantalon})
3. Zapatos ($${precioZapatos})
4. Finalizar compra

Elige una opción (1 a 4):`);

      if (opcion === "1") {
        let cantidad = parseInt(prompt("¿Cuántas poleras deseas comprar?"));
        if (!isNaN(cantidad) && cantidad > 0) {
          totalNeto += precioPolera * cantidad;
          cantPoleras += cantidad;
        } else {
          alert("Cantidad inválida.");
        }
      } else if (opcion === "2") {
        let cantidad = parseInt(prompt("¿Cuántos pantalones deseas comprar?"));
        if (!isNaN(cantidad) && cantidad > 0) {
          totalNeto += precioPantalon * cantidad;
          cantPantalones += cantidad;
        } else {
          alert("Cantidad inválida.");
        }
      } else if (opcion === "3") {
        let cantidad = parseInt(prompt("¿Cuántos pares de zapatos deseas comprar?"));
        if (!isNaN(cantidad) && cantidad > 0) {
          totalNeto += precioZapatos * cantidad;
          cantZapatos += cantidad;
        } else {
          alert("Cantidad inválida.");
        }
      } else if (opcion === "4") {
        seguirComprando = false;
      } else {
        alert("Opción inválida. Intenta nuevamente.");
      }
    }

    let iva = totalNeto * 0.19;
    let despacho = totalNeto > 50000 ? 0 : 3000;
    let totalFinal = totalNeto + iva + despacho;

    console.log(`🧾 RESUMEN DE COMPRA
-------------------------------
Detalle de productos:
${cantPoleras} x Polera      = $${cantPoleras * precioPolera}
${cantPantalones} x Pantalón   = $${cantPantalones * precioPantalon}
${cantZapatos} x Zapatos     = $${cantZapatos * precioZapatos}
-------------------------------
Valor Neto      : $${totalNeto}
IVA (19%)       : $${iva.toFixed(0)}
Despacho        : $${despacho}
-------------------------------
TOTAL A PAGAR   : $${totalFinal.toFixed(0)}
¡Gracias por tu compra!`);