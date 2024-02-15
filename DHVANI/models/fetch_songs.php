<?php
// Start a session
session_start();
require '../Core/databaseconnection.php'; // Include the database connection code


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


$query = $pdo->prepare("");
