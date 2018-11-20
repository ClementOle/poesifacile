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
	var pointsEval = 0;


	if (reponse1Joueur === 'd'){
		solutionQ1.innerHTML = "Bonne réponse !";
		solutionQ1.classList.add('bonneR');
		pointsEval +=1;
		
		
	}else{ solutionQ1.innerHTML =" La bonne réponse est la d) Aucune des réponses précédentes, il faut mettre une balise <script> dans sa page html.";
solutionQ1.classList.add('badR');
		
}



	if (reponse2Joueur === 'c'){
		solutionQ2.innerHTML= "Bonne réponse !";
		solutionQ2.classList.add('bonneR');
		pointsEval +=1;
		
		
	}else{solutionQ2.innerHTML =" La bonne réponse est la c) document.getElementsByAttribute.";
solutionQ2.classList.add('badR');

}




	if (reponse3Joueur === 'd'){
		solutionQ3.innerHTML = "Bonne réponse !";
		solutionQ3.classList.add('bonneR');
		pointsEval +=1;
		

	}else{ solutionQ3.innerHTML  =" La bonne réponse est la d) $b";
solutionQ3.classList.add('badR');

}



	if (reponse4Joueur === 'a'){
		solutionQ4.innerHTML= "Bonne réponse !";
		solutionQ4.classList.add('bonneR');
		pointsEval +=1;
		

	}else{ solutionQ4.innerHTML=" La bonne réponse est la a) if (a != 2) {}";
solutionQ4.classList.add('badR');

}

affichePoints.innerHTML=" Vous avez : " + pointsEval + " points";
sessionStorage.setItem('pointsEvaluation', pointsEval);

document.querySelector('.lienNiveauSuivant').style.display = 'block';


});

