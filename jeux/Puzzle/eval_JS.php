<?php
session_start();
if (!isset($_SESSION['login']) || !isset($_SESSION['id'])) {
    header ('Location: index.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="eval.css">
	<title>Evaluation</title>

</head>
	<body>
		
		<main class="main">

			<h1>Questionnaire Java Script</h1>

			<form action="" method="post" id="form">
			<ol>
				<div>
					<li><h3>Dans un fichier JavaScript externe (.js), il faut:</h3></li>
					<div class="Q1">
						<p>a) entourer le code avec les balises < script > et < /script >
							<br>
							b) préciser l’encodage du fichier avec la règle @charset
							<br>
							c) échapper les caractères spéciaux (X)HTML
							<br>
							d) Aucune des réponses précédentes
						</p>
					</div>
						<label for="reponseQ1" class="label"></label><!-- champs de saisie de la reponse -->
						<input type="text" id="reponseQ1" placeholder="Votre réponse ....." class="">
					<div class="solutionQ1">
						<!-- bloc pour affiché la solution -->
					</div>
				</div>


				<div>
					<li><h3>Quelle méthode n'existe pas dans le DOM?</h3></li>
					<div class="Q2">
						<p>a) document.getElementsByClassName
							<br>
							b) document.getElementsByTagName
							<br>
							c) document.getElementsByAttribute
							<br>
							d) document.getElementById
						</p>
					</div>
						<label for="reponseQ2" class="label"></label>
						<input type="text" id="reponseQ2" placeholder="Votre réponse ....." class=""><!-- champs de saisie de la reponse -->
					<div class="solutionQ2">
						<!-- bloc pour affiché la solution -->
					</div>

				</div>


				<div>
					<li><h3>Laquelle de ces propositions est un nom de variable valide en JavaScript?</h3></li>
					<div class="Q3"> 
						<p>a) var
							<br>
							b) 2a
							<br>
							c) NaN
							<br>
							d) $b
							<br>
							e) defaut
						</p>	
					</div>
						<label for="reponseQ3" class="label"></label>
						<input type="text" id="reponseQ3" placeholder="Votre réponse ....." class=""><!-- champs de saisie de la reponse -->
					<div class="solutionQ3" >
						<!-- bloc pour affiché la solution -->
					</div>
				</div>


				<div>
					<li><h3>Laquelle de ces syntaxes est correcte?</h3></li>
					<div class="Q4">
						<p>a) if (a != 2) {} 
							<br>
							b) if a != 2 {}
							<br>
							c) if (a < > 2) {}
							<br>
							d) if a < > 2 {}
						</p>
					</div>
						<label for="reponseQ4" class="label"></label>
						<input type="text" id="reponseQ4" placeholder="Votre réponse ....." class=""><!-- champs de saisie de la reponse -->
					<div class="solutionQ4">
						<!-- bloc pour affiché la solution -->
					</div>
				</div>

			</ol>


			<div class="affichePoints">	
			</div>
			<div class="boutonT">
				<input type=submit class="bouton" value="Terminer"></input>
				<br>
				<br>
			</div>
			
			</form>
		</main>

		<p class="lienNiveauSuivant" style="display: none"><a href="tableauScore.php">Lien vers le tableau des scores</a></p>
		<script type="text/javascript" src="eval_JS.js"></script>
	</body>
</html>