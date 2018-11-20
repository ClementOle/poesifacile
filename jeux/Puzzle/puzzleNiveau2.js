const case1 = document.querySelector('.case1');
const case2 = document.querySelector('.case2');
const case3 = document.querySelector('.case3');
const case4 = document.querySelector('.case4');
const case5 = document.querySelector('.case5');
const case6 = document.querySelector('.case6');
const case7 = document.querySelector('.case7');
const case8 = document.querySelector('.case8');
const case9 = document.querySelector('.case9');
const buttonValider = document.querySelector('.buttonValider');
const msg = document.querySelector('.msg');
const ligne = document.querySelector('.ligne');
const ligne2 = document.querySelector('.ligne2');
const lienNiveauSuivant = document.querySelector('.lienNiveauSuivant');

function init() {

    let tab = new Array(16);

    let img = new Image();
    let img2 = new Image();
    let img3 = new Image();
    let img4 = new Image();
    let img5 = new Image();
    let img6 = new Image();
    let img7 = new Image();
    let img8 = new Image();
    let img9 = new Image();

    img.src = "images/montagne1.png";
    img2.src = "images/montagne2.png";
    img3.src = "images/montagne3.png";
    img4.src = "images/montagne4.png";
    img5.src = "images/montagne5.png";
    img6.src = "images/montagne6.png";
    img7.src = "images/montagne7.png";
    img8.src = "images/montagne8.png";
    img9.src = "images/montagne9.png";

    img.classList.add("s1");
    img2.classList.add("s2");
    img3.classList.add("s3");
    img4.classList.add("s4");
    img5.classList.add("s5");
    img6.classList.add("s6");
    img7.classList.add("s7");
    img8.classList.add("s8");
    img9.classList.add("s9");

    ligne.appendChild(img);
    ligne.appendChild(img2);
    ligne.appendChild(img3);
    ligne.appendChild(img4);
    ligne.appendChild(img5);
    ligne.appendChild(img6);
    ligne.appendChild(img7);
    ligne.appendChild(img8);
    ligne.appendChild(img9);


    img.classList.add('singes');
    img.classList.add('draggable');
    img2.classList.add('singes');
    img2.classList.add('draggable');
    img3.classList.add('singes');
    img3.classList.add('draggable');
    img4.classList.add('singes');
    img4.classList.add('draggable');
    img5.classList.add('singes');
    img5.classList.add('draggable');
    img6.classList.add('singes');
    img6.classList.add('draggable');
    img7.classList.add('singes');
    img7.classList.add('draggable');
    img8.classList.add('singes');
    img8.classList.add('draggable');
    img9.classList.add('singes');
    img9.classList.add('draggable');

    tab[0] = img;
    tab[1] = img2;
    tab[2] = img3;
    tab[3] = img4;
    tab[4] = img5;
    tab[5] = img6;
    tab[6] = img7;
    tab[7] = img8;
    tab[8] = img9;
    return tab;
}

function melangeTab(tab){
//fonction qui melange l'ordre des images dans le tableau
    let tabIndice = new Array(9);
    let indiceAl = -1;
    let unique = 0;
    for(let i = 0; i < tabIndice.length; i++) {
        do {
            unique = 0;
            indiceAl = getRandom();
            for (let j = 0; j < tabIndice.length; j++) {
                if (indiceAl === tabIndice[j]) {
                    unique++;
                    break;
                }
            }
        } while ((unique !== 0));
        tabIndice[i] = indiceAl;
    }
    tab = rempliTab(tab, tabIndice);


    return tab;

}
function getRandom() {
    return Math.floor(Math.random() * 9);
}
//Remplie le tableau dans l'ordre définit par les indies

function rempliTab(tab, tabIndice) {

//Fonction qui renvoie une valeur aléatoire entre 0 et 3
    let tabMel = new Array(9);
    for(let k = 0; k<tabIndice.length; k++) {
        let indice = tabIndice[k]
        tabMel[k] = tab[indice];
    }
    return tabMel;
}
function affImage(tabMel) {


    //Affiche l'image dans la page HTML
    let div1 = document.createElement("div");
    div1.classList.add('piece1');
    div1.classList.add('dropper');
    div1.appendChild(tabMel[0]);

    let div2 = document.createElement("div");
    div2.classList.add('piece2');
    div2.classList.add('dropper');
    div2.appendChild(tabMel[1]);

    let div3 = document.createElement("div");
    div3.classList.add('piece3');
    div3.classList.add('dropper');
    div3.appendChild(tabMel[2]);

    let div4 = document.createElement("div");
    div4.classList.add('piece4');
    div4.classList.add('dropper');
    div4.appendChild(tabMel[3]);


    let div5 = document.createElement("div");
    div5.classList.add('piece5');
    div5.classList.add('dropper');
    div5.appendChild(tabMel[4]);

    let div6 = document.createElement("div");
    div6.classList.add('piece6');
    div6.classList.add('dropper');
    div6.appendChild(tabMel[5]);

    let div7 = document.createElement("div");
    div7.classList.add('piece7');
    div7.classList.add('dropper');
    div7.appendChild(tabMel[6]);

    let div8 = document.createElement("div");
    div8.classList.add('piece8');
    div8.classList.add('dropper');
    div8.appendChild(tabMel[7]);

    let div9 = document.createElement("div");
    div9.classList.add('piece9');
    div9.classList.add('dropper');
    div9.appendChild(tabMel[8]);


    ligne.appendChild(div1);
    ligne.appendChild(div2);
    ligne.appendChild(div3);
    ligne.appendChild(div4);
    ligne.appendChild(div5);
    ligne.appendChild(div6);
    ligne.appendChild(div7);
    ligne.appendChild(div8);
    ligne.appendChild(div9);
}


