<?php
// Start a session
session_start();
require '../Core/databaseconnection.php'; // Include the database connection code


// Initialize or update the song index
if (!isset($_SESSION['songIndex'])) {
    $_SESSION['songIndex'] = 0; // Start with the first song
}


$query = $pdo->prepare("");
