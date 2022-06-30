let jugador1, jugador2;
let panelInicio, panelRondas;
let rondas = 0;
let respuestas = [];
let ganadores = [];
let panelResultados = document.getElementById('resultados');
let pGanJ1 = 0;
let pGanJ2 = 0;
let texto;

function iniciar(){
    //capturamos los nombres de los jugadores
    jugador1 = document.getElementById('jugador1').value;
    jugador2 = document.getElementById('jugador2').value;

    //Cambiamos los estilos de los paneles para mostrar u ocultar
    panelInicio = document.getElementById('inicio');
    panelRondas = document.getElementById('rondas');

    panelInicio.classList.remove('visible');
    panelInicio.classList.add('invisible');

    panelRondas.classList.remove('invisible');
    panelRondas.classList.add('visible');

    //cargar panel del jugador 1
    document.getElementById('tituloJ1').innerText='Turno Jugador ' + jugador1;
    document.getElementById('tituloJ2').innerText='Turno Jugador ' + jugador2;

    document.getElementById('respuestaJ1').classList.remove('invisible');
    document.getElementById('respuestaJ1').classList.add('visible');

    //incremento contador de rondas
    rondas ++;
    document.getElementById('contadorRonda').innerText = 'Ronda #' + rondas;
}

function seleccion(opcion, jugador){
    //agregamos respuesta del jugador
    respuestas.push(opcion);

    //validamos en que jugador estamos
    if(jugador === 1){
        document.getElementById('respuestaJ2').classList.remove('invisible');
        document.getElementById('respuestaJ2').classList.add('visible');
        document.getElementById('respuestaJ1').classList.remove('visible');
        document.getElementById('respuestaJ1').classList.add('invisible');
    }else{
        document.getElementById('respuestaJ2').classList.remove('visible');
        document.getElementById('respuestaJ2').classList.add('invisible');
        panelResultados.classList.remove('invisible');
        panelResultados.classList.add('visible');
        panelRondas.classList.remove('visible');
        panelRondas.classList.add('invisible');

        //ejecutamos logica del juego
        let ganador = validarGanador(respuestas);

        if(rondas<3){
            document.getElementById('contadorRondaRes').innerText = 'Resultado Ronda #' + rondas; 
            document.getElementById('ganador').innerText = ganador[rondas - 1];

            rondas ++;
        }else{
            document.getElementById('contadorRondaRes').innerText = 'Resultado Ronda #' + rondas; 
            document.getElementById('ganador').innerText = ganador[rondas - 1];
            let H1 = document.createElement('h1');
            

            if(pGanJ1 > pGanJ2){
                texto = document.createTextNode(jugador1);
            }else if(pGanJ2 > pGanJ1){
                texto = document.createTextNode(jugador2);
            }else{
                texto = document.createTextNode('empate');
            }

            H1.appendChild(texto);
            document.getElementById('resultados').appendChild(H1);
        }
    }
    

}

function validarGanador(respuestas){
    //validamos resultados
    //jugador 1
    switch (respuestas[0]){
        case 1:{
            if(respuestas[1]===1){
                //empate
                ganadores.push('empate');
            }else if(respuestas[1]===2){
                //ganador jugador 1
                ganadores.push(jugador1);
                pGanJ1 ++;
            }else{
                //ganador jugador 2
                ganadores.push(jugador2);
                pGanJ2 ++;
            }

            break;
        }
        case 2:{
            if(respuestas[1]===1){
                //ganador jugador 2
                ganadores.push(jugador2);
                pGanJ2 ++;
            }else if(respuestas[1]===2){
                //empate
                ganadores.push('empate');
            }else{
                //ganador jugador 1
                ganadores.push(jugador1);
                pGanJ1 ++;
            }
            break;
        }
        case 3:{
            if(respuestas[1]===1){
                //ganador jugador 1
                ganadores.push(jugador1);
                pGanJ1 ++;
            }else if(respuestas[1]===2){
                //ganador jugador 2
                ganadores.push(jugador2);
                pGanJ2 ++;
            }else{
                //empate
                ganadores.push('empate');
            }
            break;
        }
    }
    return ganadores;
}

function nuevaRonda(){

    panelRondas.classList.remove('invisible');
    panelRondas.classList.add('visible');
    panelResultados.classList.remove('visible');
    panelResultados.classList.add('invisible');

    document.getElementById('respuestaJ1').classList.remove('invisible');
    document.getElementById('respuestaJ1').classList.add('visible');

    respuestas = [];
}