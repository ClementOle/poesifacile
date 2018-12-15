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
    <link rel="stylesheet" type="text/css" href="eval.css">
    <title>Evaluation</title>

</head>
<body>

<main class="main">

    <h1>Questionnaire <font face="Cosmic Sans MS"> HTML/CSS</font></h1>

    <form action="" method="post" id="form">
        <ol>
            <div>
                <li><h3>Quelle balise ne modifie pas le texte?</h3></li>
                <div class="Q1">
                    <p>
                        a) < mark >
                        <br>
                        b) < small >
                        <br>
                        c) < b >
                        <br>
                        d) < br >
                    </p>
                </div>
                <label for="reponseQ1" class="label"></label><!-- champs de saisie de la reponse -->
                <input type="text" id="reponseQ1" placeholder="Votre réponse ....." class="">

                <div class="solutionQ1">
                    <!-- bloc pour affiché la solution -->
                </div>
            </div>


            <div>
                <li><h3>Quelle est la différence entre une classe et un identifiant ? </h3></li>
                <div class="Q2">
                    <p>
                        a) Un même identifiant ne doit être utilisé qu'une fois, une même classe peut être utilisée
                        plusieurs fois
                        <br>
                        b) Un même identifiant peut être utilisé plusieurs fois, une même classe ne doit être utilisée
                        qu'une fois
                        <br>
                        c) Il n'y en a pas
                    </p>
                </div>
                <label for="reponseQ2" class="label"></label>
                <input type="text" id="reponseQ2" placeholder="Votre réponse ....." class="">
                <!-- champs de saisie de la reponse -->

                <div class="solutionQ2">
                    <!-- bloc pour affiché la solution -->
                </div>
            </div>


            <div>
                <li><h3>Dans quels cas utilise-t-on la balise < div > ? </h3></li>
                <div class="Q3">
                    <p>
                        a) Quand on veut faire un bloc sans sémantique particulière
                        <br>
                        b) Quand on a déjà utilisé < main >
                        <br>
                        c) Quand on veut faire un bloc sémantique
                        <br>
                        d) Quand on veut modifier le style de la balise avec CSS
                        <br>
                        e) Quand on ne sait pas quelle autre balise utiliser
                    </p>
                </div>

                <label for="reponseQ3" class="label"></label>
                <input type="text" id="reponseQ3" placeholder="Votre réponse ....." class="">
                <!-- champs de saisie de la reponse -->

                <div class="solutionQ3">
                    <!-- bloc pour affiché la solution -->
                </div>
            </div>


            <div>
                <li><h3>A quoi sert la balise < link > ? </h3></li>
                <div class="Q4">
                    <p>
                        a) Écrire du code CSS directement dans la page HTML
                        <br>
                        b) Insérer une image dans une page HTML
                        <br>
                        c) Créer un lien vers une autre page
                        <br>
                        d) Relier un fichier .css à une page HTML
                    </p>
                </div>

                <label for="reponseQ4" class="label"></label>
                <input type="text" id="reponseQ4" placeholder="Votre réponse ....." class="">
                <!-- champs de saisie de la reponse -->

                <div class="solutionQ4">
                    <!-- bloc pour affiché la solution -->
                </div>
            </div>
        </ol>
        <div class="affichePoints">
        </div>
        <div class="boutonT">
            <input type=submit class="bouton" value="Terminer"></input>
            <br>
            <br>
        </div>
        <div class="boutonSuite">
            <button class="boutonS cacher bouton">Suite</button>
        </div>

    </form>
</main>
<script type="text/javascript" src="eval_html_css.js"></script>
<footer class="footer">POE Si Facile © 2018</footer>

</body>
</html>