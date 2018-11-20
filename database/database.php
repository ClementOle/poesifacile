<?php
/**
 * Created by PhpStorm.
 * User: IPI
 * Date: 13/11/2018
 * Time: 16:52
 */
try {
    $database = new PDO('mysql:host=localhost;dbname=poesifacile;charset=utf8', 'root', '');
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


} catch (Exception $e) {
    echo '<p>'.$e->getMessage().'</p>';
    echo '<p>In'.$e->getFile().' l.'.$e->getLine().'</p>';
}

