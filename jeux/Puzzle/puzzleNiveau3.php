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
	<link rel="stylesheet" type="text/css" href="puzzleNiveau3.css">
	<title>Jeu du Puzzle</title>
</head>

<body>
	<h1>Jeu du Puzzle Numéro 3</h1>
	<h2>Règle du jeu : </h2>
	<p>Vous devez réaliser le puzzle en glissant les pièces vers leurs emplacements final afin de reconstruire le puzzle, puis cliquez sur validé quand vous avez fini.</p>

 <div class="puzzle">
	<div class="puzzle1">
		<div class="case1 dropper"></div>
		<div class="case2 dropper"></div>
		<div class="case3 dropper"></div>
		<div class="case4 dropper"></div>
	</div>
	<div class="puzzle1">
		<div class="case5 dropper"></div>
		<div class="case6 dropper"></div>
		<div class="case7 dropper"></div>
		<div class="case8 dropper"></div>
	</div>
	<div class="puzzle1">
		<div class="case9 dropper"></div>
		<div class="case10 dropper"></div>
		<div class="case11 dropper"></div>
		<div class="case12 dropper"></div>
	</div>	
	<div class="puzzle1">
		<div class="case13 dropper"></div>
		<div class="case14 dropper"></div>
		<div class="case15 dropper"></div>
		<div class="case16 dropper"></div>
	</div>
</div> 

<br>

<div class="messageValider">
	Pour ce niveau, si vous faites "Valider" et que votre puzzle est faux, vous perdrez un point sur votre score total. <br>En faisant "Reset" vous perdrez également un point à chaque fois que vous l'utiliserez.
</div>

<div class="ligne"></div>

<div class="ligne2"></div>

<button class="buttonValider">Valider</button>
	<button class="buttonReset"><a class="reset" href="javascript:window.location.reload()">Reset</a></button>

<div class="msg">

</div>
<p class="lienNiveauSuivant" style="display: none"><a href="puzzleNiveau4.php">Cliquez ici pour accéder au <br> niveau 4</a></p>
<footer class="footer"> 
<p>POE si facile! ©2018 </p>
</footer>
	<script type="text/javascript" src="puzzleNiveau3.js"></script>
</body>
</html>

<!--	<div class="piece1 dropper"><img src="images/bonbon1.png" alt="singes" class="singes draggable s1"></div>
	<div class="piece2 dropper"><img src="images/bonbon6.png" alt="singes" class="singes draggable s6"></div>
	<div class="piece3 dropper"><img src="images/bonbon9.png" alt="singes" class="singes draggable s9"></div>
	<div class="piece4 dropper"><img src="images/bonbon14.png" alt="singes" class="singes draggable s14"></div>
	<div class="piece5 dropper"><img src="images/bonbon8.png" alt="singes" class="singes draggable s8"></div>
	<div class="piece6 dropper"><img src="images/bonbon2.png" alt="singes" class="singes draggable s2"></div>
	<div class="piece7 dropper"><img src="images/bonbon7.png" alt="singes" class="singes draggable s7"></div>
	<div class="piece8 dropper"><img src="images/bonbon13.png" alt="singes" class="singes draggable s13"></div>-->


<!--<div class="piece9 dropper"><img src="images/bonbon15.png" alt="singes" class="singes draggable s15"></div>
<div class="piece10 dropper"><img src="images/bonbon5.png" alt="singes" class="singes draggable s5"></div>
<div class="piece11 dropper"><img src="images/bonbon11.png" alt="singes" class="singes draggable s11"></div>
<div class="piece12 dropper"><img src="images/bonbon4.png" alt="singes" class="singes draggable s4"></div>
<div class="piece13 dropper"><img src="images/bonbon10.png" alt="singes" class="singes draggable s10"></div>
<div class="piece14 dropper"><img src="images/bonbon16.png" alt="singes" class="singes draggable s16"></div>
<div class="piece15 dropper"><img src="images/bonbon12.png" alt="singes" class="singes draggable s12"></div>
<div class="piece16 dropper"><img src="images/bonbon3.png" alt="singes" class="singes draggable s3"></div>-->