const reponseQ1 = document.getElementById('reponseQ1');
const reponseQ2 = document.getElementById('reponseQ2');
const reponseQ3 = document.getElementById('reponseQ3');
const reponseQ4 = document.getElementById('reponseQ4');
const solutionQ1 = document.querySelector('.solutionQ1');
const solutionQ2 = document.querySelector('.solutionQ2');
const solutionQ3 = document.querySelector('.solutionQ3');
const solutionQ4 = document.querySelector('.solutionQ4');
const form = document.getElementById('form');
const affichePoints=document.querySelector('.affichePoints');

var pointTotal = -1;
const boutonT = document.querySelector('.boutonT');
const buttonSuite = document.querySelector('.buttonSuite');



form.addEventListener('submit', function(event){ //creer une fonction qui corrige le questionnaire
    event.stopPropagation();
    event.preventDefault();


    let reponse1Joueur = reponseQ1.value;
    let reponse2Joueur = reponseQ2.value;
    let reponse3Joueur = reponseQ3.value;
    let reponse4Joueur = reponseQ4.value;
    var point = 0;

    if (reponse1Joueur === 'c'){
        solutionQ1.innerHTML = "Bonne réponse !";
        solutionQ1.classList.add('bonneR');
        point +=1;
    }else{ solutionQ1.innerHTML =" La bonne réponse est la c) L'algorithme est accessible à toutes et à tous, avec un peu de réflexion, parfois même sans bagage informatique car on peut faire appel à notre expérience de la vie de tous les jours.";
        solutionQ1.classList.add('badR');
    }



    if (reponse2Joueur === 'b'){
        solutionQ2.innerHTML= "Bonne réponse !";
        solutionQ2.classList.add('bonneR');
        point +=1;
    }else{solutionQ2.innerHTML =" La bonne réponse est la b) car a=2 ; a=a+a soit a=2+2=4 ; a=a+a soit a=4+4=8";
        solutionQ2.classList.add('badR');
    }




    if (reponse3Joueur === 'c'){
        solutionQ3.innerHTML = "Bonne réponse !";
        solutionQ3.classList.add('bonneR');
        point +=1;
    }else{ solutionQ3.innerHTML  =" La bonne réponse est c) car a=7 b=-5 ;c=a-b soit c=7-(-5)=12 ;c=c+a soit c=12+7=19";
        solutionQ3.classList.add('badR');
    }



    if (reponse4Joueur === 'b'){
        solutionQ4.innerHTML= "Bonne réponse !";
        solutionQ4.classList.add('bonneR');
        point +=1;
    }else{ solutionQ4.innerHTML=" La réponse est b) car au 1er tour de boucle i=i+3 soit i=1+3=4, 4<=4 donc on peut faire un 2eme tour de boucle i=i+3 soit i=4+3=7";
        solutionQ4.classList.add('badR');
    }

    affichePoints.innerHTML=" Vous avez : " + point + " points";
    pointTotal = (parseFloat(sessionStorage.getItem('pointJeux'	)) + parseFloat(point)*2.5)/2;

    boutonT.classList.add('disparition');
    buttonSuite.classList.remove('disparition');

});

buttonSuite.addEventListener('click', function (event) {
    window.location.href = "http://localhost/poesifacile/scripttraitement.php?point=" + pointTotal + '&salle=1';

});

