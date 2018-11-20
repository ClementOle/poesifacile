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
	<link rel="stylesheet" type="text/css" href="PlusOuMoins_Niveau3.css">
	<title>Jeu du Plus ou Moins</title>
</head>
<body>
	<main>
		<div>
			<h1>Jeu du Plus ou Moins - Niveau 3</h1>
			<div class="bandeau">
				<div class="Regles">Règles du jeu</div>
				<div class="choixMusique">&#9835; Un peu de musique &#9835;?</div>
				<div class="pisteAudio"></div>
			</div>
			<p> L'ordinateur a généré un nombre aléatoire entre 0 et 10. Tentez de deviner ce nombre. Vous avez droit à 2 tentatives!</p>
		</div>

<div class="blocGeneral">
	<div class="bloc1">
		<div class="vousAvezSaisi" style="display: block">Vous avez saisi : </div>	
	</div>

	<div class="bloc2">	
		<div class="devinezUnNombre">
		<form action="" method="post" id="form" style="display: block">
			<div id="bloc2a" style="display: block"><label for="label">Devinez un nombre</label></div>
			<div id="bloc2b" style="display: block"><input type="text" id="label" placeholder="" autocomplete="off" required ></div>
			<div id="rappelJeu" style="display: none">
				<p>Les réponses autres que des nombres entiers ne sont pas autorisées. Par exemple : le mot "cinq" n'est pas valide, il faudra taper le nombre "5". A vous de jouer!</p>
			</div>
			<div id="bloc2c" style="display: block"><input type="submit" value="Valider" class="boutonValider"></div>
		</form>
		</div>

		<div class="reponse">
			<div id="messageReponse" style="display: block">Reponse : </div>
			<div id="boutonAide" style="display: none"><button id="aide" onclick="rappelDesRegles()">Besoin d'aide?</button></div>
		</div>
	</div>

	<div class="bloc3">
		<div class="tentatives" style="display: block">Tentatives : </div>
	</div>
</div>

<div class="provocation">

</div>

<div class="gagne">
</div>

<div class="continuerPartieOuPas" style="display: none">
	<a href="PlusOuMoins_Niveau4.php" id="lienNiveau4">Cliquez ici pour acceder au <br> niveau 4</a>

</div>
</main>
	<script type="text/javascript" src="PlusOuMoins_Niveau3.js"></script>
</body>
</html>