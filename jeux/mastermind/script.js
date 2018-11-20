const BTNrouge = document.querySelector(".Rouge"); // valeur 1
const BTNbleu = document.querySelector(".Bleu"); // valeur 2
const  BTNviolet = document.querySelector(".Violet"); // valeur 3
const BTNjaune = document.querySelector(".Jaune"); // valeur 4
const BTNvert = document.querySelector(".Vert"); // valeur 5
const BTNorange = document.querySelector(".Orange"); // valeur 6
const BTNgris = document.querySelector(".Gris"); // valeur 7
const BTNCyan = document.querySelector(".Cyan"); // valeur 8
const BTNvalidation = document.querySelector(".BTNvalidation");
const Conseil = document.querySelector(".conseil");
const BTNdelete = document.querySelector(".BTNdelete");
const BTNdemarer = document.querySelector(".Demarer");
const BTNsupprimer = document.querySelector(".Supprimer");
const BTNeasy = document.querySelector(".easy");
const BTNnormal = document.querySelector(".normal");
const BTNdur = document.querySelector(".Difficil");
const popup = document.querySelector(".popup");
const Consigne = document.querySelector(".Consigne");
const Sound = document.querySelector(".Sound");
const demo = document.querySelector(".demo");
var PointBOSS=0;
var echec = 0;
var INCREMENTPOSITION = 0;
var INCREMENTCOULEUR = 0;
var IncrementBouton = 2;
var compteurValidation = 0;
var clickbtn = false;
var Classediv = [];
var BoutonClique;
var ClassRond = [];
var tampon = 0;
var incrementligne = 0;
var incrementLigne = 0;
var difficulte = 1;
var couleur1, couleur2, couleur3, couleur4;
var  a = 2;
var compteurpastrop = 0;
const Main = document.querySelector(".Main");
// Rentre dans un tableau les classes identifiants les cercles
function test(parameter) {
    console.log("Je suis passé!!!!" + parameter);
}



for (i=0;i<97;i++){
    ClassRond[i] = "a10";
}
for (i=1; i<=12; i++){
    for (j=0; j<= 7;j++){
        if (i == 1 && j ==0){
            tampon = 0;
        }else if(i ==1) {
            tamponA = (String(i - 1) + String(j));
            // permet de transformer le string en entier
            tampon = tamponA * 1;

        }else {
                tamponA = (String(i -1) + String(j));
                tampon = tamponA;
         }

        ClassRond[tampon] = "a" + i  + j;


    }
}
// bouton supprimer
BTNdelete.addEventListener("click", function (event) {
    let chare = ClassRond[a];
    var lastChar = chare.substr(chare.length - 1);
    if (lastChar == 2){
        changeImage(ClassRond[a+3],"image/circle.svg");
        changeImage(ClassRond[a+2],"image/circle.svg");
        changeImage(ClassRond[a+1],"image/circle.svg");
        changeImage(ClassRond[a],"image/circle.svg");


    }else if(lastChar == 5){
        changeImage(ClassRond[a-3],"image/circle.svg");
        changeImage(ClassRond[a-2],"image/circle.svg");
        changeImage(ClassRond[a-1],"image/circle.svg");
        changeImage(ClassRond[a],"image/circle.svg");
        a -= 3;

    }else if(lastChar == 4){1;
        changeImage(ClassRond[a+1],"image/circle.svg");
        changeImage(ClassRond[a],"image/circle.svg");
        changeImage(ClassRond[a-2],"image/circle.svg");
        changeImage(ClassRond[a-1],"image/circle.svg");
        a -= 2;
    }else if(lastChar == 3){
        changeImage(ClassRond[a+2],"image/circle.svg");
        changeImage(ClassRond[a+1],"image/circle.svg");
        changeImage(ClassRond[a],"image/circle.svg");
        changeImage(ClassRond[a-1],"image/circle.svg");
        a -= 1;

    }
});

