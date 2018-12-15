<?php

include('database/database.php');
// on teste si le visiteur a soumis le formulaire de connexion
if (isset($_POST['connexion']) && $_POST['connexion'] == 'Connexion') {
    if ((isset($_POST['login']) && !empty($_POST['login']))
        && (isset($_POST['pass']) && !empty($_POST['pass']))) {

        // on teste si une entrée de la base contient ce couple login / pass
        $statement = $database->prepare('SELECT * 
						FROM utilisateur
						WHERE pseudo = :pseudo
						AND password = :password');
        $statement->bindParam(':pseudo', $_POST['login']);
        $password = md5($_POST['pass']);
        $statement->bindParam(':password', $password);

        $statement->execute();
        $ligne = $statement->fetch(PDO::FETCH_ASSOC);

        // si on obtient une réponse, alors l'utilisateur est un membre
        if ($ligne) {
            session_start();
            $_SESSION['login'] = $_POST['login'];

            $req = $database->prepare('SELECT id 
						FROM utilisateur
						WHERE pseudo = :pseudo');

            $req->bindParam(':pseudo', $_POST['login']);
            $req->execute();

            $id = $req->fetch(PDO::FETCH_ASSOC);
            $_SESSION['id'] = $id['id'];

            header('Location: accueil.php');
            exit();
        } // si on ne trouve aucune réponse, le visiteur s'est trompé soit dans son login, soit dans son mot de passe
        elseif (!$ligne) {
            $erreur = 'Compte non reconnu.';
        } // sinon, alors la, il y a un gros problème :)
        else {
            $erreur = 'Probème dans la base de données : plusieurs membres ont les mêmes identifiants de connexion.';
        }
    } else {
        $erreur = 'Au moins un des champs est vide.';
    }
}
?>
<!DOCTYPE html>

<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
    <link rel="stylesheet" type="text/css" href="style2.css">
</head>

<body>
<nav class="navigation"><!--Barre de navigation en haut de la page-->
    <ul class="menu">
        <li><a href="index.php" class="menulink"><b>Accueil</b></a></li>
        <li><a href="http://localhost/poesifacile/connexion.php" class="menulink"><b>Connexion</b></a></li>
        <li><a href="http://localhost/poesifacile/inscription.php" class="menulink"><b>Créer Profil</b></a></li>
    </ul>
</nav>
<div class="wrapper"> <!--div de canevas pour la bannière et son animation-->
    <div class="sliding-background"></div>
    <!--div qui contient l'animation en elle-même ainsi que ses propriétés par sa classe -->
</div>
<header><h1 class="titre" draggable=true><a href="index.php"><img src="media/bannière.png" class="titre"></a>
    </h1>
</header>

<main>
    <h2 class="TexteConnexion">Connexion à l'espace membre :</h2>
    <form action="connexion.php" method="post">
        <label for="login" class="TexteConnexion">Identifiant : </label>
        <input type="text" name="login" value="">

        <label for="pass" class="TexteConnexion">Mot de passe : </label>
        <input type="password" name="pass" value="">

        <input type="submit" name="connexion" value="Connexion">
    </form>
    <a href="inscription.php" class="TexteConnexion">Pas encore inscrit? Cliquez ici!</a>
</main>
<footer class="footer">POE Si Facile © 2018</footer>
<?php
if (isset($erreur)) {
    echo '<br /><br />', $erreur;
}
?>
</body>
</html>