<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
session_start();
require '../core/db_connection.php';

if (!isset($_SESSION['songIndex'])) {
    $_SESSION['songIndex'] = 0;
} else {
    if (isset($_POST['action'])) {
        if ($_POST['action'] == 'next') {
            $_SESSION['songIndex']++;
        } elseif ($_POST['action'] == 'prev') {
            $_SESSION['songIndex']--;
            if ($_SESSION['songIndex'] < 0) {
                $_SESSION['songIndex'] = 0;
            }
        }
    }
}

$tableName = "";
if (isset($_POST['mood'])) {
    $mood = $_POST['mood'];
    $allowedMoods = ['happy', 'sad', 'calm', 'anger', 'surprise'];
    if (in_array($mood, $allowedMoods)) {
        $tableName = "{$mood}_songs";
    } else {
        die('Invalid mood provided.');
    }

    if (!empty($tableName)) {
        $result = $pdo->prepare("SELECT COUNT(*) AS total FROM $tableName");
        if (!$result->execute()) {
            die("Failed to execute query.");
        }
        $row = $result->fetch(PDO::FETCH_ASSOC);
        $totalSongs = $row['total'];

        if ($_SESSION['songIndex'] >= $totalSongs) {
            $_SESSION['songIndex'] = 0;
        }

        $songDetails = "";

        // Attempt to fetch current and next two songs based on the songIndex
        $sql = "SELECT id, title, genre, artist, path FROM $tableName ORDER BY id LIMIT 3 OFFSET " . $_SESSION['songIndex'];
        $result = $pdo->prepare($sql);
        if (!$result->execute()) {
            die("Failed to fetch the songs.");
        }

        $songs = $result->fetchAll(PDO::FETCH_ASSOC);
        foreach ($songs as $song) {
            // Concatenate each song details
            $songDetails .= $song["id"] . "|" . $song["title"] . "|" . $song["genre"] . "|" . $song["artist"] . "|" . $song["path"] . "|";
        }

        // Remove the trailing "|"
        $songDetails = rtrim($songDetails, "|");

        echo $songDetails;

    } else {
        die("Mood provided but no matching songs table found.");
    }
} else {
    die("Mood not provided in POST request.");
}