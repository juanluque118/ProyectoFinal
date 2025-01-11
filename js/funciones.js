// Al hacer click en cualquier miniatura a la modal se le pone la clase VISIBLE
// Al hacer click en la modal en cualquier parte, a la modal se le quita la clase VISIBLE

const mini = document.querySelectorAll(".fotos a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img")
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0; //podria ser cualquier numero


mini.forEach( (imagen,i) => {
    
    imagen.addEventListener("click", evento => {
        evento.preventDefault();
        imgActual = i;
        imgModal.setAttribute("src",imagen.getAttribute("href"));
        modal.classList.add("visible");
    });
});

modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

//la i va a representar 0 < y 1 >
flechas.forEach((flecha,i) => {
    flecha.addEventListener("click", evento => {
        evento.stopPropagation(); //interrumpe el bubbling. Evita que se active cualquier addeventlistener en el bubbling

        if(i == 0){
            imgActual = imgActual > 0 ? imgActual - 1 : mini.length - 1;
        }else{
            imgActual = imgActual < mini.length - 1 ? imgActual + 1 : 0;
        };
        imgModal.setAttribute("src", mini[imgActual].getAttribute("href"));
    });
});