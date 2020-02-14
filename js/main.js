/// Number of links
var links = document.getElementsByTagName('a').length

// Where does the last links sends to
var lastLint = document.getElementsByTagName('a')[6]

// Where does the link before the last sends to
var tolastlink = document.getElementsByTagName('a')[5]

// Number of links to send to https://wemanconnect.com
var wemanlinks = document.querySelectorAll("a[href='https://wemanconnect.com']").length

// Number of links in the third paragraph
var thirdLinks = document.getElementsByTagName('p')[2]
var urlThird = thirdLinks.getElementsByTagName('a').length

// In the results list show the following information 
var listaHija = document.getElementById("list"); // obtiene la lista
var result1 = document.createElement('li'); // crea un elemento de lista
var cont1 = document.createTextNode(links); // resultado 
result1.appendChild(cont1) // agrega a cada li el resultado
listaHija.appendChild(result1) // agregar el li al ul 



