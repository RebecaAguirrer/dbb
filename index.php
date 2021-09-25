<?php

$pdo = new PDO('sqlite:banco.sqlite');

$li = $pdo->query("select * from pessoa");
$li->execute();
$meu = $li->fetchAll(PDO::FETCH_ASSOC);
foreach($meu as $meus){
    $name = $meus['nome'];
    echo "<h1>Nome:$name</h1>";
    echo "<hr>";
}
