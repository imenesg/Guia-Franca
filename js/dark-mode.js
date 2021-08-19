const lampada = document.querySelector(".lampada");

lampada.addEventListener("click", colorChange);

var contador = 0;
function colorChange(){
    
    const html = document.querySelector("html");

    if(contador == 0){
        html.classList.remove("escuro");
        contador = 1;
    }
    else{
        html.classList.add("escuro");
        contador = 0;
    }
    
}