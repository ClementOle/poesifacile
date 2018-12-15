const reponseQ1 = document.getElementById('reponseQ1');
const reponseQ2 = document.getElementById('reponseQ2');
const reponseQ3 = document.getElementById('reponseQ3');
const reponseQ4 = document.getElementById('reponseQ4');
const solutionQ1 = document.querySelector('.solutionQ1');
const solutionQ2 = document.querySelector('.solutionQ2');
const solutionQ3 = document.querySelector('.solutionQ3');
const solutionQ4 = document.querySelector('.solutionQ4');
const form = document.getElementById('form');
const affichePoints = document.querySelector('.affichePoints');

const boutonT = document.querySelector('.boutonT');
const boutonS = document.querySelector('.boutonS');

var pointTotal = -1;


form.addEventListener('submit', function (event) { //creer une fonction qui corrige le questionnaire
    event.stopPropagation();
    event.preventDefault();


    let reponse1Joueur = reponseQ1.value;
    let reponse2Joueur = reponseQ2.value;
    let reponse3Joueur = reponseQ3.value;
    let reponse4Joueur = reponseQ4.value;
    var point = 0;

    if (reponse1Joueur === 'd') {
        solutionQ1.innerHTML = "Bonne réponse !";
        solutionQ1.classList.add('bonneR');
        point += 1;
    } else {
        solutionQ1.innerHTML = " La bonne réponse est la d) La balise < br > est un retour à la ligne.";
        solutionQ1.classList.add('badR');
    }


    if (reponse2Joueur === 'a') {
        solutionQ2.innerHTML = "Bonne réponse !";
        solutionQ2.classList.add('bonneR');
        point += 1;
    } else {
        solutionQ2.innerHTML = " La bonne réponse est la a) Un même identifiant ne doit être utilisé qu'une fois, une même classe peut être utilisée plusieurs fois.";
        solutionQ2.classList.add('badR');
    }


    if (reponse3Joueur === 'a') {
        solutionQ3.innerHTML = "Bonne réponse !";
        solutionQ3.classList.add('bonneR');
        point += 1;
    } else {
        solutionQ3.innerHTML = " La bonne réponse est a) Quand on veut faire un bloc sans sémantique particulière.";
        solutionQ3.classList.add('badR');
    }


    if (reponse4Joueur === 'd') {
        solutionQ4.innerHTML = "Bonne réponse !";
        solutionQ4.classList.add('bonneR');
        point += 1;
    } else {
        solutionQ4.innerHTML = " La bonne réponse est d) Relier un fichier .css à une page HTML.";
        solutionQ4.classList.add('badR');
    }

    affichePoints.innerHTML = " Vous avez : " + point + " point(s)";
    boutonT.classList.add("cacher");
    boutonS.classList.remove("cacher");

    pointTotal = (parseFloat(sessionStorage.getItem('pointJeux')) + parseFloat(point) * 2.5) / 2;

});

boutonS.addEventListener('click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    window.location.href = "http://localhost/poesifacile/scripttraitement.php?point=" + pointTotal + '&salle=5';
});
