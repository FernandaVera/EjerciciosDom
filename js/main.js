//*------////////// DOM 1 /////////-------*
/// Number of links
var links = document.getElementsByTagName("a").length;
// Where does the last links sends to
var lastLink = document.getElementsByTagName("a")[6];
// Where does the link before the last sends to
var toLastLink = document.getElementsByTagName("a")[5];
// Number of links to send to https://wemanconnect.com
var wemanLinks = document.querySelectorAll("a[href='https://wemanconnect.com']")
  .length;
// Number of links in the third paragraph
var thirdLinks = document.getElementsByTagName("p")[2];
var urlThird = thirdLinks.getElementsByTagName("a").length;
// In the results list show the following information
var listaHija = document.getElementById("list"); // obtiene la lista
var result1 = document.createElement("li"); // crea un elemento de lista // desde aquí se repite el proceso
var cont1 = document.createTextNode(links); // resultado
result1.appendChild(cont1); // agrega a cada li el resultado
listaHija.appendChild(result1); // agregar el li al ul
// agrega segundo resultado
var result2 = document.createElement("li");
var cont2 = document.createTextNode(lastLink);
result2.appendChild(cont2);
listaHija.appendChild(result2);
// agrega tercer resultado
var result3 = document.createElement("li");
var cont3 = document.createTextNode(toLastLink);
result3.appendChild(cont3);
listaHija.appendChild(result3);
// agrega cuarto resultado
var result4 = document.createElement("li");
var cont4 = document.createTextNode(wemanLinks);
result4.appendChild(cont4);
listaHija.appendChild(result4);
// agrega quinto resultado
var result5 = document.createElement("li");
var cont5 = document.createTextNode(urlThird);
result5.appendChild(cont5);
listaHija.appendChild(result5);

////*------////////// DOM 2 /////////-------*

function display() {
  var showText = document.getElementsByClassName("aditional hidden");
  return showText[0].classList.remove("hidden");
}
display(showText[0]);

////*------////////// DOM 3 /////////-------*

function add() {
  var newList = document.createElement("li");
  var newAdd = document.createTextNode("Random text");
  newList.appendChild(newAdd);
  return list.appendChild(newList);
}
