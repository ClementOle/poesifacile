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
	<link rel="stylesheet" type="text/css" href="tableauScore.css">
	<title>Document</title>
</head>
<body>
	<div class="titre">
		<h1>Tableau des scores</h1>
	</div>
	<!-- BLOC NIVEAU 1 + TENTATIVES -->
	<div class="niveau1">
		<p> Niveau 1 : </p>
	</div>
	<div class="tentatives1">
		<p> Tentatives : </p>
	</div>
	<!-- BLOC NIVEAU 2 + TENTATIVES -->
	<div class="niveau2">
		<p> Niveau 2 : </p>
	</div>
	<div class="tentatives2">
		<p> Tentatives : </p>
	</div>
	<!-- BLOC NIVEAU 3 + TENTATIVES -->
	<div class="niveau3">
		<p> Niveau 3 : </p>
	</div>
	<div class="tentatives3">
		<p> Tentatives : </p>
	</div>
	<!-- BLOC NIVEAU 4 + TENTATIVES -->
	<div class="niveau4">
		<p> Niveau 4 : </p>
	</div>
	<div class="tentatives4">
		<p> Chronomètre : </p>
	</div>
	
	<div class="evaluation">
		<p> Evaluation : </p>
	</div>

	<div class="scoreTotal">
		<p> Score Total : </p>
	</div>

<!-- BLOC MESSAGES JEUX -->
	<div class="n1 memetype"><p class="msg1"></p></div>
	<div class="n2 memetype"><p class="msg2"></p></div>
	<div class="n3 memetype"><p class="msg3"></p></div>
	<div class="n4 memetype"><p class="msg4"></p></div>

<!-- BLOC MESSAGES TENTATIVES -->

	<div class="p1 memetype"><p class="msgp1"></p></div>
	<div class="p2 memetype"><p class="msgp2"></p></div>
	<div class="p3 memetype"><p class="msgp3"></p></div>
	<div class="p4"><p class="msgp4"></p></div>
	
	<div class="s1 memetype"><p class="msgs1"></p></div>
	<div class="s2 memetype"><p class="msgs2"></p></div>

    <div class="boutonSuite">
        <button class="suite">Suite</button>
    </div>

</body>
<script type="text/javascript" src="tableauScore.js"></script>
</html>