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
    <title>Carré magique</title>
    <link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>
    <header>
        <div class="bar">
            <a href="#">Déconnexion</a>
        </div>
        <div class="psf">
            <p>POE si facile</p>
        </div>
        <div class="vertical">
            <h1>Carré magique !</h1>
        </div>
    </header>
    <main>
        <div id="consignes">
            <p>La somme de chaque valeur de chaque ligne, de chaque colonne, de chaque diagonale doit être égale à 15.</p>
        </div>
        <div class="carreBoutons">
        <form action="" method="post" id="carreM">
            <div class="carre">
                <div class="ligne">
                    <input type="text" id="valeur1">
                    <input type="text" id="valeur2">
                    <input type="text" id="valeur3">
                </div>
                <div class="ligne">
                    <input type="text" id="valeur4">
                    <input type="text" id="valeur5">
                    <input type="text" id="valeur6">
                </div>
                <div class="ligne">
                    <input type="text" id="valeur7">
                    <input type="text" id="valeur8">
                    <input type="text" id="valeur9">
                </div>
            </div>
            <div class="bas">
                <div class="boutonT">
                    <input type="submit">
                </div>
                <div class="buttonSuite disparition">
                    <button>Suite</button>
                </div>
        </form>
                <button class="reset">Reset</button>

        <div class="reponse"></div>
        <div class="temps"><p id="pTemp"></p></div>
        </div>

    </main>

    <script type="text/javascript" src="scriptCarreMagique.js"></script>
</body>
</html>