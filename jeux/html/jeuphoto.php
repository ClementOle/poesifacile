<?php
session_start();
if (!isset($_SESSION['login']) || !isset($_SESSION['id'])) {
    header('Location: http://localhost/poesifacile/connexion.php');
    exit();
}

?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Jeu HTML/CSS</title>
    <link href="jeuphoto.css" rel="stylesheet" type="text/css">
</head>
<body>
<header>
    <marquee behavior="alternate" scrollamount="8" width="1500"><h1>JEU DE SIMULATION HTML/CSS</h1></marquee>

    <div class="regle">
        <h2>REGLES DU JEU :</h2>
        <p>Ce jeu va vous permettre de découvrir la fonctionnalité des commandes HTML/CSS.
            Pour cela, retrouvez la commande qui effectue la modification demandée en cliquant sur la bonne requête.</p>
    </div>
    <br>
</header>

<form action="" id="jeuphoto" method="post">

    <div class="photo1">
        <img class="photo" src="media/photo1md.jpg">
        <img class="photo" src="media/photo1mdcolor.jpg">
        <p class="texte">Comment modifier la couleur de fond du bloc "fenêtre" en bleu ?</p>

        <div class="bouton">
            <button class="rep1 bout" onclick="reponse1()" style="display:block">background-color : blue ;</button>
            <button class="rep2 bout" onclick="reponse2()" style="display:block">background : blue ;</button>
            <button class="rep3 bout" onclick="reponse3()" style="display:block">color : blue;</button>
        </div>
        <br>
        <br>
    </div>

    <div class="message1" style="display: none">Vous vous êtes trompé, rééssayez !</div>

    <div class="photo2" style="display:none">
        <img class="photo" src="media/photo2md.jpg">
        <img class="photo" src="media/photo2mdwrite.jpg">
        <p class="texte">Comment modifier la police d'écriture?</p>

        <div class="bouton">
            <button class="rep4 bout" onclick="reponse4()" style="display:block">font-style:'Cosmic Sans
                MS',sans-serif;
            </button>
            <button class="rep5 bout" onclick="reponse5()" style="display:block">text-decoration :'Cosmic Sans
                MS',sans-serif;
            </button>
            <button class="rep6 bout" onclick="reponse6()" style="display:block">font-family:'Cosmic Sans
                MS',sans-serif;
            </button>
        </div>
        <br>
        <br>
    </div>

    <div class="message2" style="display : none">Vous vous êtes trompé, rééssayez !</div>

    <div class="photo3" style="display : none">
        <img class="photo" src="media/photo3md.jpg">
        <img class="photo" src="media/photo3mdswitch.jpg">
        <p class="texte">Comment inverser les deux blocs "élèves" avec un display:flex; ?</p>

        <div class="bouton">
            <button class="rep7 bout" onclick="reponse7()" style="display:block">justify-content : reverse</button>
            <button class="rep8 bout" onclick="reponse8()" style="display:block">flex-direction : row-reverse</button>
            <button class="rep9 bout" onclick="reponse9()" style="display:block">flex-wrap : wrap-reverse</button>
        </div>

        <br>
        <br>

    </div>

    <div class="message3" style="display : none">Vous vous êtes trompé, rééssayez !</div>

    <div class="photo4" style="display : none">
        <img class="photo" src="media/photo1md.jpg">
        <img class="photo" src="media/photo4mdghost.jpg">
        <p class="texte">Comment faire disparaître le bloc d' "élèves" du 1er rang ?</p>

        <div class="bouton">
            <button class="rep10 bout" onclick="reponse10()">display : none ;</button>
            <button class="rep11 bout" onclick="reponse11()">background : none;</button>
            <button class="rep12 bout" onclick="reponse12()">font-style : disappear</button>
        </div>

        <br>
        <br>

    </div>

    <div class="message4" style="display : none">Vous vous êtes trompé, rééssayez !</div>

    <div class="evaluation" style="display: none">
        <p class="versEval">As tu bien compris? Maintenant teste tes connaissances.</p>
        <a href="eval_html_css.php" id="lienEval"><span></span>Click</a>
    </div>
</form>

<footer class="footer">POE Si Facile © 2018</footer>

<script src="jeuphoto.js" type="text/javascript"></script>
</body>
</html>