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
const lienNiveauSuivant = document.querySelector('.lienNiveauSuivant');



form.addEventListener('submit', function(event){ //creer une fonction qui corrige le questionnaire
	event.stopPropagation();
	event.preventDefault();

	
	let reponse1Joueur = reponseQ1.value;
	let reponse2Joueur = reponseQ2.value;
	let reponse3Joueur = reponseQ3.value;
	let reponse4Joueur = reponseQ4.value;
	var point = 0;

	if (reponse1Joueur === 'b'){
		solutionQ1.innerHTML = "Bonne réponse !";
		solutionQ1.classList.add('bonneR');
		point +=1;
	}else{ solutionQ1.innerHTML =" La bonne réponse est la b) La fonction RANDOM est une fonction qui génère une chiffre aléatoire avec une borne max non inclus.";
solutionQ1.classList.add('badR');
};



	if (reponse2Joueur === 'c'){
		solutionQ2.innerHTML= "Bonne réponse !";
		solutionQ2.classList.add('bonneR');
		point +=1;
	}else{solutionQ2.innerHTML =" La bonne réponse est la c) Le mot final défini une constante qui ne changera plus de valeur une fois initialisée.";
solutionQ2.classList.add('badR');
};




	if (reponse3Joueur === 'b'){
		solutionQ3.innerHTML = "Bonne réponse !";
		solutionQ3.classList.add('bonneR');
		point +=1;
	}else{ solutionQ3.innerHTML  =" La bonne réponse est la b).";
solutionQ3.classList.add('badR');
};



	if (reponse4Joueur === 'a'){
		solutionQ4.innerHTML= "Bonne réponse !";
		solutionQ4.classList.add('bonneR');
		point +=1;
	}else{ solutionQ4.innerHTML=" La bonne réponse est la a) Une classe est un modèle regroupant des données et des fonctions internes ou accessibles depuis l'extérieur.";
solutionQ4.classList.add('badR');
};

affichePoints.innerHTML=" Vous avez : " + point + " points";

sessionStorage.setItem('pointsEval', point);
document.querySelector('.lienNiveauSuivant').style.display = 'block';

});


