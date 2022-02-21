
// Scripts JS llamado desde Index.html
// Función que valida número ingresado por usuario
 let validacion = (n) => {
  while (n < 1 || n > 20){
      n = parseInt(prompt("Número fuera de rango!!"));
   }
   return n;
}


// Función que calcula la multiplicación
let mul = (n) => {
  for(let i = 1; i <= n; i++){

    // Las salidas por pantalla se lleva por consola de acuerdo a lo solicitadp
    // al mismo tiempo se despiega mediante document.write
   document.write(i + " X " + n + " = " + i*n + "<br>");
     console.log(i + " X " + n + " = " + i*n + "<br>");
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

    // Las salidas por pantalla se lleva por consola de acuerdo a lo solicitadp
    // al mismo tiempo se despiega mediante document.write
    document.write("Factorial de " + i + " es: " + factorial + "<br>");
    console.log("Factorial de " + i + " es: " + factorial + "<br>");
  }
}

let numero = parseInt(prompt("Escriba un número entre 1 y 20"));
let num = validacion(numero);
mul(num);
fac(num);
