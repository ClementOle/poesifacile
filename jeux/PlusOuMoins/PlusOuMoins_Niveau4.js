const bloc2 = document.querySelector('.bloc2');
const devinezUnNombre = document.querySelector('.devinezUnNombre');
const form = document.getElementById('form');
const bloc2a = document.querySelector('.bloc2a');
const bloc2b = document.querySelector('.bloc2b');
const label = document.getElementById('label');
const label2 = document.getElementById('label2');
const bloc2c = document.querySelector('.bloc2c');
const bloc2d = document.querySelector('.bloc2d');
const boutonValider = document.querySelector('.boutonValider');
const poursuivreJeu = document.querySelector('.poursuivreJeu');
const boutonCommencer = document.getElementById('boutonCommencer');
const bandeau = document.querySelector('.bandeau');
const pisteAudio = document.querySelector('.pisteAudio');
const center = document.querySelector('.center');
const blocChrono = document.querySelector('.blocChrono');
const phraseNombre = document.getElementById('phraseNombre');
const phraseNombreOK = document.getElementById('phraseNombreOK');
const phraseLettre = document.getElementById('phraseLettre');
const phraseLettreOK = document.getElementById('phraseLettreOK');
const bravoNombreTrouve = document.getElementById('bravoNombreTrouve');
const bravoLettreTrouvee = document.getElementById('bravoLettreTrouvee');
const lecteurAudio = document.getElementById('lecteurAudio');
const eval = document.querySelector('.eval');


const tentatives = document.querySelector('.tentatives');
const principal = document.querySelector('.principal');
const retourValeurNombre = document.querySelector('.retourValeurNombre');

const nombreTropPetit = document.getElementById('nombreTropPetit');
const nombreTropGrand = document.getElementById('nombreTropGrand');
const nombreEgalite = document.getElementById('nombreEgalite');
const lettreTropPetite = document.getElementById('lettreTropPetite');
const lettreTropGrande = document.getElementById('lettreTropGrande');
const lettreEgalite = document.getElementById('lettreEgalite');

//GENERATION DU NOMBRE ET DE LA LETTRE ALEATOIRE
let nombreAleatoire = Math.floor(Math.random() * 100); //Nombre généré entre 0 et 100 inclus.
console.log('nombreAleatoire vaut : ' + nombreAleatoire);
let indiceLettreAleatoire = Math.floor(Math.random() * 26);//Nombre généré entre 0 et 26 inclus. Servira d'indice au tableauAlphabet.

//LECTEUR MUSIQUE
lecteurAudio.play();
lecteurAudio.volume = 0.2;
lecteurAudio.setAttribute("controls", "controls"); //Permet de pouvoir contrôler la musique et le son. Sur Chrome pas de barre de son juste un on/mute

//REMPLISSAGE TABLEAU AVEC INDICES
var tableauAlphabet = new Array(26);

tableauAlphabet[0]="a";
tableauAlphabet[1]="b";
tableauAlphabet[2]="c";
tableauAlphabet[3]="d";
tableauAlphabet[4]="e";
tableauAlphabet[5]="f";
tableauAlphabet[6]="g";
tableauAlphabet[7]="h";
tableauAlphabet[8]="i";
tableauAlphabet[9]="j";
tableauAlphabet[10]="k";
tableauAlphabet[11]="l";
tableauAlphabet[12]="m";
tableauAlphabet[13]="n";
tableauAlphabet[14]="o";
tableauAlphabet[15]="p";
tableauAlphabet[16]="q";
tableauAlphabet[17]="r";
tableauAlphabet[18]="s";
tableauAlphabet[19]="t";
tableauAlphabet[20]="u";
tableauAlphabet[21]="v";
tableauAlphabet[22]="w"
tableauAlphabet[23]="x";
tableauAlphabet[24]="y";
tableauAlphabet[25]="z";


let lettreAleatoire = tableauAlphabet[indiceLettreAleatoire];//Genere une lettre aléatoire avec l'indice aléatoire généré par le random.
console.log('lettreAleatoire vaut : ' + lettreAleatoire);


let indiceLettreJoueur; //Servira à stocker l'indice de la lettre (grace à indexOf) qui correspondra au choix du joueur.
let compteurNombreEgalite = 0; //Sert en réalité de booléen pour désigner si le nombre a été trouvé, à voir si besoin de le passer en booléen.
let compteurLettreEgalite = 0; //Sert en réalité de booléen pour désigner si la lettre a été trouvée, à voir si besoin de le passer en booléen.


document.querySelector('.poursuivreJeu').style.display = 'none'; //Masque le bouton qui ne sert à rien avant chaque nouvelle tentative.

