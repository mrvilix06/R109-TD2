<?php
if (isset($_GET['couleur'])) {
    $couleur = $_GET['couleur'];
    echo $couleur;
} else {
    $randomColor = sprintf("#%06X", rand(0, 16777215));
    echo $randomColor;
}
?>
