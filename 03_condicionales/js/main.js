// primer paso: Definir las variables que voy a necesitar
let nombreCompleto;
//se pueden declarar dos variables en una sola línea separadas por una coma
let anioActual, anioNacimiento;
let edad;
let resultado;

// Segundo paso: Solicitar los datos
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = Number(prompt('Digita el año actual'));
anioNacimiento = Number(prompt('Digita el año de tu nacimiento'));

//Tercer paso: Desarrollo de la lógica
// if (typeof(anioActual) === 'number' && typeof(anioNacimiento) === 'number'){
//     edad = anioActual - anioNacimiento;
//     resultado = `Hola ${nombreCompleto}, tu edad aproximada es: ${edad}`;
// } else {
//     resultado = 'Porfavor ingresa años válidos';
// }

if(isNaN(anioActual) || isNaN(anioNacimiento)){
    resultado = 'Porfavor ingresa años válidos';
} else{
    edad = anioActual - anioNacimiento;
    resultado = `Hola ${nombreCompleto}, tu edad aproximada es: ${edad}`;
}

//Cuarto paso: Mostrar los resultados
document.write(resultado);