lecteurAudio();
function lecteurAudio(){

    Sound.volume = 0.1; //Permet de regler le volume par défaut

    if(Sound.canPlayType("audio/mp3")) //Type d'extension
        Sound.setAttribute("src", "Musique/ff9-card_game.mp3");// Choix de la musique
    else
        return;
    Sound.setAttribute("width", "640");
    Sound.setAttribute("height", "360");
    Sound.setAttribute("controls", "controls");//Sous Firefox OK, sous Chrome, pas de reglage du son, juste on/off

}

// // Gere les difficultés
// BTNeasy.addEventListener("click", function (event) {
//    BTNeasy.classList.add("Hidden");
//    BTNnormal.classList.add("Hidden");
//    BTNdur.classList.add("Hidden");
//    BTNdemarer.classList.remove("Hidden");
//    difficulte = 1;
//    Conseil.innerHTML="Si le témoin de coté est de couleur rose\n" +
//        "            c'est que la couleur est bonne mais pas au bon endroit. En revanche,\n" +
//        "            si le témoin est noir c'est que la couleur est bonne et au bon endroit.\n" +
//        "Les deux cercles de chaques coté correspondent respectivements à ceux du milieur"
//
// });
// BTNnormal.addEventListener("click", function (event) {
//    BTNeasy.classList.add("Hidden");
//    BTNnormal.classList.add("Hidden");
//    BTNdur.classList.add("Hidden");
//    BTNdemarer.classList.remove("Hidden");
//    difficulte = 2;
//     Conseil.innerHTML="Si le témoin de coté est de couleur rose\n" +
//         "            c'est que la couleur est bonne mais pas au bon endroit. En revanche,\n" +
//         "            si le témoin est noir c'est que la couleur est bonne et au bon endroit.\n"+
//         "Ici les cercles de coté ne coresspondent plus."
//
//
// })
// ;BTNdur.addEventListener("click", function (event) {
//    BTNeasy.classList.add("Hidden");
//    BTNnormal.classList.add("Hidden");
//    BTNdur.classList.add("Hidden");
//    BTNdemarer.classList.remove("Hidden");
//    difficulte = 3;
//     Conseil.innerHTML="Si le témoin de coté est de couleur rose\n" +
//         "  c'est que la couleur est bonne mais pas au bon endroit"+
//         "            Mais Attention! Dans ce mode on ne sait pas si une couleur est \n" +
//         "            au bon endroit.\n"+
//         "Bonne chance!"
//
//
// });

// Permet de connaitre le code couleur d'un cercle
function checkcouleur(casechoisie){
    var image = document.getElementsByClassName(casechoisie).item(0);
    var colouring = image.getAttribute("src");


    switch (colouring) {
        case "image/circlerouge.svg":
            return 1;
        case "image/circlebleu.svg":
            return 2;
        case "image/circleviolet.svg":
            return 3;
        case "image/circlejaune.svg":
            return 4;
        case "image/circlevert.svg":
            return 5;
        case "image/circleorange.svg":
            return 6;
        case "image/circlegris.svg":
            return 7;
        case "image/circlecyan.svg":
            return 8;
        default:
            return 9;

    }

}
function changeImage(casechoix,couleur)
{

    var x = document.getElementsByClassName(casechoix).item(0);
    // var v = x.getAttribute("src");
    var v = couleur;
    x.setAttribute("src", v);
}
function getRandomInt(max) {
    var randomval = Math.floor(Math.random() * Math.floor(max));
    if (randomval == 0){
        randomval = 8;
    }
    return randomval;
}
function changea(valeur) {

// Permet de changer l'indice des cercles pour la coloration
    val = valeur;
    if (valeur<10){

        if(val ==  5) {
            if (clickbtn){
                valeur  = valeur + 7;
                incrementligne = incrementligne + 1;
                clickbtn = false;
                // couleure =
                // console.log(couleure);
            } else {
                valeur = 2;
            }
        } else {
            valeur = valeur + 1;
        }
    } else {
        var val = valeur % 10;
        if(val ==  5) {
            if (clickbtn){
                valeur  = valeur + 7;
                incrementligne = incrementligne + 1;
                clickbtn = false;
            } else {
                valeur = valeur - 3;
            }
        }else {
            var valeur = valeur + 1;
        }

    }
    return valeur;
}
BTNrouge.addEventListener("click", function (event) {
    BoutonClique = 1;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);

});

