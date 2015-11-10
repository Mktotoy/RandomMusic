<?php

header("Content-Type: text/plain"); // Utilisation d'un header pour spécifier le type de contenu de la page. Ici, il s'agit juste de texte brut (text/plain).

$variable1 = (isset($_POST["variable1"])) ? $_POST["variable1"] : NULL;

if ($variable1)  {
    $dirmp3    = '../music/'.$variable1.'mp3';
    $filesmp3 = scandir($dirmp3,1);
    array_pop ($filesmp3);
    array_pop ($filesmp3);
    $srcmp3=array_rand ( $filesmp3 );
    echo substr($filesmp3[$srcmp3],0,-4);
}
else {
    echo "FAIL";
}

?>


