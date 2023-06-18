var larghezza = "";
var altezza = "";
 function Inizializza() {
  if (document.all) {
   larghezza = TextScroll.offsetWidth;
   altezza = TextScroll.offsetHeight;
   setInterval("TextScroll_IE()", 1);
   TextScroll.style.visibility = "Visible";
  }
  else if (document.layers) {
   larghezza = document.TextScroll.document.width;
   altezza = document.TextScroll.document.height;
   setInterval("TextScroll_NN()", 1);
   document.TextScroll.visibility = "Show";
  }
 }
 function TextScroll_IE() {
  TextScroll.style.pixelLeft = document.body.scrollLeft + document.body.clientWidth - larghezza - 10;
  TextScroll.style.pixelTop = document.body.scrollTop + document.body.clientHeight - altezza - 10;
 }
 function TextScroll_NN() {
  document.TextScroll.left = pageXOffset + window.innerWidth - larghezza - 10;
  document.TextScroll.top = pageYOffset + window.innerHeight - altezza - 10;
 }
window.onload = Inizializza;