BTNbleu.addEventListener("click", function (event) {
    BoutonClique = 2;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNviolet.addEventListener("click", function (event) {
    BoutonClique = 3;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNjaune.addEventListener("click", function (event) {
    BoutonClique = 4;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNvert.addEventListener("click", function (event) {
    BoutonClique = 5;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNorange.addEventListener("click", function (event) {
    BoutonClique = 6;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNgris.addEventListener("click", function (event) {
    BoutonClique = 7;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
BTNCyan.addEventListener("click", function (event) {
    BoutonClique = 8;
    remplissage(ClassRond[a],BoutonClique);
    a = changea(a);
});
function remplissage(casechoisie,couleur){

// Remplie les cercles d'une couleur celon l'indice et le code couleur
    switch (couleur) {
        case 1:
            couleurbtn = "image/circlerouge.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 2:
            couleurbtn = "image/circlebleu.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 3:
            couleurbtn = "image/circleviolet.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 4:
            couleurbtn = "image/circlejaune.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 5:
            couleurbtn = "image/circlevert.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 6:
            couleurbtn = "image/circleorange.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 7:
            console.log("cou",casechoisie,couleur);
            couleurbtn = "image/circlegris.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 8:
            couleurbtn = "image/circlecyan.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 9:
            couleurbtn = "image/circleblanc.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        case 10:
            couleurbtn= "image/circlenoir.svg";
            changeImage(casechoisie,couleurbtn);
            break;
        default:
            break;


    }

}
// Donne une classe unique à chaque div créée



for (i=0; i<= 12; i++){
    Classediv[i]="Ligne" + i;
}

// BTNsupprimer.addEventListener("click", function (event) {
//     compteurValidation = 0;
//     event.stopPropagation();
//     event.preventDefault();
//     // BTNeasy.classList.remove("Hidden");
//     // BTNnormal.classList.remove("Hidden");
//     // BTNdur.classList.remove("Hidden");
//     BTNdemarer.classList.remove("Hidden");
//     BTNsupprimer.classList.add("Hidden");
//     // BTNdemarer.classList.remove("Hidden");
//     main.remove();
//     var incrementligne = 0;
//     IncrementBouton = 2;
//
//     a = 2;
//
//
//
//
// });


BTNdemarer.addEventListener("click", function (event){
    event.stopPropagation();
    event.preventDefault();
    
    try{
        demo.remove();
    }
    catch (err) {
        
    }
    Conseil.classList.remove("conseilpechec");

    Consigne.classList.add("Hidden");
        Conseil.classList.remove("conseilPvictoire");
    compteurValidation = 0;

    a = 2;
    IncrementBouton = 2;

    main = document.createElement("div");
    main.classList.add("endiv");
    BTNdemarer.classList.add("Hidden");
    // BTNsupprimer.classList.remove("Hidden");
    couleur1 = getRandomInt(8);
    couleur2 = getRandomInt(8);
    couleur3 = getRandomInt(8);
    couleur4 = getRandomInt(8);



    for (i = 1; i < 13; i++ ) {
        bloccercle = document.createElement("div");
        for (j=0; j < 8; j++) {
            bloccercle.classList.add(Classediv[i]);
            bloccercle.classList.add("Ligne");

            listepointT = document.createElement("span");
            imageT = document.createElement("img");
            let classe = "a" + i + j;
            imageT.classList.add(classe);
            if (j<2 || j>5){
            imageT.classList.add("Rondtest");}
            else{
                imageT.classList.add("Rondcolor")
            }
            imageT.src = "image/circle.svg";
            bloccercle.appendChild(listepointT);
            listepointT.appendChild(imageT);
            if (j==1){
            imageT.classList.add("espacedroit");
            }
            if (j==6) {
                imageT.classList.add("espacegauche");
            }}


            main.appendChild(bloccercle);
            Main.appendChild(main);



    }
}
);
// var demo = document.createElement("img");
// demo.src = "image/mastermind.png";
// demo.classList.add("demo");
// Main.appendChild(demo);

BTNvalidation.addEventListener("click", function () {
    try {

        compteurValidation += 1;
        var dicouleur = [couleur1,couleur2,couleur3,couleur4];
        let decalee = 0;
        let decalee1 = 0;
        let decalee2 = 0;
        if (difficulte == 1){

            // PROGRAMME FACIL
            for (i = 0;i < 4;i++){
                switch (i) {
                    case 0:
                        var couleurcheck = couleur1;
                        break;
                    case 1:
                        var couleurcheck = couleur2;
                        break;
                    case 2:
                        var couleurcheck = couleur3;
                        break;
                    case 3:
                        var couleurcheck = couleur4;
                        break;

                }
                if (checkcouleur(ClassRond[IncrementBouton]) == dicouleur[0] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[1] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[2] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[3]){
                    if (i<2){
                        let decalage = IncrementBouton - 2;
                        remplissage(ClassRond[decalage],9);
                    } else{
                        let decalage = IncrementBouton +2;
                        remplissage(ClassRond[decalage],9);

                    }


                }
                if (checkcouleur(ClassRond[IncrementBouton]) == couleurcheck){
                    if (i<2){
                        let decalage = IncrementBouton - 2;
                        remplissage(ClassRond[decalage],10);
                    } else{
                        let decalage = IncrementBouton +2;
                        remplissage(ClassRond[decalage],10);

                    }


                }
                IncrementBouton = IncrementBouton + 1;
            }
            // IncrementBouton = IncrementBouton + 6;
            incrementLigne = incrementLigne + 1;
        } else if (difficulte == 2){
            // PROGRAMME NORMAL
            for (i = 0;i < 4;i++){
                if (checkcouleur(ClassRond[IncrementBouton]) == dicouleur[i]) {
                    INCREMENTPOSITION = INCREMENTPOSITION + 1;

                }
                if (checkcouleur(ClassRond[IncrementBouton]) == dicouleur[0] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[1] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[2] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[3]){
                    // PROGRAMME NORMAL
                    INCREMENTCOULEUR = INCREMENTCOULEUR + 1;
                }
                IncrementBouton = IncrementBouton +1;
            }
            switch (INCREMENTPOSITION) {
                case 4:
                    remplissage(ClassRond[IncrementBouton + 1], 10);
                case 3:
                    remplissage(ClassRond[IncrementBouton], 10);
                case 2:
                    remplissage(ClassRond[IncrementBouton - 5], 10);
                case 1:
                    remplissage(ClassRond[IncrementBouton - 6], 10);

            }
            if (INCREMENTPOSITION == 3){
                decalee1 = 3;
            } else if (INCREMENTPOSITION == 2){
                decalee = 5;
                decalee1 = 3
            } else if (INCREMENTPOSITION == 1){
                decalee = 5;
                decalee1 = -1;
                decalee2 = 0;
            } else if (INCREMENTPOSITION == 0){
                decalee1 = -1;
            }


            switch (INCREMENTCOULEUR - INCREMENTPOSITION) {
                case 4:
                    remplissage(ClassRond[IncrementBouton + 1 + INCREMENTPOSITION], 9);
                case 3:
                    remplissage(ClassRond[IncrementBouton + INCREMENTPOSITION + decalee2], 9);
                case 2:
                    remplissage(ClassRond[IncrementBouton  - 6 + INCREMENTPOSITION + decalee], 9);
                case 1:
                    remplissage(ClassRond[IncrementBouton  - 5 + INCREMENTPOSITION + decalee1], 9);
            }
        } else if (difficulte == 3){
            for (i = 0;i < 4;i++){
                if (checkcouleur(ClassRond[IncrementBouton]) == dicouleur[0] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[1] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[2] || checkcouleur(ClassRond[IncrementBouton]) == dicouleur[3]){
                    // PROGRAMME NORMAL
                    INCREMENTCOULEUR = INCREMENTCOULEUR + 1;
                }
                IncrementBouton = IncrementBouton +1;
            }
            switch (INCREMENTCOULEUR) {
                case 4:
                    remplissage(ClassRond[IncrementBouton +1],9);
                case 3:
                    remplissage(ClassRond[IncrementBouton],9);
                case 2:
                    remplissage(ClassRond[IncrementBouton-5],9);
                case 1:
                    remplissage(ClassRond[IncrementBouton -6],9);

            }

        }


        // trouver les 4 case noires de la ligne


        clickbtn = true;
        var ecart = 10 - a%10;
        if (a != 6 ){
            a = a + ecart+2;
            clickbtn = false;
        }else{
            a = a +5;
            clickbtn = false;
        }
        if (a > 120) {
            if (difficulte == 1 ){
                Conseil.classList.add("conseilpechec");
                Consigne.classList.remove("Hidden");
                Consigne.innerHTML="Si dans la proposition, un ou plusieurs ronds de " +
                    "couleurs sont bien dans la combinaison mais pas à la bonne place," +
                    " un rond rose apparaitra dans la cellule témoin la plus à gauche.<br>" +
                    "Si dans la proposition, un ou plusieurs ronds de couleurs sont bien" +
                    " dans la combinaison et à la bonne place, un rond noir apparaitra " +
                    "dans la cellule témoin la plus à gauche.<br>"+
                    " Les ronds témoins correspondent comme  dans le schema ci-dessous."



            }
            if (difficulte == 2 ){
                Conseil.classList.add("conseilpechec");

                Consigne.classList.remove("Hidden");
                Consigne.innerHTML="Si dans la proposition, un ou plusieurs ronds de " +
                    "couleurs sont bien dans la combinaison mais pas à la bonne place," +
                    " un rond rose apparaitra dans la cellule témoin la plus à gauche.<br>" +
                    "Dans le mode difficile, tu n'auras pas plus d'info. "
           }
            if (difficulte == 3) {
                Conseil.classList.add("conseilpechec");

                Conseil.classList.remove("Hidden");

                echec++;
                let Aside = document.querySelector(".Aside");
                Aside.classList.add("Hidden");
                // BTNsupprimer.classList.add("Hidden");
                main.remove();
                // Traite la fin de partie en cas d'echec final

                if (echec == 3){
                    Conseil.classList.add("conseil1");

                    Conseil.innerHTML="Et vous avez échoué... " + echec + " fois";
                } else if (echec < 3){
                    let victory = 3-echec;
                    if (victory == 1){
                        var victoryText = "victoire"
                    }else{
                        var victoryText = "victoires"
                    }
                    Conseil.innerHTML="Tu as échoué " + echec + "<br> fois, mais bon<br> c'est " +
                        "toujours <br>" + victory + " " + victoryText + ".";

                }



            } else {
                echec++;

                difficulte++;
                compteurValidation = 0;
                event.stopPropagation();
                event.preventDefault();
                BTNdemarer.classList.remove("Hidden");


                // BTNsupprimer.classList.add("Hidden");
                // BTNdemarer.classList.remove("Hidden");
                main.remove();
                var incrementligne = 0;
                IncrementBouton = 2;
            }
        }
        if (checkcouleur(ClassRond[IncrementBouton - 4]) == dicouleur[0] && checkcouleur(ClassRond[IncrementBouton - 3]) == dicouleur[1] && checkcouleur(ClassRond[IncrementBouton - 2]) == dicouleur[2] && checkcouleur(ClassRond[IncrementBouton - 1]) == dicouleur[3]) {
            // Traite la fin de partie en cas victoire finale
            main.remove();
            if (difficulte == 1 ){
                PointBOSS = PointBOSS + 2;
                Conseil.classList.add("conseilPvictoire");
                Consigne.classList.remove("Hidden");
                Consigne.innerHTML="Si dans la proposition, un ou plusieurs ronds de " +
                    "couleurs sont bien dans la combinaison mais pas à la bonne place," +
                    " un rond rose apparaitra dans la cellule témoin la plus à gauche.<br>" +
                    "Si dans la proposition, un ou plusieurs ronds de couleurs sont bien" +
                    " dans la combinaison et à la bonne place, un rond noir apparaitra " +
                    "dans la cellule témoin la plus à gauche.<br>"+
                    " Les ronds témoins correspondent comme  dans le schema ci-dessous."
            }

            if (difficulte == 2 ){
                PointBOSS = PointBOSS + 3;

                Conseil.classList.add("conseilPvictoire");

                Consigne.classList.remove("Hidden");
                Consigne.innerHTML="Si dans la proposition, un ou plusieurs ronds de " +
                    "couleurs sont bien dans la combinaison mais pas à la bonne place," +
                    " un rond rose apparaitra dans la cellule témoin la plus à gauche.<br>" +
                    "Dans le mode difficile, tu n'auras pas plus d'info. "











             }

             if (difficulte ==  3) {
                 PointBOSS = PointBOSS + 5;

                 Conseil.classList.add("conseilPvictoire");

                test();

                Conseil.classList.remove("Hidden");
                let Aside = document.querySelector(".Aside");
                Aside.classList.add("Hidden");
                // BTNsupprimer.classList.add("Hidden");
                main.remove();
                if (echec == 0){
                    Consigne.classList.remove("conseilPvictoire");
                    Conseil.classList.add("conseil2");

                    Conseil.innerHTML="Bravo, c'est un perfect!! Je n'y ai jamais " +
                        "cru mais .. Bravo!";
                } else{
                    if (echec == 1){
                        var victoryText = "échec"
                    }else{
                        var victoryText = "échecs"
                    }
                    Conseil.innerHTML="Tu as réussi !!! Avec " + echec + " " + victoryText +
                        ", mais bon c'est pas mal quand même. On appelle ça de la chance quoi..";

                }
            } else {

                difficulte++;
                compteurValidation = 0;
                event.stopPropagation();
                event.preventDefault();
                BTNdemarer.classList.remove("Hidden");


                // BTNsupprimer.classList.add("Hidden");
                // BTNdemarer.classList.remove("Hidden");
                var incrementligne = 0;
                IncrementBouton = 2;
            }

            // victoire = document.createElement("h1");
            // victoire.classList.add("popupW");
            // // popup.appendChild(victoire);
            //
            // width = 700;
            // height = 200;
            // compteurValidation = 0;
            // if(window.innerWidth)
            // {
            //     var left = (window.innerWidth-width)/1.2;
            //     var top = (window.innerHeight-height)/2;
            // }
            // else
            // {
            //     var left = (document.body.clientWidth-width)/1.5;
            //     var top = (document.body.clientHeight-height)/2;
            // }
            // // popup.classList.add("popupW");
            // window.open('popup.php','nom_de_ma_popup','resizable=no,menubar=no, scrollbars=no, top='+top+', left='+left+', width='+width+', height='+height+',resizable=no,directories=no');
        }
        IncrementBouton = IncrementBouton + 6;

        INCREMENTCOULEUR = 0;
        INCREMENTPOSITION = 0;

    }
    catch(err) {

    }

    });