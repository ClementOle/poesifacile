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
	<link rel="stylesheet" type="text/css" href="puzzleNiveau2.css">
	<title>Jeu du Puzzle</title>
</head>

<body>
	<h1>Jeu du Puzzle Numéro 2</h1>
	<h2>Règle du jeu : </h2>
	<p>Vous devez réaliser le puzzle en glissant les pièces vers leurs emplacements finaux afin de reconstruire le puzzle, puis cliquez sur valider quand vous avez fini.</p>

 <div class="puzzle">
	<div class="puzzle1">
		<div class="case1 dropper"></div>
		<div class="case2 dropper"></div>
		<div class="case3 dropper"></div>
	</div>
	<div class="puzzle1">
		<div class="case4 dropper"></div>
		<div class="case5 dropper"></div>
		<div class="case6 dropper"></div>
	</div>
	<div class="puzzle1">
		<div class="case7 dropper"></div>
		<div class="case8 dropper"></div>
		<div class="case9 dropper"></div>
	</div>	
</div> 

<br>

<div class="ligne">

</div>

<br>	

<button class="buttonValider">Valider</button>
	<button class="buttonReset"><a href="javascript:window.location.reload()" class="reset">Reset</a></button>

<div class="msg">
	
</div>
<p class="lienNiveauSuivant" style="display: none"><a href="puzzleNiveau3.php">Cliquez ici pour accéder au <br> niveau 3</a></p>
<footer class="footer"> 
<p>POE si facile! ©2018 </p>
</footer>

	<script type="text/javascript" src="puzzleNiveau2.js"></script>
</body>
</html>

