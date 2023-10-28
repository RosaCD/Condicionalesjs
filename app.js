// Las condicionales: if, if else, switch

// let numero1 = 2;
// let numero2 = 20;

// if (numero1 > numero2) {
//     console.log("El número: " + numero1 + " es mayor que el número " + numero2);
// } else {
//     console.log("El número: " + numero2 + " es mayor que el número " + numero1);
// }

// let edad = prompt("Dame tu edad");
 
// if (edad>0) {
//     if (edad>=18) {
//         document.write("Eres mayor de edad");
//     } else {
//         document.write("Eres menor de edad");
//     }
// } else {
//     document.write("Edad no valida");
// }

// let dia = prompt("Dame el dia de la semana").toLowerCase();
// switch (dia) {
//     case "lunes":
//         console.log("El dia que seleccionaste es Lunes");        
//         break;
//     case "martes":
//         console.log("El dia que seleccionaste es Martes");        
//         break;
//     case "miercoles":
//         console.log("El dia que seleccionaste es Miercoles");        
//         break;
//     case "jueves":
//         console.log("El dia que seleccionaste es Jueves");        
//         break;
//     case "viernes":
//         console.log("El dia que seleccionaste es Viernes");        
//         break;
//     default:
//         console.log("Esta opcion no existe");
//         break;
// }

// Opererador ternario

// let numero1 = 15;
// let numero2 = 20;
// // condicion ? True : False  (? = if de true y false, Los dos puntos dividen el true y false)
// let valor = (numero1 > numero2) ? "El número 1 es mayor al número 2": "El número 2 es mayor al número1";
// console.log(valor);

// let numero1 = prompt("Escribe un número");
// let numero2 = prompt("Escribe otro número");
// if (numero1!=numero2) {
//     if (numero1 > numero2) {
//         document.write("El numero " + numero1 + " es mayor al " + numero2); 
//     } else {
//         document.write("El numero " + numero2  + " es mayor al " + numero1); 
//     }
// } else {
//     document.write("Los numeros son iguales")
// } 

// let numero1 = prompt("Escribe un número");

// if ( numero1 % 2 === 0) {
//     console.log("Tu numero es par");
// } else {
//     console.log("Tu numero es impar");
// }

// let numero1 = prompt("Escribre un número");
// let numero2 = prompt("Escribre otro número");
// if (numero1 !=0 && numero2 !=0) {
//     let resultado = numero1/numero2;
//     console.log(resultado);
// } else {
//     console.log("Error");
// }

function Subir() {
    let oper= Number(document.getElementById("Operacion").value);
    switch (oper) {
        case 1:
            let numero1 = prompt ("Escribe un numero");
            let numero2 = prompt ("Escribe otro numero");
            let resultado = Number(numero1)+ Number(numero2);
            document.write ("El resultado de la suma de " + numero1 + "+" + numero2 + " es " + resultado);
            break;
            case 2:
            let numero3 = prompt("Escribe un numero");
            let numero4 = prompt("Escribe otro numero");
            let resultado1 = numero3 - numero4;
            document.write ("El resultado de la suma de " + numero3 + "-" + numero4 + " es " + resultado1);
            break;
            case 3:
            let numero5 = prompt("Escribe un numero");
            let numero6 = prompt("Escribe otro numero");
            let resultado2 = numero5 * numero6;
            document.write ("El resultado de la suma de " + numero5 + "*" + numero6 + " es " + resultado2);
            break;
            case 4:
            let numero7 = prompt("Escribe un numero");
            let numero8 = prompt("Escribe otro numero");
            let resultado3 = numero7 / numero8;
            document.write ("El resultado de la suma de " + numero7 + "/" + numero8 + " es " + resultado3);
            break;
        default: 
        document.write ("Elige una operacion valida");
            break;
    }
    
}

