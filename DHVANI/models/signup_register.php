<?php
require '../Core/db_connection.php'; // Include the database connection code



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get signup form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];



// Check if the email already exists in the users table
$checkQuery = $pdo->prepare("SELECT email FROM users WHERE email = ?");
$checkQuery->execute([$email]);

// Fetch the result
$existingEmail = $checkQuery->fetchColumn();

if ($existingEmail) {


    echo '<script type="text/javascript">';
        echo 'alert("Email already exists please choose a different email");';
        echo 'window.location.href = "../views/signup.view.php";';
        echo '</script>';
} else {
// Insert the user's data into the database
$insertUser = $pdo->prepare('INSERT INTO users (name, email, password) VALUES (:name, :email, :password)');
$insertUser->execute(array(
    ':name' => $name,
    ':email' => $email,
    ':password' => $password
));

         // Redirect to the profile page after successful signup
        echo '<script type="text/javascript">';
        echo 'alert("Registration Succesful, Click OK to go to login page.");';
        echo 'window.location.href = "../views/login.view.php";';
        echo '</script>';

exit();
}
}