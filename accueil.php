<?php
    session_start();
    if (!isset($_SESSION['login']) || !isset($_SESSION['id'])) {
        header ('Location: index.php');
        exit();
    }
    include('database/database.php');

?>

<?php
function getScore($salle, $database) {

    $statement = $database->prepare('SELECT score FROM historique
                                                  WHERE salle=:salle 
                                                  AND id_joueur=:id');
    $statement->bindParam(':salle', $salle);
    $statement->bindParam(':id', $_SESSION['id']);
    $statement->execute();
    $val = $statement->fetch(PDO::FETCH_ASSOC);
    if($val) {
        return $val['score'];
    }

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
    <a href="accueil.php"><h1>POE si facile</h1></a>
</header>
<main>
    <form method="" action="jeux/carreMagique/carreMagique.php">
        <button type="submit">Carré magique</button>
    </form>
    <?php
        //Si il un score est enregistré dans la base de donnée on l'affiche
        $score1 = getScore(1, $database);

    if($score1 != null) {
            echo '<p>' . $score1 . ' / 10</p>';
        }
    ?>

    <form method="" action="jeux/motMelange/motMelange.php">
        <button type="submit">Mot mélangé</button>
    </form>
    <?php
        $score2 = getScore(2, $database);
        if($score2 != null) {
            echo '<p>' . $score2 . ' / 10</p>';
        }
    ?>

    <form method="" action="jeux/PlusOuMoins/PlusOuMoins_Niveau1.php">
        <button type="submit">Plus ou moins</button>
    </form>
    <?php
        $score3 = getScore(3, $database);
        if($score3 != null) {
                echo '<p>' . $score3 . ' / 10</p>';
        }
    ?>

    <form method="" action="jeux/Puzzle/puzzleNiveau1.php">
        <button type="submit">Puzzle</button>
    </form>
    <?php
        $score4 = getScore(4, $database);
        if($score4 != null) {

            echo '<p>' . $score4 . ' / 10</p>';
        }
    ?>
    <?php $moyenneFinal = ($score1 + $score2 + $score3 + $score4) / 4;
        if($moyenneFinal >= 5) {
            echo '<form method="" action="jeux/mastermind/index.php">
                  <button type="submit">BOSS FINAL (Mastermind)</button>
                  </form> ';
        }
    ?>


    <a href="deconnexion.php">Déconnexion</a>
</main>
</body>
</html>