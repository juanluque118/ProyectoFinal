//1 seleccionar nav, abrir y cerrar



const nav = document.querySelector("nav");
const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".cerrar");

//2 al hacer click en abrir a nav se le pone la clase desplegado
abrir.addEventListener("click", function(){
    nav.className = "desplegado";
});

//3 al hacer click en cerrar a nav se le quita la clase desplegado
cerrar.addEventListener("click", function(){
    nav.className = "";
});