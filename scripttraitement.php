<?php

    session_start();
    if (!isset($_SESSION['login']) || !isset($_SESSION['id'])) {
        header ('Location: index.php');
        exit();
    }
    include('database/database.php');

    $score = $_GET['point'] ?? 'default'; //Récupère la valeur de score ou lui affecte la valeur defaut
    $salle = $_GET['salle']; //Définie la salle actuelle

    $verif = $database->prepare('DELETE FROM historique WHERE id_joueur = :id_joueur AND salle = :salle');
    $verif->bindParam(':id_joueur', $_SESSION['id']);
    $verif->bindParam(':salle', $salle);
    $verif->execute();
    if($score != 'default') {
        $statement = $database->prepare("INSERT INTO historique (salle, id_joueur, score) VALUES (:salle, :id_joueur, :score)");
        $statement->bindParam(':salle', $salle);
        $statement->bindParam(':id_joueur', $_SESSION['id']);
        $statement->bindParam(':score', $score);
        $statement->execute();
    }
    else {
        echo'<p> Erreur dans la récupération du score </p>';
    }
    header('Location: accueil.php');

    exit();
?>



