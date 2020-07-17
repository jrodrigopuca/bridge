<?php
    $archivo=fopen('log.txt','r');
    if ($archivo){
        while(($linea = fgets($archivo))!== false){
            echo $linea;
        }
        fclose($archivo);
    }else{
        echo "no hay log";
    }

?>
   