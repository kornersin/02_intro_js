/*Desafio:
1. Solicita nombre y apellido al usuario y crear un array con esos datos
2. Solicitar los nombres completos de los miembros de la familia separados por (,)
3. Convertir esos nombres a un array de nombres de la familia y mostrarlo en consola.
4. Combinar los dos arrays en uno solo y reodenarlo de atras hacia adelante y lo vamos a mostrar al usuario.
5. Agregar las validaciones que crean necesarias.
*/

let nombreUsuario = [];
let nombreFamilia = [];


nombreUsuario.push(prompt('cual es tu nombre'));
console.log(nombreUsuario);

nombreFamilia.push(prompt('Ingrese nombre completo de la familia separado por comas'));
console.log(nombreFamilia);

arrayFamilia = nombreFamilia.split(',')
console.log(arrayFamilia);
