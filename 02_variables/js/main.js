// primer paso: Definir las variables que voy a necesitar
let nombreCompleto;
//se pueden declarar dos variables en una sola línea separadas por una coma
let anioActual, anioNacimiento;
let edad;

// Segundo paso: Solicitar los datos
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = prompt('Digita el año actual');
anioNacimiento = prompt('Digita el año de tu nacimiento');

//Tercer paso: Desarrollo de la lógica
edad = anioActual - anioNacimiento;
edad = Number(anioActual) - Number(anioNacimiento);

//Cuarto paso: Mostrar los resultados
document.write('Hola ' + nombreCompleto + ', tu edad aproximada es: ' + edad +' años')