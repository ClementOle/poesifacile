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
    <meta charset="utf-8">
    <title>Mot mélangé</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<header>
    <h1>Mot mélangé niveau 2</h1>
</header>
<main>
    <div class="tableau"></div>

    <div class="boutonValidation">
        <button class="boutonV">Valider</button>
    </div>
    <div class="boutonSuite cacher">
        <button class="boutonSuite">Suite</button>
    </div>
    <div class="boutonAbandon">
        <button class="boutonAbandon">Abandon</button>
    </div>

    <div class="resultat">

    </div>
</main>
<footer class="footer">
    <p>POE si facile! ©2018 </p>
</footer>
<script type="text/javascript" src="script2.js"></script>
</body>
</html>