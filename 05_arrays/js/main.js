//Variables
let miArray = [];

//Mostrar cantidad de elementos en el array
console.log(miArray.length);

//Agregamos valores al array
miArray.push(prompt('ingresa el nombre de una fruta'));
console.log(miArray);
miArray.push(prompt('Ingresa el nombre de otra fruta'));
console.log(miArray);

//Agregar elemento al inicio del array
miArray.unshift('mandarina');
console.log(miArray);

//Eliminar el útlimo elemento del array
miArray.pop();
console.log(miArray);

//Eliminar el primer elemento del array
miArray.shift();
console.log(miArray);

//Extraer palabra de un sting y convertirlas en un array
let nombreCompleto = 'Carlos Eduardo Gonzalez Hernandez';
let arregloNombre = nombreCompleto.split(' ');
console.log(arregloNombre);

//Eliminar elemntos de un array a partir de su indice
let arregloApellidos = arregloNombre.slice(2);
console.log(arregloApellidos);
let arregloPrimerApellido = arregloNombre.slice(2,3);
console.log(arregloPrimerApellido);

//Agergar elementos al array en una posisción específica y reemplazar si queremos
let arregloCualquiera = arregloApellidos.splice(1,1, nombreCompleto);
console.log(arregloApellidos);
//
arregloApellidos.splice(1,1, nombreCompleto);
console.log(arregloApellidos);
//
arregloApellidos.splice(1,0, nombreCompleto);
console.log(arregloApellidos);

//Sort ordenar los elementos de un array alfabeticamente
let arrayOrdenardo = arregloNombre.sort();
console.log(arrayOrdenardo);

//Reverse Modificar el array a la inversa
arrayOrdenardo.reverse();
console.log(arrayOrdenardo);

//Concat 
let arregloConcatenado = arregloNombre.concat(arrayOrdenardo, arregloApellidos);
console.log(arregloConcatenado);