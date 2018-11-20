<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="eval.css">
	<title>Evaluation</title>

</head>
	<body>
		
		<main class="main">

			<h1>Questionnaire Java</h1>

			<form action="" method="post" id="form">
			<ol>
				<div>
					<li><h3>A quoi sert la requête Java :</h3> </li>
						<p class="code">
							Ramdom rand = new Random () ;<br>
							nbAleatoire = rand.nextInt(bound : 11) ;<br>
						</p>

					<div class="Q1">
						<p>a) soit : fonction aléatoire d’un nombre entre 0 et 11 inclus
							<br>
							b) soit : fonction aléatoire d’un nombre entre 0 et 11 non inclus
						</p>
					</div>
						<label for="reponseQ1" class="label"></label><!-- champs de saisie de la reponse -->
						<input type="text" id="reponseQ1" placeholder="Votre réponse ....." class="">

					<div class="solutionQ1">
						<!-- bloc pour affiché la solution -->
					</div>
				</div>


				<div>

					<li><h3>Une constante ne peut plus changer de valeur après son initialisation. Par quel mot la déclare t’on dans l’exemple?</h3></li>
						<p class="code">
							public static final short NOMBRE_MOIS_ANNEE = 12;<br>
						</p>

					<div class="Q2">
						<p>a) public
							<br>
							b) static
							<br>
							c) final
							<br>
							d) short
						</p>
					</div>
						<label for="reponseQ2" class="label"></label>
						<input type="text" id="reponseQ2" placeholder="Votre réponse ....." class=""><!-- champs de saisie de la reponse -->

					<div class="solutionQ2">
						<!-- bloc pour affiché la solution -->
					</div>
				</div>


				<div>
					<li><h3>Le tableau à 2 dimension. Quel chiffre renvoi sudoku[2][2] = ' ?';</h3></li>
						<p class="code">
							char [ ][ ] sudoku = {<br>
    						{'2', '1', '9'},<br>
    						{'8', '4', '3'},<br>
    						{'6', '7', '5'} ; }<br>
						</p>

					<div class="Q3"> 
						<p>a) 4
							<br>
							b) 5
							<br>
							c) 3
							<br>
							d) 7
						</p>
						
					</div>
						<label for="reponseQ3" class="label"></label>
						<input type="text" id="reponseQ3" placeholder="Votre réponse ....." class=""><!-- champs de saisie de la reponse -->
					<div class="solutionQ3" >
						<!-- bloc pour affiché la solution -->
					</div>
				</div>


				<div>
					<li><h3>Qu’est ce qu’une classe ?</h3></li>
					<div class="Q4">
						<p>a) un modèle regroupant des données et des fonctions internes ou accessibles depuis l'extérieur.
							<br>
							b) une référence vers un espace mémoire contenant l'objet en lui-même.
							<br>
							c) représentent les données des objets.
							<br>
							d) représentent les fonctions et traitements effectués sur les objets.
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
		<script type="text/javascript" src="eval_java.js"></script>
	</body>
</html>