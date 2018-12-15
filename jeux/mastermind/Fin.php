<?php
session_start();
if (!isset($_SESSION['login']) || !isset($_SESSION['id'])) {
    header('Location: http://localhost/poesifacile/connexion.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr" class="total">
<head>
    <meta charset="UTF-8">
    <title class="titre">The End!</title>
    <link rel="stylesheet" type="text/css" href="fin.css">
</head>
<body>
<div class="corps"></div>
<script type="text/javascript" src="Scriptfin.js"></script>

</body>

</html>