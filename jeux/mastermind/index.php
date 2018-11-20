<?php
session_start();
if (!isset($_SESSION['login']) || !isset($_SESSION['id'])) {
    header ('Location: index.php');
    exit();
}
include('database/database.php');

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title class="titre">MasterMind</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header class="EnTete">
        <h1 class="Titre">MASTERMIND</h1>
    </header>
    <div class="global">
        <div class="conseil"></div>

        <!--<img src="image/bois2.jpg" class="imagebois">-->
        <div class="Blocson"><audio class="Sound" >
        </audio></div>
    <main class="Main">
        <!--Le bouton démarer permet d'initialiser le jeux et attribut les quatre couleurs à trouver-->
<!--        <button class="Difficulte easy">Facil</button>
        <button class="Difficulte normal">Normal</button>
        <button class="Difficulte Difficil">Dur!!</button>-->
        <button class="Demarer">Démarer la partie</button>
        <!--<button class="Supprimer Hidden">Supprimer la partie</button>-->
        <p class="Consigne">Si dans la proposition, un ou plusieurs ronds de couleurs
            sont bien dans la combinaison mais pas à la bonne place, un rond rose
            apparaitra dans la cellule témoin correspondante.
            Si dans la proposition, un ou plusieurs ronds de couleurs sont bien dans
            la combinaison et à la bonne place, un rond noir apparaitra dans la cellule
            témoin correspondante.
            Les ronds témoins correspondent comme  dans le schema ci-dessous.</p>
        <div class="demo"></div>



    </main>
        <!--COTEe-->
    <aside class="Aside">
        <div class="TitreCote">Couleur</div>

        <!--Les boutons permettent d'attribuer un couleur au case vide-->
        <button class="BTNcolor Rouge">Rouge</button>
        <button class="BTNcolor Bleu">Bleu</button>
        <button class="BTNcolor Violet">Violet</button>
        <button class="BTNcolor Jaune">Jaune</button>
        <button class="BTNcolor Vert">Vert</button>
        <button class="BTNcolor Orange">Orange</button>
        <button class="BTNcolor Gris">Gris</button>
        <button class="BTNcolor Cyan">Cyan</button>
        <!--Supprimer les couleur jouées-->
        <button class="BTNdelete">Supprimer</button>
        <!--permet de valider la selection une fois les quatre couleurs entrées-->
        <button class="BTNvalidation /Valider/">Valider</button>

    </aside>
    </div>
    <footer class="Pied">
        <h6 class="petitpied">POE si facile © 2018</h6>
    </footer>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>