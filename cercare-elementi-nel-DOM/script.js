/*
Cerca tutti gli elementi con classe "paragrafo".
Cerca l' elemento con id "elemento-3"
Cerca tutti gli elementi h2 della pagina
*/

const paragraphElements = document.querySelectorAll(".paragrafo")
const thirdElement = document.getElementById("elemento-3")
const headingElements = document.getElementsByTagName("h2")

console.log(paragraphElements)
console.log(thirdElement)
console.log(headingElements)
