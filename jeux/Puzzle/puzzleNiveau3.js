const ligne = document.querySelector('.ligne');
const ligne2 = document.querySelector('.ligne2');

const case1 = document.querySelector('.case1');
const case2 = document.querySelector('.case2');
const case3 = document.querySelector('.case3');
const case4 = document.querySelector('.case4');
const case5 = document.querySelector('.case5');
const case6 = document.querySelector('.case6');
const case7 = document.querySelector('.case7');
const case8 = document.querySelector('.case8');
const case9 = document.querySelector('.case9');
const case10 = document.querySelector('.case10');
const case11 = document.querySelector('.case11');
const case12 = document.querySelector('.case12');
const case13 = document.querySelector('.case13');
const case14 = document.querySelector('.case14');
const case15 = document.querySelector('.case15');
const case16 = document.querySelector('.case16');
const buttonValider = document.querySelector('.buttonValider');
const msg = document.querySelector('.msg');
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
    let img10 = new Image();
    let img11 = new Image();
    let img12 = new Image();
    let img13 = new Image();
    let img14 = new Image();
    let img15 = new Image();
    let img16 = new Image();

    img.src = "images/bonbon1.png";
    img2.src = "images/bonbon2.png";
    img3.src = "images/bonbon3.png";
    img4.src = "images/bonbon4.png";
    img5.src = "images/bonbon5.png";
    img6.src = "images/bonbon6.png";
    img7.src = "images/bonbon7.png";
    img8.src = "images/bonbon8.png";
    img9.src = "images/bonbon9.png";
    img10.src = "images/bonbon10.png";
    img11.src = "images/bonbon11.png";
    img12.src = "images/bonbon12.png";
    img13.src = "images/bonbon13.png";
    img14.src = "images/bonbon14.png";
    img15.src = "images/bonbon15.png";
    img16.src = "images/bonbon16.png";

    img.classList.add("s1");
    img2.classList.add("s2");
    img3.classList.add("s3");
    img4.classList.add("s4");
    img5.classList.add("s5");
    img6.classList.add("s6");
    img7.classList.add("s7");
    img8.classList.add("s8");
    img9.classList.add("s9");
    img10.classList.add("s10");
    img11.classList.add("s11");
    img12.classList.add("s12");
    img13.classList.add("s13");
    img14.classList.add("s14");
    img15.classList.add("s15");
    img16.classList.add("s16");


    ligne.appendChild(img);
    ligne.appendChild(img2);
    ligne.appendChild(img3);
    ligne.appendChild(img4);
    ligne.appendChild(img5);
    ligne.appendChild(img6);
    ligne.appendChild(img7);
    ligne.appendChild(img8);
    ligne2.appendChild(img9);
    ligne2.appendChild(img10);
    ligne2.appendChild(img11);
    ligne2.appendChild(img12);
    ligne2.appendChild(img13);
    ligne2.appendChild(img14);
    ligne2.appendChild(img15);
    ligne2.appendChild(img16);


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
    img10.classList.add('singes');
    img10.classList.add('draggable');
    img11.classList.add('singes');
    img11.classList.add('draggable');
    img12.classList.add('singes');
    img12.classList.add('draggable');
    img13.classList.add('singes');
    img13.classList.add('draggable');
    img14.classList.add('singes');
    img14.classList.add('draggable');
    img15.classList.add('singes');
    img15.classList.add('draggable');
    img16.classList.add('singes');
    img16.classList.add('draggable');

    tab[0] = img;
    tab[1] = img2;
    tab[2] = img3;
    tab[3] = img4;
    tab[4] = img5;
    tab[5] = img6;
    tab[6] = img7;
    tab[7] = img8;
    tab[8] = img9;
    tab[9] = img10;
    tab[10] = img11;
    tab[11] = img12;
    tab[12] = img13;
    tab[13] = img14;
    tab[14] = img15;
    tab[15] = img16;
    return tab;
}

function melangeTab(tab){
//fonction qui melange l'ordre des images dans le tableau
    let tabIndice = new Array(16);
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
    return Math.floor(Math.random() * 16);
}
//Remplie le tableau dans l'ordre définit par les indies

