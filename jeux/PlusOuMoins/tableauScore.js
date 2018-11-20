const n1 = document.querySelector('.n1');
const n2 = document.querySelector('.n2');
const n3 = document.querySelector('.n3');
const n4 = document.querySelector('.n4');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');
const msg3 = document.querySelector('.msg3');
const msg4 = document.querySelector('.msg4');
const msgp1 = document.querySelector('.msgp1');
const msgp2 = document.querySelector('.msgp2');
const msgp3 = document.querySelector('.msgp3');
const msgp4 = document.querySelector('.msgp4');
const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');
const msgs1 = document.querySelector('.msgs1');
const msgs2 = document.querySelector('.msgs2');

const suite = document.querySelector('.suite');


var tempsMinutes = sessionStorage.getItem("chronoMinutes");
var tempsSecondes = sessionStorage.getItem("chronoSecondes");
var tempsMsec = sessionStorage.getItem("chronoMsec");
var chronoNiveau4 = tempsMinutes + ":" + tempsSecondes + ":" + tempsMsec;

console.log('chronoNiveau4 est à ' + chronoNiveau4);


var pointsGagnesNiveau1 = sessionStorage.getItem("pointsGagnesNiveau1");
var pointsGagnesNiveau2 = sessionStorage.getItem("pointsGagnesNiveau2");
var pointsGagnesNiveau3 = sessionStorage.getItem("pointsGagnesNiveau3");

var pointsPerdusNiveau1 = sessionStorage.getItem("pointsPerdusNiveau1");
var pointsPerdusNiveau2 = sessionStorage.getItem("pointsPerdusNiveau2");
var pointsPerdusNiveau3 = sessionStorage.getItem("pointsPerdusNiveau3");

var tentativesNiveau1 = sessionStorage.getItem('nbTentatives1');
var tentativesNiveau2 = sessionStorage.getItem('nbTentatives2');
var tentativesNiveau3 = sessionStorage.getItem('nbTentatives3');

var resultatNiveau1 = parseInt(pointsGagnesNiveau1) + parseInt(pointsPerdusNiveau1);
var resultatNiveau2 = parseInt(pointsGagnesNiveau2) + parseInt(pointsPerdusNiveau2);
var resultatNiveau3 = parseInt(pointsGagnesNiveau3) + parseInt(pointsPerdusNiveau3);

var pointsEval = sessionStorage.getItem('pointsEval');
pointsEval = parseInt(pointsEval);

var resultatFinal1 = resultatNiveau1 + resultatNiveau2 + resultatNiveau3;

console.log('resultatNiveau1 vaut : ' + resultatNiveau1);
console.log('resultatNiveau2 vaut : ' + resultatNiveau2);
console.log('resultatNiveau3 vaut : ' + resultatNiveau3);
console.log('resultatFinal1 vaut : ' + resultatFinal1);

var pointsChrono;

if (tempsMinutes < 1){
	pointsChrono = 3;
}
if (tempsMinutes >= 1){
	pointsChrono = 2;
}
if (tempsMinutes >= 2){
	pointsChrono = 1;
}
if (tempsMinutes >= 3){
	pointsChrono = 0;
}

console.log('pointsChrono vaut : ' + pointsChrono);
console.log('pointsEval vaut : ' + pointsEval);

scoreTotalJoueur = resultatFinal1 + pointsChrono + pointsEval;
console.log('scoreTotalJoueur vaut : ' + scoreTotalJoueur);

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

    window.location.href = "http://localhost/poesifacile/scripttraitement.php?point=" + scoreTotalJoueur + '&salle=3';
});