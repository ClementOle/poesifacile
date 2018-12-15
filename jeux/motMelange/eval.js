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
const boutonS = document.querySelector('.boutonS');
const bouton = document.querySelector('.bouton');

var pointTotal = -1;


form.addEventListener('submit', function (event) { //creer une fonction qui corrige le questionnaire
    event.stopPropagation();
    event.preventDefault();


    let reponse1Joueur = reponseQ1.value;
    let reponse2Joueur = reponseQ2.value;
    let reponse3Joueur = reponseQ3.value;
    let reponse4Joueur = reponseQ4.value;
    var point = 0;

    if (reponse1Joueur == 3) {
        solutionQ1.innerHTML = "Bonne réponse !";
        solutionQ1.classList.add('bonneR');
        point += 1;
    } else {
        solutionQ1.innerHTML = " La bonne réponse est trois occurences (voir avec l' évaluation de la promo deux, Udev!)";
        solutionQ1.classList.add('badR');
    }


    if (reponse2Joueur === 'd') {
        solutionQ2.innerHTML = "Bonne réponse !";
        solutionQ2.classList.add('bonneR');
        point += 1;
    } else {
        solutionQ2.innerHTML = " La bonne réponse est la d) delete table client n'existe pas";
        solutionQ2.classList.add('badR');
    }


    if (reponse3Joueur === 'd') {
        solutionQ3.innerHTML = "Bonne réponse !";
        solutionQ3.classList.add('bonneR');
        point += 1;
    } else {
        solutionQ3.innerHTML = " La bonne réponse est la d) La jointure full outer join permet de combiner les résultats des deux tables."
        solutionQ3.classList.add('badR');
    }


    if (reponse4Joueur === 'a') {
        solutionQ4.innerHTML = "Bonne réponse !";
        solutionQ4.classList.add('bonneR');
        point += 1;
    } else {
        solutionQ4.innerHTML = " La bonne réponse est la a)."
        solutionQ4.classList.add('badR');
    }

    affichePoints.innerHTML = " Vous avez : " + point + " points";
    boutonS.classList.remove("cacher");
    bouton.classList.add("cacher");

    pointTotal = (sessionStorage.getItem("LevelReussi") * 5 + point * 2.5) / 2;
});


boutonS.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    window.location.href = "http://localhost/poesifacile/scripttraitement.php?point=" + pointTotal + '&salle=4';

});