let tableau;
tableau = init();
tableau = melangeTab(tableau);

affImage(tableau);

let soldeTotalNiveau2 = 0;

buttonValider.addEventListener('click', function(event) {
    if ((case1.firstElementChild.classList.contains('s1')) 
        && (case2.firstElementChild.classList.contains('s2')) 
        && (case3.firstElementChild.classList.contains('s3'))
        && (case4.firstElementChild.classList.contains('s4'))
        && (case5.firstElementChild.classList.contains('s5'))
        && (case6.firstElementChild.classList.contains('s6'))
        && (case7.firstElementChild.classList.contains('s7'))
        && (case8.firstElementChild.classList.contains('s8')) 
        && (case9.firstElementChild.classList.contains('s9')))
        {
        let message = document.createElement('p');
            msg.appendChild(message);
                message.classList.add('message');
                message.innerHTML = 'Bravo';
                soldeTotalNiveau2 = 1;
                document.querySelector('.lienNiveauSuivant').style.display = 'block';
                
    } else {

        let message = document.createElement('p');
                msg.appendChild(message);
                message.classList.add('message');
                message.innerHTML = 'Perdu';
                soldeTotalNiveau2 = 0;
                document.querySelector('.lienNiveauSuivant').style.display = 'block';
    }
    var p2 = sessionStorage.getItem('pointsNiveau1');
    console.log('pointsNiveau1 vaut toujours : ' + p2);
    console.log('soldeTotalNiveau2 vaut : ' + parseInt(soldeTotalNiveau2));
    sessionStorage.setItem('pointsNiveau2', parseInt(soldeTotalNiveau2));
});

var draggedElement = null;// Propriété pointant vers l'élément en cours de déplacement
var dndHandler = this;


function applyDragEvents(element) { // permet de demarrer le deplacement
    element.draggable = true;

    var dndHandler = this;// Cette variable est nécessaire pour que l'événement « dragstart » ci-dessous accède facilement au namespace « dndHandler »

    element.addEventListener('dragstart', function(event) {
        dndHandler.draggedElement = event.target;// On sauvegarde l'élément en cours de déplacement
        event.dataTransfer.setData('text/plain', '');// Nécessaire pour Firefox
    });
}

function applyDropEvents(dropper) {
    dropper.addEventListener('dragover', function (event) {
        event.preventDefault();// On autorise le drop d'éléments
        this.classList.add('drop_hover');// Et on applique le style adéquat à notre zone de drop quand un élément la survole
    });

    dropper.addEventListener('dragleave', function (event) {
        this.classList.remove('drop_hover');// On revient au style de base lorsque l'élément quitte la zone de drop
    });

    var dndHangler = this;// Cette variable est nécessaire pour que l'événement « drop » ci-dessous accède facilement au namespace « dndHandler »

    dropper.addEventListener('drop', function (event) {
        var target = event.target;
        var draggedElement = dndHandler.draggedElement;// Récupération de l'élément concerné
        var clonedElement = draggedElement.cloneNode(true);// On créé immédiatement le clone de cet élément

        while (target.className.indexOf('dropper') == -1) {// Cette boucle permet de remonter jusqu'à la zone de drop parente
            target = target.parentNode;
        }
        target.className = 'dropper';// Application du style par défaut

        let currentChild = target.querySelector('.draggable');
        if (currentChild) {
            ligne.childNodes.forEach(function(item){
                if(item.nodeType === 1 && item.innerHTML === '') {
                    item.appendChild(currentChild);
                }
            });
        }

        clonedElement = target.appendChild(clonedElement); // Ajout de l'élément cloné à la zone de drop actuelle
        dndHandler.applyDragEvents(clonedElement);// Nouvelle application des événements qui ont été perdus lors du cloneNode()

        draggedElement.parentNode.removeChild(draggedElement);// Suppression de l'élément d'origine
    });
}
// appel des fonctions pour le drag&drop
var element = document.querySelectorAll('.draggable');

for (var i = 0; i < element.length; i++) {
    dndHandler.applyDragEvents(element[i]);// Application des paramètres nécessaires aux éléments déplaçables
}

var droppers = document.querySelectorAll('.dropper');

for (var i = 0; i < droppers.length; i++) {
    dndHandler.applyDropEvents(droppers[i]);// Application des événements nécessaires aux zones de drop
}

