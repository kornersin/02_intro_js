let edad;
let actual; //año
let dondeResides;
let estasEmbarazada;
let genero;
let semanasGestacion;
let resultado;

//solicitar datos a usuario
actual = Number(prompt('Digita el año actual'));
edad = Number(prompt('¿Cuál es tu año de nacimiento?'));
dondeResides = prompt('¿Eres del norte del país?');
genero = prompt('¿Cuál es tu género?')
estasEmbarazada = prompt('¿Estas embarazada?');
semanasGestacion = Number(prompt('¿Cuántas semanas de gestación tienes?'));

//Lógica
// if (edad - actual < 18)


if (actual - edad < 18) {
    resultado = 'NO te puedes vacunar';
} else {
    if (dondeResides === 'No'){
        resultado = 'NO te puedes vacunar';
    }
    else {
        if (genero === 'F') {
            if (estasEmbarazada === 'si' ) {
                if (semanasGestacion <= 9)
                resultado = 'NO te puedes vacunar';
            }
        } else {
            
        }
    }
}