function rempliTab(tab, tabIndice) {

//Fonction qui renvoie une valeur aléatoire entre 0 et 3
    let tabMel = new Array(16);
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

    let div10 = document.createElement("div");
    div10.classList.add('piece10');
    div10.classList.add('dropper');
    div10.appendChild(tabMel[9]);

    let div11 = document.createElement("div");
    div11.classList.add('piece11');
    div11.classList.add('dropper');
    div11.appendChild(tabMel[10]);

    let div12 = document.createElement("div");
    div12.classList.add('piece12');
    div12.classList.add('dropper');
    div12.appendChild(tabMel[11]);

    let div13 = document.createElement("div");
    div13.classList.add('piece13');
    div13.classList.add('dropper');
    div13.appendChild(tabMel[12]);

    let div14 = document.createElement("div");
    div14.classList.add('piece14');
    div14.classList.add('dropper');
    div14.appendChild(tabMel[13]);

    let div15 = document.createElement("div");
    div15.classList.add('piece15');
    div15.classList.add('dropper');
    div15.appendChild(tabMel[14]);

    let div16 = document.createElement("div");
    div16.classList.add('piece16');
    div16.classList.add('dropper');
    div16.appendChild(tabMel[15]);

    ligne.appendChild(div1);
    ligne.appendChild(div2);
    ligne.appendChild(div3);
    ligne.appendChild(div4);
    ligne.appendChild(div5);
    ligne.appendChild(div6);
    ligne.appendChild(div7);
    ligne.appendChild(div8);
    ligne2.appendChild(div9);
    ligne2.appendChild(div10);
    ligne2.appendChild(div11);
    ligne2.appendChild(div12);
    ligne2.appendChild(div13);
    ligne2.appendChild(div14);
    ligne2.appendChild(div15);
    ligne2.appendChild(div16);
}


let tableau;
tableau = init();
tableau = melangeTab(tableau);

affImage(tableau);

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
            ligne2.childNodes.forEach(function(item){
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

        let soldeNegatif = 0;
        let soldePointsDepart = 2;
        let soldeTotalNiveau3 = 0;

buttonValider.addEventListener('click', function(event) {
    if ((case1.firstElementChild.classList.contains('s1')) 
        && (case2.firstElementChild.classList.contains('s2')) 
        && (case3.firstElementChild.classList.contains('s3'))
        && (case4.firstElementChild.classList.contains('s4'))
        && (case5.firstElementChild.classList.contains('s5'))
        && (case6.firstElementChild.classList.contains('s6'))
        && (case7.firstElementChild.classList.contains('s7'))
        && (case8.firstElementChild.classList.contains('s8')) 
        && (case9.firstElementChild.classList.contains('s9'))
        && (case10.firstElementChild.classList.contains('s10')) 
        && (case11.firstElementChild.classList.contains('s11'))
        && (case12.firstElementChild.classList.contains('s12'))
        && (case13.firstElementChild.classList.contains('s13'))
        && (case14.firstElementChild.classList.contains('s14'))
        && (case15.firstElementChild.classList.contains('s15'))
        && (case16.firstElementChild.classList.contains('s16'))) {
        let message = document.createElement('p');
            msg.appendChild(message);
                message.classList.add('message');
                message.innerHTML = 'Bravo';
                document.querySelector('.lienNiveauSuivant').style.display = 'block';
                
    } else {
        
        let message = document.createElement('p');
                msg.appendChild(message);
                message.classList.add('message');
                message.innerHTML = 'Perdu';
                soldeNegatif = soldeNegatif - 1;
                document.querySelector('.lienNiveauSuivant').style.display = 'block';
    }
    soldeTotalNiveau3 = parseInt(soldePointsDepart) + parseInt(soldeNegatif);
    console.log('soldePointsDepart vaut : ' + parseInt(soldePointsDepart));
    console.log('soldeNegatif vaut : ' + parseInt(soldeNegatif));
    console.log('soldeTotalNiveau3 vaut : ' + parseInt(soldeTotalNiveau3));
    sessionStorage.setItem('pointsNiveau3', parseInt(soldeTotalNiveau3));
});


