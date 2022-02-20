
// Scipts JS llamado desde Index.html
// Función que valida número ingresado por usuario
 let validacion = (n) => {
  while (n <= 0 || n > 20){
      n = parseInt(prompt("Número fuera de rango!!"));
   }
   return n;
}


// Función que calcula la multiplicación
let mul = (n) => {
  for(let i = 1; i <= n; i++){
    document.write(i + " X " + n + " = " + i*n + "<br>");
  }
}

// CALCULO FACTORIAL

fac = (n) => {
  for(let i = 1; i <= n; i++){
    let j = 1;
    let factorial = 1;
    for(j = 1; j <= i; j++){
        factorial = factorial * j;
    }
    document.write("Factorial de " + i + " es: " + factorial + "<br>");
  }
}

let numero = parseInt(prompt("Escriba un número entre 1 y 20"));
numero = validacion(numero);
mul(numero);
fac(numero);
