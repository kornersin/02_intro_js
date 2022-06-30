// const colores = ["green", "red", "yellow"];

const colores = {
    green: "green",
    red: "red",
    yellow: "yellow",
}; 

const RED = 3;
const YELLOW = 2;
const GREEN = 1;

const colorApagado = "#ececec";
let color;
let luzActual = -1;
let siguienteLuz;
let anteriorLuz;

const RED = {
    color : "green",
    siguienteLuz : "green",
    anteriorLuz : "red",
    luzActual : GREEN,
}

const GREEN = {
    color : "yellow",
    siguienteLuz : "yellow",
    anteriorLuz : "green",
    luzActual : YELLOW,
}

const YELLOW = {
    color : "red",
    siguienteLuz : "red",
    anteriorLuz : "yellow",
    luzActual : RED,
}
function cambiarLuz() {
  switch (luzActual) {
    case RED:
    //   color = "green";
    //   siguienteLuz = "green";
    //   anteriorLuz = "red";
    //   luzActual = GREEN;
      break;
    case GREEN:
    //   color = "yellow";
    //   siguienteLuz = "yellow";
    //   anteriorLuz = "green";
    //   luzActual = YELLOW;
      break;
    case YELLOW:
    //   color = "red";
    //   siguienteLuz = "red";
    //   anteriorLuz = "yellow";
    //   luzActual = RED;
      break;
    default:
      color = "red";
      siguienteLuz = "red";
      luzActual = RED;
      break;
  }

  const prederLuz = document.getElementById(siguienteLuz);
  prederLuz.style.backgroundColor = color;

  const apagarLuz = document.getElementById(anteriorLuz);
  apagarLuz.style.backgroundColor = colorApagado;
  /* Es posible agregar un atributo de estilo con un valor a un elemento con setAttribute,
  pero no se recomienda porque puede sobrescribir las otras propiedades existentes,
  en el atributo de estilo. */
  // elem.setAttribute("style", "background-color: red;");
}

setInterval(cambiarLuz, 2000);
// cambiarLuz();