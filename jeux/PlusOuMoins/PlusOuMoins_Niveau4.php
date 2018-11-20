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
	<link rel="stylesheet" type="text/css" href="PlusOuMoins_Niveau4.css">

	<title>Jeu du Plus ou Moins</title>
</head>
<body>
	<main>
		<div>
			<h1>Jeu du Plus ou Moins - Niveau 4</h1>
			<div class="bandeau">
				<div class="Regles">Règles du jeu</div>
				<div class="choixMusique">&#9835; Un peu de musique &#9835;?</div>
				<div class="musiqueRequiem"><audio id="lecteurAudio" src="media/musique4.mp3"></audio></div>
			</div>
			<p> L'ordinateur a généré un nombre aléatoire entre 0 et 100 et une lettre aléatoire entre a et z. <br>Tentez de deviner ce nombre et cette lettre. Moins vous mettrez de temps et plus vous aurez de points! <br>
			Vous devez écrire vos lettres en minuscules. <br>
			Petit conseil : lisez bien ce qu'on vous indique...</p>
		</div>

	<div class="bloc2" style="display: none">	
		<div class="devinezUnNombre">
			<form action="" method="post" id="form">
			<div class="bloc2a"><label for="label">Devinez un nombre</label></div>
			<div class="bloc2b"><input type="text" id="label" placeholder="Entrez un nombre" autocomplete="off" required=""></div>
			<div class="bloc2d"><input type="text" id="label2" placeholder="Entrez une lettre" autocomplete="off" required=""></div>
			<div class="bloc2c"><input type="submit" value="Valider" class="boutonValider"></div>
		</form>
		</div>	
	</div>
	


	<div class="center" style="display: none">
		<ul>
		<li>S</li>
		<li>M</li>
		<li>O</li>
		<li>K</li>
		<li>E</li>
		</ul>
	</div>


<div id="phraseNombre" style="display: block">Votre nombre est trop :
</div>

<div id="phraseLettre" style="display: block">Votre lettre se situe :
</div>

<div id="phraseNombreOK" style="display: none">Vous avez trouvé!
</div>

<div id="phraseLettreOK" style="display: none">Vous avez trouvé!
</div>

<div id="bravoNombreTrouve" style="display: none">BRAVO
</div>

<div id="bravoLettreTrouvee" style="display: none">BRAVO
</div>



 
				<!--PARTIE NOMBRE -->
	<div id="nombreTropPetit" style="display: none">
		<ul>
		<li>P</li>
		<li>E</li>
		<li>T</li>
		<li>I</li>
		<li>T</li>
		</ul>
	</div>

	<div id="nombreTropGrand" style="display: none">
		<ul>
		<li>G</li>
		<li>R</li>
		<li>A</li>
		<li>N</li>
		<li>D</li>
		</ul>
	</div>

	<div id="nombreEgalite" style="display: none">
		<ul>
		<li>B</li>
		<li>R</li>
		<li>A</li>
		<li>V</li>
		<li>O</li>
		</ul>
	</div>

			<!-- PARTIE LETTRE -->
	<div id="lettreTropPetite" style="display: none">
		<ul>
		<li>A</li>
		<li>V</li>
		<li>A</li>
		<li>N</li>
		<li>T</li>
		</ul>
	</div>

	<div id="lettreTropGrande" style="display: none">
		<ul>
		<li>A</li>
		<li>P</li>
		<li>R</li>
		<li>E</li>
		<li>S</li>
		</ul>
	</div>

	<div id="lettreEgalite" style="display: none">
		<ul>
		<li>B</li>
		<li>R</li>
		<li>A</li>
		<li>V</li>
		<li>O</li>
		</ul>
	</div>


<div class="poursuivreJeu">
		<button id="boutonPoursuivre" onclick="poursuivre()">Bouton qui fait perdre du temps</button>
			
	</div>

<div class="commencer">
	<button id="boutonCommencer" style="display: block" onclick="chronoStart()">Commencer</button>
</div>
<div class="blocChrono" style="display: none">
	<form name="chronoForm" class="chrono">
  		<input type="text" name="chronotime" class="chrono" id="chronotime" value="00:00:00"/>
    	<input type="button" name="startstop" class="startStop" style="display: none" value="start!" onClick="chronoStart()" />
    	<input type="button" name="reset" class="reset" style="display: none" value="reset!" onClick="chronoReset()" />
	</form>
</div>

<a href="eval_java.php" class="eval" style="display: none">Cliquez ici pour <br> acceder à l'évaluation</a>
</main>
	<script type="text/javascript" src="PlusOuMoins_Niveau4.js"></script>
</body>
</html>