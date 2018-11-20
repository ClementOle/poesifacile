<?php
include('database/database.php');

// on teste si le visiteur a soumis le formulaire
if (isset($_POST['inscription']) && $_POST['inscription'] == 'Inscription') {
    // on teste l'existence de nos variables. On teste également si elles ne sont pas vides
    if ((isset($_POST['login']) && !empty($_POST['login'])) && (isset($_POST['pass']) && !empty($_POST['pass'])) && (isset($_POST['pass_confirm']) && !empty($_POST['pass_confirm']))) {
    // on teste les deux mots de passe
        if ($_POST['pass'] != $_POST['pass_confirm']) {
            $erreur = 'Les 2 mots de passe sont différents.';
        } else {

            $statement = $database->prepare('SELECT count(*) FROM utilisateur WHERE pseudo=:pseudo');
            $statement->bindParam(':pseudo', $_POST['login']);
            // on recherche si ce login est déjà utilisé par un autre membre
            $statement->execute();

            $data = $statement->fetch(PDO::FETCH_ASSOC);

            if ($data) {
                $statement = $database->prepare('INSERT INTO utilisateur (pseudo, password) VALUES (:pseudo, :password)');
                $statement->bindParam(':pseudo', $_POST['login']);
                $password = md5($_POST['pass']);
                $statement->bindParam('password', $password);
                $statement->execute();

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
            } else {
                $erreur = 'Un membre possède déjà ce login.';
            }
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
        <title>Inscription</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <header>
            <a href="accueil.php"><h1>POE si facile</h1></a>
        </header>
        <main>
            <h1>Inscription à l'espace membre :</h1>
            <form action="inscription.php" method="post">
                <label for="login">Login : </label>
                <input type="text" name="login" value="">

                <label for="pass">Mot de passe : </label>
                <input type="password" name="pass" value="">

                <label for="pass_confirm">Confirmation du mot de passe : </label>
                <input type="password" name="pass_confirm" value="">

                <input type="submit" name="inscription" value="Inscription">
            </form>
            <a href="index.php">Vous avez déja un compte ?</a>
        </main>
        <?php
        if (isset($erreur)){
            echo '<br />',$erreur;
        }
        ?>
    </body>
</html>