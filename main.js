const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    //não precisa colocar igual igual a nulo pois javascript ja sabe
    if (elemento && elemento.localName === 'audio'){
        elemento.play();    
    }
    else{
        console.log('Elemento não encontrado'); 
    }
}

for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){
            tecla.classList.remove('ativa');
        }
    }
}


