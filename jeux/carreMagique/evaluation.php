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

			<h1>Questionnaire d'Algorithme</h1>

			<form action="" method="post" id="form">
			<ol>
				<div>
					<li><h3>L’étude de la complexité des algorithmes permet de comparer et de savoir quel algorithme prendrait plus de temps qu’un autre. Mais savoir faire cette comparaison, ou proposer un algorithme plus performant, est...</h3> </li>

						<div class="Q1">
						<p>a) réservé à une élite, formée pour cela et qui maîtrise les mathématiques.
							<br>
							b) sans grande importance car on voit bien que les différences de temps sont négligeables.
							<br>
							c) accessible à toutes et à tous, avec un peu de réflexion, parfois même sans bagage informatique car on peut faire appel à notre expérience de la vie de tous les jours.
							</p>
					</div>
						<label for="reponseQ1" class="label"></label><!-- champs de saisie de la reponse -->
						<input type="text" id="reponseQ1" placeholder="Votre réponse ....." class="">

					<div class="solutionQ1"></div>
					</div>
				<div>
					<li><h3>Après l'exécution du code suivant, quelle sera la valeur finale de a ?</h3></li>
					<div class="Q2">
							<p class="code">Début<br>
							a=2<br>
							a=a+a<br>
							a=a+a<br>
							Fin<br>
						</p>

						<p>a) 4
							<br>
							b) 8
							<br>
							c) 16
							
							</p>
					</div>
						<label for="reponseQ2" class="label"></label>
						<input type="text" id="reponseQ2" placeholder="Votre réponse ....." class=""><!-- champs de saisie de la reponse -->

					<div class="solutionQ2"></div>

				</div>
				<div>
					<li><h3>Après l'exécution du code suivant, quelle sera la valeur de c?</h3></li>
					<div class="Q3"> 
						<p class="code">
							Début<br>
							a=7<br>
							b=-5<br>
							c=a-b<br>
							c=c+a<br>
							Fin<br>

						</p>

						<p>a) - 12
							<br>
							b) 12
							<br>
							c) 19
						</p>
						
					</div>

						<label for="reponseQ3" class="label"></label>
						<input type="text" id="reponseQ3" placeholder="Votre réponse ....." class=""><!-- champs de saisie de la reponse -->

					<div class="solutionQ3" ></div>
				</div>
				<div>

					<li><h3> Quelle sera la valeur de i affichée à la fin de l'exécution de l'algorithme suivant ?</h3></li>
					<div class="Q4">
						<p class="code">
							i = 1<br>
							Tant que i <= 4<br>
							i=i+3<br>
							Fin Tant que<br>
							Afficher i <br>

						</p>

						<p>a) 4
							<br>
							b) 7
							<br>
							c) 1
						</p>
					</div>


						<label for="reponseQ4" class="label"></label>
						<input type="text" id="reponseQ4" placeholder="Votre réponse ....." class=""><!-- champs de saisie de la reponse -->

					<div class="solutionQ4"></div>

				</div>
			</ol>
			<div class="affichePoints">	
			</div>

			<div class="boutonT">
				<input type=submit class="bouton" value="Terminer">
				<br>
				<br>
			</div>
            <div class="buttonSuite disparition">
                <button>Suite</button>
            </div>
			</form>
		</main>
		<script type="text/javascript" src="evaluation.js"></script>
	</body>
</html>