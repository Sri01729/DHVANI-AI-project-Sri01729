<?php
//PDO function
function pdo(PDO $pdo, string $sql, array $arg = null)
{
    if (!$arg) {
        return $pdo->query($sql);
    }
    $pdostatement = $pdo->prepare($sql);
    $pdostatement->execute($arg);
    return $pdostatement;
}
