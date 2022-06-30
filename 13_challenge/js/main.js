let usuarios = [
    {
    nombre : "Carlos",
    password : "Korner",
    saldo : 100
},{
    nombre : "Angelica",
    password : "FatCat",
    saldo : 200
}
]

let usuario = {

}



function validarUsuario(value){
    usuario = usuarios.find((usuario) => value == usuario.nombre)
    return usuario
}
function validarPassword(value){
    password = usuarios.find((password) => value == usuario.password)
    return password
}
function login(form){
    if (validarUsuario(form.u.value)) {
        if (validarPassword(form.p.value)) {
            location = "principal.html";
        } else {
            alert("Error de password");
        }
    } else {
        alert("Error de Usuario");
    }
}

/*const parrafo = document.createElement("h3");
const nodeDeTexto = document.createTextNode("Bienvenido" + (usuario));
parrafo.appendChild(nodeDeTexto);*/

function exit(form) {
    location = "index.html";
}

function formula() {
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    document.getElementById('c1').value = (cantidad1 + cantidadT);
}
function formula2() {
    var cantidadT = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    document.getElementById('c1').value = (cantidad1 - cantidadT);
}