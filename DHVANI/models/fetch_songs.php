<?php
// Start a session
session_start();
require '../core/db_connection.php'; // Include the database connection code


// Initialize or update the song index
if (!isset($_SESSION['songIndex'])) {
    $_SESSION['songIndex'] = 0; // Start with the first song
} else {
    if (isset($_GET['action'])) {
        if ($_GET['action'] == 'next') {
            $_SESSION['songIndex']++;
        } elseif ($_GET['action'] == 'prev') {
            $_SESSION['songIndex']--;
            if ($_SESSION['songIndex'] < 0) {
                $_SESSION['songIndex'] = 0; // Prevent going below 0
            }
        }
    }
}


$result = $pdo->prepare("SELECT COUNT(*) AS total FROM happy_songs");
if (!$result) {
    die("Query passed ");
}
$result->execute();
$row = $result->fetch(PDO::FETCH_ASSOC);
$totalSongs = $row['total'];


// Adjust song index to loop through the list
if ($_SESSION['songIndex'] >= $totalSongs) {
    $_SESSION['songIndex'] = 0; // Loop back to the first song
}


// Fetch the current song based on songIndex
$sql = "SELECT path FROM happy_songs LIMIT 1 OFFSET " . $_SESSION['songIndex'];
$result = $pdo->prepare($sql);
$result->execute();

$rows = $result->fetchAll(PDO::FETCH_ASSOC);
if (count($rows) > 0) {

    $songPath = $rows[0]["path"];

    echo $songPath;
} else {
    echo "No songs found.";
}
