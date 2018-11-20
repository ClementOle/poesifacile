<?php

include('database/database.php');
// on teste si le visiteur a soumis le formulaire de connexion
if (isset($_POST['connexion']) && $_POST['connexion'] == 'Connexion') {
	if ((isset($_POST['login']) && !empty($_POST['login'])) && (isset($_POST['pass']) && !empty($_POST['pass']))) {

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
            }
			// si on ne trouve aucune réponse, le visiteur s'est trompé soit dans son login, soit dans son mot de passe
			elseif (!$ligne) {
				$erreur = 'Compte non reconnu.';
			}
			// sinon, alors la, il y a un gros problème :)
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
	    <!--<link rel="stylesheet" type="text/css" href="style.css">-->
	</head>

	<body>
		<header>
        	<a href="accueil.php"><h1>POE si facile</h1></a>
    	</header>
    	<main>
			<h2>Connexion à l'espace membre :</h2>
			<form action="index.php" method="post">
				<label for="login">Login : </label>
				<input type="text" name="login" value="">

				<label for="pass">Mot de passe : </label>
				<input type="password" name="pass" value="">

				<input type="submit" name="connexion" value="Connexion">
			</form>
			<a href="inscription.php">Vous inscrire</a>
		</main>
		<?php
		if (isset($erreur)){
		 	echo '<br /><br />',$erreur;
		 }
		?>
	</body>
</html>