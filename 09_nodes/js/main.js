//se crea etiqueta <a></a>
const link = document.createElement ("a");
//se crea texto "Ir a Google"
const linkTexto = document.createTextNode("Ir a Google");
//<a>Ir a Google</a>
link.appendChild(linkTexto);
// href=""
const linkAtributo = document.createAttribute("href");
// href="https://www.google.com"
linkAtributo.value = "https://www.google.com";
//<a href="https://www.google.com">Ir a Google</a>
link.setAttributeNode(linkAtributo);

first.appendChild(link);