// Función para solicitar un número válido al usuario
function solicitarNumero() {
    let numero;
  
    // Validar que el dato ingresado sea un número válido
    while (true) {
      let entrada = prompt("Ingresa un número entero positivo para la serie de Fibonacci:");
      numero = parseInt(entrada);
  
      if (!isNaN(numero) && numero > 0) {
        break; // Sale del ciclo si el número es válido
      } else {
        alert("Error: Debes ingresar un número entero positivo válido.");
      }
    }
  
    return numero;
  }
  
  // Función para generar la serie de Fibonacci
  function generarFibonacci(n) {
    let serie = [];
  
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        serie.push(0);
      } else if (i === 1) {
        serie.push(1);
      } else {
        serie.push(serie[i - 1] + serie[i - 2]);
      }
    }
  
    return serie;
  }
  
  // Ejecutar el programa
  let cantidadNumeros = solicitarNumero();
  let serieFibonacci = generarFibonacci(cantidadNumeros);
  
  // Mostrar el resultado en consola y en el DOM
  console.log(`Serie de Fibonacci con ${cantidadNumeros} términos: ${serieFibonacci.join(", ")}`);
  document.getElementById("resultado").innerText = `Serie de Fibonacci (${cantidadNumeros} términos): ${serieFibonacci.join(", ")}`;
  