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
    <h1>Questionnaire de <font face="Cosmic Sans MS">SQL</font></h1>
    <form action="" method="post" id="form">
        <ol>
            <div>
                <li><h3>Question 19 :Combien y a t-il d'occurence(s) pour chaque auteur ?</h3></li>

                <label for="reponseQ1" class="label"></label><!-- champs de saisie de la reponse -->
                <input type="number" id="reponseQ1" placeholder="Votre réponse ....." class="">

                <div class="solutionQ1"></div>
            </div>
            <div>
                <li><h3>Trouvez l'intrus :</h3></li>
                <div class="Q2">
                    <p>a) DROP TABLE CLIENT
                        <br>
                        b) DELETE CLIENT
                        <br>
                        c) TRUNCATE TABLE CLIENT
                        <br>
                        d) DELETE TABLE CLIENT</p>
                </div>
                <label for="reponseQ2" class="label"></label>
                <input type="text" id="reponseQ2" placeholder="Votre réponse ....." class="">
                <!-- champs de saisie de la reponse -->

                <div class="solutionQ2"></div>

            </div>
            <div>
                <li><h3>Quelle est la définition de la jointure <font face="Cosmic Sans MS">FULL OUTER JOIN :</font>
                    </h3></li>
                <p class="Q3"> a) Retourne les enregistrements lorsqu’il y a au moins une ligne dans chaque colonne qui
                    correspond à la condition
                    <br>
                    b) Permet de lister tous les résultats de la table de gauche même s’il n’y a pas de correspondance
                    dans la deuxième table
                    <br>
                    c) Permet de retourner tous les enregistrements de la table de droite même s’il n’y a pas de
                    correspondance avec la table de gauche
                    <br>
                    d) Permet de combiner les résultats des 2 tables
                </p>

                <label for="reponseQ3" class="label"></label>
                <input type="text" id="reponseQ3" placeholder="Votre réponse ....." class="">
                <!-- champs de saisie de la reponse -->

                <div class="solutionQ3"></div>
            </div>
            <div>

                <li><h3> En quelle année <font face="Cosmic Sans MS">SQL</font> fut normalisée par l'<font
                                face="Cosmic Sans MS">ANSI</font> ?</h3></li>
                <p class="Q4">
                    a) en 1986
                    <br>
                    b) en 1989
                    <br>
                    c) en 1977
                    <br>
                    d) en 1992 </p>


                <label for="reponseQ4" class="label"></label>
                <input type="text" id="reponseQ4" placeholder="Votre réponse ....." class="">
                <!-- champs de saisie de la reponse -->

                <div class="solutionQ4"></div>

            </div>
        </ol>

        <div class="affichePoints"></div>

        <div class="boutonT">
            <input type="submit" class="bouton" value="Terminer">
        </div>
    </form>

    <div class="boutonSuite">
        <button class="boutonS cacher bouton">Suite</button>
    </div>

</main>
<footer class="footer">
    <p>POE si facile! ©2018 </p>
</footer>
<script type="text/javascript" src="eval.js"></script>
</body>
</html>