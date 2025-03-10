
const album = document.querySelector('.album');
const totalImages = album.children.length;
const imageWidth = album.children[0].clientWidth + 20;
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');

let inicioF=document.getElementById('inicio_fotos');
let finalF=document.getElementById('final_fotos');

let contador=0;

function Actualizar(){
    inicioF.textContent=contador+1;
    finalF.textContent=totalImages;
}

siguiente.addEventListener('click', () => {
    if (contador < totalImages - 1) {
        contador++;
        album.style.transform = `translateX(-${contador * imageWidth}px)`;
        Actualizar();
    }
});

anterior.addEventListener('click', () => {
    if (contador >0) {
        contador--;
        album.style.transform = `translateX(-${contador * imageWidth}px)`;
        Actualizar();
    }
});

Actualizar();

window.addEventListener('DOMContentLoaded', function() {
    var frases = document.querySelectorAll('.frase');
    let inicio=document.querySelector('.inicio');
    function mostrarFrases() { 
        for (var i = 0; i < frases.length; i++) {
            (function(index) {
                setTimeout(function() {
                    frases[index].classList.add('visible');

                    setTimeout(function() {
                        frases[index].classList.add('despaparecer');
                        
                        setTimeout(function() {
                            frases[index].remove();
                            if (index===frases.length-1){
                                inicio.remove();
                            }
                        }, 600);
                    }, 2000);
                }, index * 3000);
            })(i);
        }
    }
    mostrarFrases();  // Llamar la función cuando se cargue la página
});
