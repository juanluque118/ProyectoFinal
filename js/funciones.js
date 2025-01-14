// Al hacer click en cualquier miniatura a la modal se le pone la clase VISIBLE
// Al hacer click en la modal en cualquier parte, a la modal se le quita la clase VISIBLE

//Selección de elementos
const mini = document.querySelectorAll(".fotos a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img")
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0; //podria ser cualquier numero


mini.forEach( (imagen,i) => {
    
    imagen.addEventListener("click", evento => {
        evento.preventDefault();//previene el comportamiento predeterminado del enlace
        imgActual = i; //Actualiza el indice con el de la minuatura clicada
        imgModal.setAttribute("src",imagen.getAttribute("href")); //Cambia la imagen del modal al enlace de la miniatura clicada
        modal.classList.add("visible"); // Muestra el modal añadiendo la clase "visible"
    });
});
//Al hacer click fuera de la imagen oculta la modal quitando la clase "visible"
modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

//la i va a representar 0 < y 1 >
flechas.forEach((flecha,i) => {
    flecha.addEventListener("click", evento => {
        evento.stopPropagation(); //interrumpe el bubbling. Evita que se active cualquier addeventlistener en el bubbling

        //Si el botón es el primero (i == 0), mueve hacia atrás en las imágenes
        if(i == 0){
            //Si no estamos en la primera imagen, retrocede; si estamos en la primera, vuelve a la última
            imgActual = imgActual > 0 ? imgActual - 1 : mini.length - 1;
        }else{
            //Si no estamos en la última imagen, avanza; si estamos en la última, vuelve a la primera
            imgActual = imgActual < mini.length - 1 ? imgActual + 1 : 0;
        };
        //Actualiza la imagen del modal al nuevo índice calculado
        imgModal.setAttribute("src", mini[imgActual].getAttribute("href"));
    });
});