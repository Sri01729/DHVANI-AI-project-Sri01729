<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
// Start a session
session_start();
require '../core/db_connection.php'; // Include the database connection code

// Initialize or update the song index
if (!isset($_SESSION['songIndex'])) {
    $_SESSION['songIndex'] = 0; // Start with the first song
} else {
    if (isset($_POST['action'])) {
        if ($_POST['action'] == 'next') {
            $_SESSION['songIndex']++;
        } elseif ($_POST['action'] == 'prev') {
            $_SESSION['songIndex']--;
            if ($_SESSION['songIndex'] < 0) {
                $_SESSION['songIndex'] = 0; // Prevent going below 0
            }
        }
    }
}

$tableName = ""; // Initialize tableName
// Check if mood is set in POST request and validate it
if (isset($_POST['mood'])) {
    $mood = $_POST['mood'];
    $allowedMoods = ['happy', 'sad', 'calm', 'anger', 'surprise']; // Define allowed moods

    if (in_array($mood, $allowedMoods)) {
        $tableName = "{$mood}_songs"; // This will dynamically change the table name based on the validated mood
    } else {
        die('Invalid mood provided.');
    }

    // Only proceed if tableName is set
    if (!empty($tableName)) {
        // Fetch total songs count from the determined table
        $result = $pdo->prepare("SELECT COUNT(*) AS total FROM $tableName");
        if (!$result->execute()) {
            die("Failed to execute query.");
        }
        $row = $result->fetch(PDO::FETCH_ASSOC);
        $totalSongs = $row['total'];

        // Adjust song index to loop through the list
        if ($_SESSION['songIndex'] >= $totalSongs) {
            $_SESSION['songIndex'] = 0; // Loop back to the first song if the index exceeds the total number of songs
        }

        // Fetch the current song based on songIndex and the mood-based tableName
        // $sql = "SELECT path FROM $tableName LIMIT 1 OFFSET " . $_SESSION['songIndex'];
        $sql = "SELECT id, title, genre, artist, path FROM $tableName LIMIT 1 OFFSET " . $_SESSION['songIndex'];

        $result = $pdo->prepare($sql);

        if (!$result->execute()) {
            die("Failed to fetch the song.");
        }

        $rows = $result->fetchAll(PDO::FETCH_ASSOC);
        if (count($rows) > 0) {
            $song = $rows[0];
    // Concatenate song details into a string separated by a unique delimiter, for example, "|"
    $songDetails = $song["id"] . "|" . $song["title"] . "|" . $song["genre"] . "|" . $song["artist"] . "|" . $song["path"];

    // Send the concatenated string as plain text
    echo $songDetails;
        } else {
            echo "No songs found.";
        }
    } else {

        die("Mood provided but no matching songs table found.");
    }
} else {
    die("Mood not provided in POST request.");
}