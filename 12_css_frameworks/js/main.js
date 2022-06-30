const arrayDeTextos = [{}];
document.addEventListener("click", crearElementoLista);

function generarLista(texto){
    document.getElementById('listGroup').innerHTML += `<li class="list-group-item">${texto}</li>`
}

function crearElementoLista(){
    const value = document.querySelector("#tarea").value;
    generarLista(value)
    
}