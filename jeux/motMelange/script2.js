const tableau = document.querySelector('.tableau');
const tab = document.querySelector('.tab');
const tr = document.querySelector('.tr');
const boutonV = document.querySelector('.boutonV');
const boutonSuite = document.querySelector('.boutonSuite');
const boutonAbandon = document.querySelector('.boutonAbandon');
const msg = document.querySelector('.resultat');


function createTab(tab, nomClass, ajoutClass) { //les paramètres sont un tableau et une variable qu'on définit plus tard en tant que classe
    let table = document.createElement('table');
    table.setAttribute('rules', 'all');
    let tr = document.createElement('tr'); //on crée la fonction de création de tableau
    for (let i = 0; i<tab.length; i++) { //pour chaque cellule du tableau, qu'on incrémente automatiquement
        let td = document.createElement('td'); //on crée une cellule du tableau de destination
        td.classList.add(nomClass); //la variable nomClass devient une classe
        if(ajoutClass === true) {
            td.id = "s" + i;
        }
        td.setAttribute('draggable', 'true');
        tr.appendChild(td);//et on affecte la cellule "td" en tant qu'enfant de la ligne du tableau "tr"
        td.innerHTML = tab[i]; //enfin, on affiche chaque cellule à la suite dans la page html
    }
    table.appendChild(tr);
    tableau.appendChild(table);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;


        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



function verifLigne(tabl, reponse) {
    let juste = "0"
    for(let j = 0; j<tabl.length; j++) {
        let sId = document.getElementById('s' + j);
        if(sId.childElementCount == 1) {
            if (sId.firstElementChild.innerHTML == reponse[j]) {
                juste++;
            }
        }
    }
    if(juste == tabl.length) {
        return true;
    }
    return false;

}
function afficheRes(res) {
    let p = document.createElement('p');
    msg.appendChild(p);
    p.classList.add('message');

    if(res === true) {
        p.innerHTML = 'Bravo';
    } else {
        p.innerHTML = 'Perdu';
    }
}


boutonV.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    let resultat;

    resultat = verifLigne(tableau1, reponse1);

    if(resultat) {
        afficheRes(true);
    } else {
        afficheRes(false);
    }
});



boutonSuite.addEventListener('click', function(){
    let point = parseInt(sessionStorage.getItem('LevelReussi')) + 1;
    sessionStorage.setItem("LevelReussi", point);
    //Lien vers page suivante

});

boutonAbandon.addEventListener('click', function(){
    sessionStorage.setItem("levelReussi", sessionStorage.getItem('LevelReussi'));
})



let niveau = 1;

var tableau1 = ['CREATE', 'TABLE', 'joueur', '(', 'id', 'varchar', '(', '10', ')', ')'];
var tableauVide = new Array(tableau1.length);
tableauVide.fill("");
var reponse1 = ['CREATE', 'TABLE', 'joueur', '(', 'id', 'varchar', '(', '10', ')', ')'];

tableau1 = shuffle(tableau1);

createTab(tableau1, 'draggable', false); //les paramètres deviennent la variable test (tableau énigme) auquel on affecte la classe 'draggable' définie dans le drag and drop
createTab(tableauVide, 'dropper', true); //les paramètres deviennent la variable test (tableau énigme) auquel on affecte la classe 'dropper' définie dans le drag and drop





//Début de fonction Drag And Drop

var draggedElement = null;
var dndHandler = this;
function applyDragEvents(element) {
    element.draggable = true;

    var dndHandler = this;

    element.addEventListener('dragstart', function(event) {
        dndHandler.draggedElement = event.target;
        event.dataTransfer.setData('text/plain', '');
    });
}

function applyDropEvents(dropper) {
    dropper.addEventListener('dragover', function (event) {
        event.preventDefault();
        this.className = 'dropper drop_hover';
    });

    dropper.addEventListener('drageleave', function () {
        this.className = 'dropper';
    });

    var dndHangler = this;

    dropper.addEventListener('drop', function (event) {
        var target = event.target;
        var draggedElement = dndHandler.draggedElement;
        var clonedElement = draggedElement.cloneNode(true);

        while (target.className.indexOf('dropper') == -1) {
            target = target.parentNode;
        }
        target.className = 'dropper';

        clonedElement = target.appendChild(clonedElement);
        dndHandler.applyDragEvents(clonedElement);

        draggedElement.parentNode.removeChild(draggedElement);
    });
}

var element = document.querySelectorAll('.draggable');

for (var i = 0; i < element.length; i++) {
    dndHandler.applyDragEvents(element[i]);
}

var droppers = document.querySelectorAll('.dropper');

for (var i = 0; i < droppers.length; i++) {
    dndHandler.applyDropEvents(droppers[i]);
}

//fin de fonction Drag And Drop




//////Bouton abandonner
//Create table joueur ( id varchar(10));
