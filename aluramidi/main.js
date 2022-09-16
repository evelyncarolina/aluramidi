// document = acessa o documento html 
// querySelector = busca o seletor do elemento informado
// retorna o que foi informado exemplo id, classe, elemento
// function sempre tem que ter um NOME

function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado!');
    }
}

// //#onclick é um atributo então precisa passar um valor
// se que queremos guardar uma função dentro de um atributo "ONCLICK" precisa retirar os parenteses "()"
// #const é uma variavel que o valor é constante, não pode ser alterado

const listaDeTeclas = document.querySelectorAll('.tecla');

/**
let contador = 0;

while (contador < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
    contador = contador + 1;
    //console.log(contador);
}
 */

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
       
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }

}