form.addEventListener('submit', function maFonction(event){
	event.stopPropagation();
	event.preventDefault();

	


	valeurNombre = label.value; //Joueur entre un nombre
	valeurLettre = label2.value; //Joueur entre une lettre

console.log('valeurNombre vaut : ' + valeurNombre);

//COMPARAISON VALEUR NOMBRE JOUEUR / NOMBRE ALEATOIRE
if (valeurNombre != nombreAleatoire){
	if (valeurNombre < nombreAleatoire) {	
		document.getElementById('nombreTropPetit').style.display = 'block';
		document.getElementById('nombreTropGrand').style.display = 'none';
		document.getElementById('nombreEgalite').style.display = 'none';
	} 
	else if (valeurNombre > nombreAleatoire){									//ce duo de bloc sert à afficher/masquer les messages type "fumée".
		document.getElementById('nombreTropGrand').style.display = 'block';
		document.getElementById('nombreTropPetit').style.display = 'none';
		document.getElementById('nombreEgalite').style.display = 'none';
	}	
}

if (valeurNombre == nombreAleatoire){
	document.getElementById('phraseNombreOK').style.display = 'block'; //Phrase "Vous avez trouvé!"
	document.getElementById('phraseNombre').style.display = 'none'; //Phrase "Votre nombre est trop"
	document.getElementById('bravoNombreTrouve').style.display = 'block'; //Message BRAVO en "dur" car pas gérable avec le BRAVO en "fumée"
	document.getElementById('nombreTropGrand').style.display = 'none';
	document.getElementById('nombreTropPetit').style.display = 'none';
	compteurNombreEgalite = 1;
}

//COMPARAISON LETTRE JOUEUR / LETTRE ALEATOIRE
indiceLettreJoueur = (tableauAlphabet.indexOf(valeurLettre)); // Récupère l'indice qui correspond à la lettre du joueur
console.log('///indiceLettreJoueur : ' + indiceLettreJoueur + ' vaut : ' + valeurLettre);
console.log("indiceLettreAleatoire : " + indiceLettreAleatoire + ' vaut : ' + lettreAleatoire);
if (valeurLettre != lettreAleatoire){ 
	if(indiceLettreJoueur < indiceLettreAleatoire){
		document.getElementById('lettreTropPetite').style.display = 'block';
		document.getElementById('lettreTropGrande').style.display = 'none';
		document.getElementById('lettreEgalite').style.display = 'none';
	}
																					//ce duo de bloc sert à afficher/masquer les messages type "fumée".
	else if( indiceLettreJoueur > indiceLettreAleatoire){	
		document.getElementById('lettreTropGrande').style.display = 'block';
		document.getElementById('lettreTropPetite').style.display = 'none';
		document.getElementById('lettreEgalite').style.display = 'none';
	}
}
if (indiceLettreJoueur == indiceLettreAleatoire){
	document.getElementById('phraseLettreOK').style.display = 'block';//Phrase "Vous avez trouvé!"
	document.getElementById('phraseLettre').style.display = 'none';//Phrase "Votre lettre se situe"
	document.getElementById('bravoLettreTrouvee').style.display = 'block'; //Message BRAVO en "dur" car pas gérable avec le BRAVO en "fumée"
	document.getElementById('lettreTropGrande').style.display = 'none';
	document.getElementById('lettreTropPetite').style.display = 'none';
	compteurLettreEgalite = 1;
}
								

if (valeurNombre != nombreAleatoire){
	document.getElementById('label').value = '';//Efface les données saisies précedemment dans le formulaire
}
if (valeurLettre != lettreAleatoire){
	document.getElementById('label2').value = '';//Efface les données saisies précedemment dans le formulaire
}

if((valeurNombre == nombreAleatoire)&&(valeurLettre == lettreAleatoire)){ //Si nombre et lettre trouvés, on stop le chrono
	chronoStop();
}


document.querySelector('.bloc2').style.display = 'none'; //Masque le bloc de champs formulaire
document.querySelector('.poursuivreJeu').style.display = 'block'; //Affiche le bouton qui fait perdre du temps pour relancer la tentative suivante.
if ((compteurNombreEgalite == 1 ) && (compteurLettreEgalite == 1)){
		document.querySelector('.poursuivreJeu').style.display = 'none'; // Une fois que le jeu est terminé on enlève le bouton qui fait perdre du temps
		document.querySelector('.eval').style.display = 'block';
	}
			
});

function poursuivre(){ //Gere les Affichages / Masquages à la fin de chaque tentative
	document.getElementById('nombreTropPetit').style.display = 'none';
	document.getElementById('nombreTropGrand').style.display = 'none';
	document.getElementById('nombreEgalite').style.display = 'none';
	document.getElementById('lettreTropPetite').style.display = 'none';
	document.getElementById('lettreTropGrande').style.display = 'none';
	document.getElementById('lettreEgalite').style.display = 'none';
	document.querySelector('.bloc2').style.display = 'block';
	document.querySelector('.poursuivreJeu').style.display = 'none';
	if (compteurNombreEgalite == 1){
		document.getElementById('bravoNombreTrouve').style.display = 'block';
		document.getElementById('label').disabled = true; //Permet de griser les champs form quand une bonne réponse est trouvée.
	}
	if (compteurLettreEgalite == 1){
		document.getElementById('bravoLettreTrouvee').style.display = 'block';
		document.getElementById('label2').disabled = true; //Permet de griser les champs form quand une bonne réponse est trouvée.
	}
}

//FONCTION CHRONO AVEC UN RESET A CHAQUE CHARGEMENT DE PAGE
var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
window.onload = chronoReset;
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	var minutes;
	var secondes;
	var milliSecondes;
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").value = min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
	minutes = min;
	secondes = sec;
	milliSecondes = msec;

	sessionStorage.setItem("chronoMinutes", minutes);
	sessionStorage.setItem("chronoSecondes", secondes);
	sessionStorage.setItem("chronoMsec", msec);

}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!" // Masqué pour le joueur, le bouton stop est laissé au cas où.
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
	document.getElementById('boutonCommencer').style.display = 'none'; //Bouton commencer lance le chrono et affiche le bloc de champs
	document.querySelector('.bloc2').style.display = 'block';
	document.querySelector('.blocChrono').style.display = 'block';
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").value = "00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").value = "00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}


