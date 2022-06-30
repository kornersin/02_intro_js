const miArray = [];

const otroArray = [ "Nombre", "apellido", "apellido2", "edad", "ciudad"];
console.log(otroArray.length);
console.log(otroArray[0]);
// console.log(otroArray.shift());
console.log(otroArray[Math.round((otroArray.length - 1) / 2)]);



//objetos
const perro = {
    nombre: "choco",
    edad: 17,
    color: "cafe",
    ladrar: function (){
        console.log("guau guau")
    }
};

console.log(perro.nombre);
perro.nombre = "goya"
console.log(perro.nombre);

perro.id = 0;
console.log(perro.id);

