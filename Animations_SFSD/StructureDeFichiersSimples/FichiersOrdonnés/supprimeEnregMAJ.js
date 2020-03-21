const numEnregSupprime = document.getElementById('numEnregSuppreme');
const supprimer = document.getElementById('SupprimeEnreg');
// const enregistrementsSupprimable = document.querySelector('.enregistrements');

var nbEnregSupprimable;

const blocsSupprimable = document.querySelector('.blocs');

// var clesList = new Array();

var paramAlgorithmeSuppression = document.querySelector('.parametres');
var corpsAlgorimtheSuppression = document.querySelector('.corps');
// const entete = document.querySelector('.entete');
// const enregistrementsRecherchable = document.querySelector('.enregistrements');

var nbEnregsSupprimable;
var nbBlocsSupprimable;


document.querySelector('.suppression').addEventListener('click',function(){
    document.querySelector('.creationBlocs').style.display = 'none';
    document.querySelector('.insertionEnreg').style.display = 'none';
    document.querySelector('.rechEnreg').style.display = 'none';
    
    numEnregSupprime.value = '';

    nbBlocsSupprimable = blocsSupprimable.children.length;
    nbEnregsSupprimable = document.querySelector('.nbEnregsEntete').textContent;

    if(nbBlocsSupprimable == 0){
        alert('Le fichier est vide!\nOn peut pas supprimer');
    }else{
        nbBlocsSupprimable = document.querySelector('.nbEnregsEntete').textContent;
        document.querySelector('.suppressionEnreg').style.display = 'block';
    }
});

supprimer.addEventListener('click', function(e){

    if(numEnregSupprime.value == '')
    {
        alert('Entrez une valeur');
    }
    else if(numEnregSupprime.value < 0)
    {
        alert('Entrez une valeur positive');
        numEnregSupprime.value = '';
    }
    else
    {
        document.querySelector('.suppressionEnreg').style.display = 'none';

        var blocsList = blocs.childNodes;
        // console.log(blocsList);

        var existe = 0;

        for(let ibloc = 0 ; ibloc < nbBlocsSupprimable ; ibloc++){
            // console.log(blocsList[ibloc]);
            var enregsTable = blocsList[ibloc].childNodes;
            // console.log(enregsTable);
            // console.log(enregsTable[1]);
            var enregsTBodyBlocs = enregsTable[1].childNodes;
            // console.log(enregsTBodyBlocs[1]);
            var enregsTBody = enregsTBodyBlocs[1];
            // console.log(enregsTBody.childNodes.length);
            for(let irow = 0; irow < enregsTBody.childNodes.length ; irow++){
                // console.log(enregsTBody);
                var enregrows = enregsTBody.childNodes;
                // console.log(enregrows[irow]);
                var enregtds = enregrows[irow].childNodes;
                // console.log(enregtds);
                var enregcle = enregtds[1].textContent;
                // console.log(enregcle);

                if(enregcle == numEnregSupprime.value){
                    // console.log(enregtds[1].parentElement);
                    // enregtds[1].style.background = 'red';
                    enregtds[1].parentElement.remove();
                    nbEnregsSupprimable--;
                    document.querySelector('.nbEnregsEntete').innerHTML = nbEnregsSupprimable;
                    existe = 1;
                }
            }            
        }

        if(existe == 0){
            alert("Cet enregistrement de clé : " + numEnregRech.value + " \nn'existe pas");
        }
    }

    e.preventDefault();
})