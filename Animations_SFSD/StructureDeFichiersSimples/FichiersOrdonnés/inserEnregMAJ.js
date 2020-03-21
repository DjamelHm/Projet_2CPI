const nbEnregInsere = document.getElementById('nbEnregistrementsInsere');
const inserer = document.getElementById('inserEnreg');
const enregistrementsInsere = document.querySelector('.enregistrements');

const nbblocsInser = document.getElementById('nbblocs');

// const ajouterBlocEnregs = document.getElementById('ajoutBlocEnreg');
// const enregistrements = document.querySelector('.enregistrements');
// const blocs = document.querySelector('.blocs');

// var paramCreation = document.querySelector('.parametres');
// var corpsCreation = document.querySelector('.corps');
// const entete = document.querySelector('.entete'); 

document.querySelector('.insertion').addEventListener('click',function(){
    document.querySelector('.creationEnregs').style.display = 'none';
    document.querySelector('.insertionEnreg').style.display = 'block';
    document.querySelector('.suppressionEnreg').style.display = 'none';
    document.querySelector('.rechEnreg').style.display = 'none';
    nbEnregInsere.value = '';
    // document.querySelector('.maj-menu').style.display = 'none';
    // document.querySelector('.maj-menu').style.visibility = 'hidden';
});

inserer.addEventListener('click',function(e){

    if(nbEnregInsere.value == 0)
    {
        alert('Ajouter une valeur');
    }
    else if(nbEnregInsere.value < 0)
    {
        alert('Ajouter une valeur positive');
        nbEnregInsere.value = '';
    }
    else{
        enregistrementsInsere.style.display = 'block';

        // console.log(enregistrementsInsere.value);
        document.querySelector('.insertionEnreg').style.display = 'none';

        for(let i=0 ; i<nbEnregInsere.value ; i++)
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

            enregistrementsInsere.appendChild(enreg);

            // storeEnregInLocalStorage(heightpx);

            var playPause = anime({
                targets: 'div.enreg',
                translateX: [
                    {value: 1250 , duration: 100},
                    // {value: 0 , duration: 800}
                ],
                delay : function(el, i , l){
                    return i*500
                }
            });

            document.querySelector('.play').onclick = playPause.play;
            
            document.querySelector('.pause').onclick = playPause.pause;
        
        }
    }

    e.preventDefault();
})
