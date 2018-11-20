const suite = document.querySelector('.suite')
//POINTS PAR NIVEAU MINI-JEUX PUZZLE
var pointsNiveau1 = sessionStorage.getItem("pointsNiveau1");
var pointsNiveau2 = sessionStorage.getItem("pointsNiveau2");
var pointsNiveau3 = sessionStorage.getItem("pointsNiveau3");
var pointsNiveau4 = sessionStorage.getItem("pointsNiveau4");
console.log('pointsNiveau1 vaut : ' + pointsNiveau1);

// var pointPerduNiveau1 = sessionStorage.getItem("pointPerduNiveau1");
// var pointPerduNiveau2 = sessionStorage.getItem("pointPerduNiveau2");
// var pointPerduNiveau3 = sessionStorage.getItem("pointPerduNiveau3");
// var pointPerduNiveau4 = sessionStorage.getItem("pointPerduNiveau4");

//RESULTATS PAR NIVEAU MINI-JEUX PUZZLE
var resultatNiveau1 = parseInt(pointsNiveau1);
var resultatNiveau2 = parseInt(pointsNiveau2);
var resultatNiveau3 = parseInt(pointsNiveau3);
var resultatNiveau4 = parseInt(pointsNiveau4);

console.log('resultatNiveau1 vaut : ' + resultatNiveau1);
console.log('resultatNiveau2 vaut : ' + resultatNiveau2);
console.log('resultatNiveau3 vaut : ' + resultatNiveau3);
console.log('resultatNiveau4 vaut : ' + resultatNiveau4);

//TOTAUX MINI-JEUX
var scoreTotalMiniJeux = 0;
scoreTotalMiniJeux = resultatNiveau1 + resultatNiveau2 + resultatNiveau3 + resultatNiveau4;

console.log('scoreTotalMiniJeux vaut : ' + scoreTotalMiniJeux);

var pointsEval = sessionStorage.getItem('pointsEvaluation');

console.log('pointsEvaluation vaut : ' + pointsEval);

//SCORE FINAL (EVALUATIONS + MINI-JEUX)

var scoreTotalFinal = parseInt(scoreTotalMiniJeux) + parseInt(pointsEval); 
console.log('scoreTotalFinal vaut : ' + scoreTotalFinal);



n1.appendChild(msg1);
n2.appendChild(msg2);
n3.appendChild(msg3);
n4.appendChild(msg4);
p1.appendChild(msgp1);
p2.appendChild(msgp2);
p3.appendChild(msgp3);
p4.appendChild(msgp4);
s1.appendChild(msgs1);
s2.appendChild(msgs2);


document.querySelector('.msg1').innerHTML = resultatNiveau1;
document.querySelector('.msg2').innerHTML = resultatNiveau2;
document.querySelector('.msg3').innerHTML = resultatNiveau3;
document.querySelector('.msg4').innerHTML = pointsChrono;

document.querySelector('.msgp1').innerHTML = tentativesNiveau1;
document.querySelector('.msgp2').innerHTML = tentativesNiveau2;
document.querySelector('.msgp3').innerHTML = tentativesNiveau3;
document.querySelector('.msgp4').innerHTML = chronoNiveau4;

document.querySelector('.msgs1').innerHTML = pointsEval;
document.querySelector('.msgs2').innerHTML = scoreTotalJoueur;

suite.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();

    window.location.href = "http://localhost/poesifacile/scripttraitement.php?point=" + scoreTotalFinal + '&salle=4';
});