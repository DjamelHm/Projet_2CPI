const nbEnreg = document.getElementById('nbEnregistrements');
const ajouter = document.getElementById('ajoutEnreg');
const enregistrements = document.querySelector('.enregistrements');

var paramCreation = document.querySelector('.parametres');
var corpsCreation = document.querySelector('.corps');

// document.addEventListener('DOMContentLoaded', getEnregsFromLS);

document.querySelector('.creation').addEventListener('click',function(){
    document.querySelector('.creationFichier').style.display = 'block';

    // document.querySelector('.maj-menu').style.display = 'none';
    while(enregistrements.firstChild){
        enregistrements.removeChild(enregistrements.firstChild);
    }
    enregistrements.style.display = 'none';
    nbEnreg.value = '';

    afficherCode();
});

document.querySelector('#ajoutEnreg').addEventListener('click', function(e){

    if(nbEnreg.value == 0)
    {
        alert('Ajouter une valeur');
    }
    else if(nbEnreg.value < 0)
    {
        alert('Ajouter une valeur positive');
        nbEnreg.value = '';
    }
    else{
        enregistrements.style.display = 'block';

        // console.log(nbEnreg.value);
        document.querySelector('.creationFichier').style.display = 'none';

        for(let i=0 ; i<nbEnreg.value ; i++)
        {
        
            const enreg = document.createElement('div');

            enreg.className = 'enreg';

            const height = Math.floor(Math.random() * 200 + 1);

            const heightpx = height.toString().concat('px');
            
            enreg.style.width = '50px';
            enreg.style.height = heightpx;
            enreg.style.background = 'blue';
            enreg.style.marginBottom = '10px';
            enreg.style.display = 'inline-block';
            enreg.style.position = 'relative';
            enreg.style.textAlign = 'center';
            enreg.style.margin = '4px';
            enreg.style.zIndex = '-1';

            enregistrements.appendChild(enreg);

            // storeEnregInLocalStorage(heightpx);

            var playPause = anime({
                targets: 'div.enreg',
                translateX: [
                    {value: 1250 , duration: 100 },
                    // {value: 0 , duration: 800}
                ],
                delay : function(el, i , l){
                    return i*1000
                },
                easing: 'easeInOutSine',
            });

            document.querySelector('.play').onclick = playPause.play;
            
            document.querySelector('.pause').onclick = playPause.pause;
        
        }

        // console.log(enregistrements);
    }

    e.preventDefault();
});

function storeEnregInLocalStorage(heightEnreg){
    let enregs;
    if(localStorage.getItem('enregs') === null){
        enregs = [];
    }else{
        console.log('storage');
        enregs = JSON.parse(localStorage.getItem('enregs'));
    }

    enregs.push(heightEnreg);

    localStorage.setItem('enregs', JSON.stringify(enregs));
}

function getEnregsFromLS(){
    let enregs;

    enregistrements.style.display = 'block';

    if(localStorage.getItem('enregs') === null){
        enregs = [];
    }else{
        enregs = JSON.parse(localStorage.getItem('enregs'));
    }

    enregs.forEach(function(heightEnreg){
        const enreg = document.createElement('div');

        enreg.className = 'enreg';
        
        enreg.style.width = '50px';
        enreg.style.height = heightEnreg;
        enreg.style.background = 'blue';
        enreg.style.marginBottom = '10px';
        enreg.style.display = 'inline-block';
        enreg.style.position = 'relative';
        enreg.style.textAlign = 'center';
        enreg.style.margin = '4px';
        enreg.style.zIndex = '-1';

        enregistrements.appendChild(enreg);

        var playPause = anime({
            targets: 'div.enreg',
            translateX: [
                {value: 1250 , duration: 100},
                // {value: 0 , duration: 800}
            ],
            delay : function(el, i , l){
                return i*1000
            }
        });

        document.querySelector('.play').onclick = playPause.play;
        
        document.querySelector('.pause').onclick = playPause.pause;
    })
}

function afficherCode(){
    paramCreation.innerHTML = 'CreerFichier(nbEnreg : entier)';

    const textCorps = 'Pour k=1 , nbEnreg <br>  lire(e)'
    corpsCreation.innerHTML = textCorps;
}