<?php
// Start a session
session_start();
require '../core/db_connection.php';

// location store in a table of songs
if (isset($_POST['locationName'])) {

    $location = $_POST['locationName'];

    $query = $pdo->prepare("SELECT * FROM MusicLocationInfo WHERE LocationName = ?");
    $query->bindParam(1, $location);
    $query->execute();

    // Fetch the result as an associative array
    $query_result = $query->fetch(PDO::FETCH_ASSOC);

    if($query_result){

        echo 'Location already exists';
    } else {

        $query = "INSERT INTO MusicLocationInfo (LocationName) VALUES (?)";
        $result = $pdo->prepare($query);
        $result->bindParam(1, $location, PDO::PARAM_STR);

        if ($result->execute()) {
            echo "location added successfully";
        }
    }
}