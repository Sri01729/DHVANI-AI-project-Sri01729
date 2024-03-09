<?php
// Start a session
session_start();
require '../core/db_connection.php';

// Initialize or update the song index
if (!isset($_SESSION['locationsongIndex'])) {
    $_SESSION['locationsongIndex'] = 0; // Start with the first song
} else {
    if (isset($_POST['action'])) {
        if ($_POST['action'] == 'next') {
            $_SESSION['locationsongIndex']++;
        } elseif ($_POST['action'] == 'prev') {
            $_SESSION['locationsongIndex']--;
            if ($_SESSION['locationsongIndex'] < 0) {
                $_SESSION['locationsongIndex'] = 0; // Prevent going below 0
            }
        }
    }
}

// location store in a table of songs


    $location = $_POST['locationName'];

    $query = $pdo->prepare("SELECT * FROM MusicLocationInfo WHERE LocationName = ?");
    $query->bindParam(1, $location);
    $query->execute();

    // Fetch the result as an associative array
    $query_result = $query->fetch(PDO::FETCH_ASSOC);

    if($query_result){

        $result = $pdo->prepare("SELECT COUNT(*) AS total FROM MusicLocationInfo");
        if (!$result->execute()) {
            die("Failed to execute query.");
        }
        $row = $result->fetch(PDO::FETCH_ASSOC);
        $totalSongs = $row['total'];

        // Adjust song index to loop through the list
        if ($_SESSION['locationsongIndex'] >= $totalSongs) {
            $_SESSION['locationsongIndex'] = 0; // Loop back to the first song if the index exceeds the total number of songs
        }

        // Fetch the current song based on locationsongIndex and the mood-based tableName
        // $sql = "SELECT path FROM $tableName LIMIT 1 OFFSET " . $_SESSION['locationsongIndex'];
        $sql = "SELECT id,LocationName, BandName, SongName, Artists,Path FROM MusicLocationInfo LIMIT 1 OFFSET " . $_SESSION['locationsongIndex'];

        $result = $pdo->prepare($sql);

        if (!$result->execute()) {
            die("Failed to fetch the song.");
        }

        $rows = $result->fetchAll(PDO::FETCH_ASSOC);
        if (count($rows) > 0) {
            $song = $rows[0];

        // Concatenate song details into a string separated by a unique delimiter, for example, "|"
        $songDetails = $song["LocationName"] . "|" . $song["SongName"] . "|" . $song["BandName"] . "|" . $song["Artists"] . "|" . $song["Path"];

        // Send the concatenated string as plain text
        echo $songDetails;
        } else {
            echo "No songs found.";
        }

     if (!isset($_POST['locationName'])){

        $query = "INSERT INTO MusicLocationInfo (LocationName) VALUES (?)";
        $result = $pdo->prepare($query);
        $result->bindParam(1, $location, PDO::PARAM_STR);

        if ($result->execute()) {
            echo "location added successfully";
        }
    }
}