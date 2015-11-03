"use strict";

let testReduce = (() => {
    let valorFinal = [0,1,2,3,4].reduce(function(valorPrevio, valorActual, indice, array){
        return valorPrevio + valorActual;
    });

    console.log(valorFinal);
})();