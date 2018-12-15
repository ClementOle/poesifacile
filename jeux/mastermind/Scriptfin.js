const PointBoss = sessionStorage.getItem('PointBoss');
const corps = document.querySelector('.corps');
console.log("Tu es curieux! si tu veux consulter ton score de Mastermind tape :'PointBoss' et la touche Entrer");
if (PointBoss > 4) {
    titre = document.createElement("h1");
    titre.innerHTML = "Bravo tu as réussi ta POE!!";
    titre.classList.add("titre");
    corps.appendChild(titre);
    imageF = document.createElement("img");
    imageF.src = "image/excelent.gif";
    corps.appendChild(imageF);
} else {
    titre = document.createElement("h1");
    titre.innerHTML = "You snooze you loose!!!";
    titre.classList.add("titre");
    corps.appendChild(titre);
    imageF = document.createElement("img");
    imageF.src = "image/afro.gif";
    corps.appendChild(imageF);
}
