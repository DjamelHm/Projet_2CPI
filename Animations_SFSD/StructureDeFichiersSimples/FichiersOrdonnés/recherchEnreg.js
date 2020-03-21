const blocsRecherchable = document.querySelector('.blocs');

var paramAlgorithmeRecherche = document.querySelector('.parametres');
var corpsAlgorimtheRecherche = document.querySelector('.corps');
// const entete = document.querySelector('.entete');
const numEnregRech = document.getElementById('numEnregRech');
const rechercher = document.getElementById('RechercherEnreg');
// const enregistrementsRecherchable = document.querySelector('.enregistrements');

var nbEnregsRecherchable;
var nbBlocsRecherchable;

document.querySelector('.recherche').addEventListener('click',function(e){
    document.querySelector('.creationBlocs').style.display = 'none';
    document.querySelector('.insertionEnreg').style.display = 'none';
    document.querySelector('.suppressionEnreg').style.display = 'none';

    // nbEnregsRecherchable = enregistrementsRecherchable.children.length;
    nbBlocsRecherchable = blocsRecherchable.children.length;

    numEnregRech.value = '';

    if(nbBlocsRecherchable == 0){
        alert('Le fichier est vide!\nOn peut pas rechercher');
    }else{
        nbEnregsRecherchable = document.querySelector('.nbEnregsEntete').textContent;
        document.querySelector('.rechEnreg').style.display = 'block';
    }

    e.preventDefault();
});

rechercher.addEventListener('click', function(e){

    var clesListRecherch = new Array();

    if(numEnregRech.value == '')
    {
        alert('Entrez une valeur');
    }
    else
    {
        document.querySelector('.rechEnreg').style.display = 'none';

        var blocsList = blocs.childNodes;

        var existe = 0;

        var breakBoucleBlocs = 0;
        var indexBlocConcerne;

        var enregsTable;
        var enregsTBodyBlocs
        var enregsTBody;
        var enregrows;
        var enregtds;
        var enregcle;
        var blocConcrné;
        var indexBlocConcerne;
        var lastValueRech;
        var indexLastCleRech;

        console.log('numEnregRech.value : ' + numEnregRech.value);

        for(let ibloc = 0 ; ibloc < nbBlocsRecherchable ; ibloc++){
            // console.log(blocsList[ibloc]);
            enregsTable = blocsList[ibloc].childNodes;
            // console.log(enregsTable[1]);
            enregsTBodyBlocs = enregsTable[1].childNodes;
            // console.log(enregsTBodyBlocs[1]);
            enregsTBody = enregsTBodyBlocs[1];
            // console.log(enregsTBody.childNodes.length);

            for(let irow = 0; irow < enregsTBody.childNodes.length ; irow++){
                // console.log(enregsTBody);
                enregrows = enregsTBody.childNodes;
                // console.log(enregrows[irow]);
                enregtds = enregrows[irow].childNodes;
                // console.log(enregtds);
                enregcle = enregtds[1].textContent;
                // console.log('enregcle : ' +  enregcle);

                clesListRecherch.push(enregcle);

                // if(enregcle == numEnregRech.value){
                //     blocConcrné = enregtds[1].parentElement.parentElement.parentElement.parentElement;
                //     for(let i=0 ; i<blocs.childNodes.length ; i++){
                //         if(blocsList[i] == blocConcrné){
                //             indexBlocConcerne = i;
                //         }
                //     }

                //     // console.log(enregtds[1].parentElement.parentElement);
                //     for(let i=0; i < enregsTBody.childNodes.length; i++){
                //         enregrows[i].childNodes[1].id = 'parcourirEnreg';
                //         console.log(enregrows[i].childNodes[1]);
                //         if(enregrows[i] == enregtds[1].parentElement){
                //             break;
                //         }
                //     }

                //     // enregtds[1].style.background = 'red';

                //     existe = 1;
                // }
            } 
            // if(breakBoucleBlocs == 1){
            //     // break;
            // }
        }

        for(let i=0 ; i<clesListRecherch.length ; i++){
            if(clesListRecherch[i] <= numEnregRech.value){
                indexLastCleRech = i;
            }
        }

        lastValueRech = clesListRecherch[indexLastCleRech];
        console.log('lastValueRech : ' + clesListRecherch[indexLastCleRech] );
        console.log(clesListRecherch);

        for(let ibloc = 0 ; ibloc < nbBlocsRecherchable ; ibloc++){
            
            enregsTable = blocsList[ibloc].childNodes;
            // console.log(enregsTable[1]);
            enregsTBodyBlocs = enregsTable[1].childNodes;
            console.log(enregsTBodyBlocs[1]);
            enregsTBody = enregsTBodyBlocs[1];

            for(let irow = 0; irow < enregsTBody.childNodes.length ; irow++){

                enregrows = enregsTBody.childNodes;
                // console.log(enregrows[irow]);
                enregtds = enregrows[irow].childNodes;
                // console.log(enregtds);
                enregcle = enregtds[1].textContent;

                // console.log(enregtds[1]);
                // console.log('enregCle = ' + enregCle);
                if(enregcle == lastValueRech){
                    blocConcrné = enregtds[1].parentElement.parentElement.parentElement.parentElement;
                    for(let i=0 ; i<blocs.childNodes.length ; i++){
                        if(blocsList[i] == blocConcrné){
                            indexBlocConcerne = i;
                        }
                    }

                    // console.log(enregtds[1].parentElement.parentElement);
                    for(let i=0; i < enregsTBody.childNodes.length; i++){
                        enregrows[i].childNodes[1].id = 'parcourirEnreg';
                        console.log(enregrows[i].childNodes[1]);
                        if(enregrows[i] == enregtds[1].parentElement){
                            break;
                        }
                    }

                    // enregtds[1].style.background = 'red';

                    existe = 1;
                }
            }
        }

        // console.log('indexBlocConcerne : ' + indexBlocConcerne);

        anime({
            targets: 'div.bloc',
            scale: {
                delay: 800,
                // background: 'red',
                // value: 1.5
            },
            duration: 1500
        });
        var nbBlocsParcourable = 0;

        for(let i=0 ; i<nbBlocsRecherchable; i++){
            if(i <= indexBlocConcerne){
                blocsList[i].id = 'parcourirBlocs';
                nbBlocsParcourable++;
            }
            // console.log(blocsList[i]);

        }

        console.log('nbBlocsParcourable : ' + nbBlocsParcourable);
        parcoursSequencielle(nbBlocsParcourable);

    }

    e.preventDefault();
});


function parcoursSequencielle(nbBlocsParcourable){ /// Pour ne pas animer les blocs qui sont aprés le bloc concerné
    anime({
        targets: "div#parcourirBlocs",
        // translateX: 250,
        color: "#fff",
        backgroundColor: "hsl(200, 50%, 50%)",
        // backgroundColor: ["hsl(250, 75%, 50%)", "hsl(200, 50%, 50%)"],
        // loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        delay : function(el, i , l){
            // paramAlgorithmeCreation.style.background = 'red';
            return i*1000
        },
        // backgroundColor: "hsl(150, 50%, 50%)",
    });

    var timeStartParcourEnregs = nbBlocsParcourable * 1000;
    
    setTimeout(function(){
        anime({
            targets: "td#parcourirEnreg",
            // translateX: 250,
            color: "#fff",
            backgroundColor: "hsl(120, 50%, 70%)",
            // loop: true,
            // direction: 'alternate',
            easing: 'easeInOutQuad',
            delay : function(el, i , l){
                return i*1000
            },
        });
    },timeStartParcourEnregs);

}