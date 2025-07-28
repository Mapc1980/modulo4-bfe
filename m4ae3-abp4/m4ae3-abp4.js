    console.log("📌 1. Crear arreglo de largo n con el doble del anterior (inicio en 1)");
    let n = 7;
    console.log("Largo del arreglo:", n);
    let arregloDobles = [];
    let valor = 1;
    for (let i = 0; i < n; i++) {
      arregloDobles.push(valor);
      valor *= 2;
    }
    console.log("Resultado:", arregloDobles);

    console.log("\n📌 2. Obtener el mayor número de un arreglo de largo 10");
    let arreglo10 = [5, 9, 2, 8, 15, 1, 23, 7, 6, 12];
    console.log("Arreglo:", arreglo10);
    let mayor = arreglo10[0];
    for (let i = 1; i < arreglo10.length; i++) {
      if (arreglo10[i] > mayor) {
        mayor = arreglo10[i];
      }
    }
    console.log("Mayor número:", mayor);

    console.log("\n📌 3. Obtener día de la semana desde número (1 = Lunes)");
    let numeroDia = 4;
    console.log("Número ingresado:", numeroDia);
    let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let diaResultado = (numeroDia >= 1 && numeroDia <= 7) ? diasSemana[numeroDia - 1] : "Número inválido";
    console.log("Día correspondiente:", diaResultado);

    console.log("\n📌 4. Buscar un número en un arreglo de hasta 100 elementos");
    let arregloBusqueda = [];
    for (let i = 0; i < 100; i++) {
      arregloBusqueda.push(Math.floor(Math.random() * 1000));
    }
    let valorBuscado = arregloBusqueda[25]; // Usamos un valor que sí existe
    let encontrado = false;
    for (let i = 0; i < arregloBusqueda.length; i++) {
      if (arregloBusqueda[i] === valorBuscado) {
        console.log(`Elemento ${valorBuscado} encontrado en la posición ${i}`);
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      console.log(`Elemento ${valorBuscado} no encontrado.`);
    }

    console.log("\n📌 5. Ordenar arreglo ascendentemente");
    let arregloDesordenado = [9, 2, 7, 4, 1];
    console.log("Arreglo original:", arregloDesordenado);
    for (let i = 0; i < arregloDesordenado.length - 1; i++) {
      for (let j = i + 1; j < arregloDesordenado.length; j++) {
        if (arregloDesordenado[i] > arregloDesordenado[j]) {
          let temp = arregloDesordenado[i];
          arregloDesordenado[i] = arregloDesordenado[j];
          arregloDesordenado[j] = temp;
        }
      }
    }
    console.log("Ordenado:", arregloDesordenado);