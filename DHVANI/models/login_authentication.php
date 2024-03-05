<?php
// Start a session
session_start();

require '../Core/db_connection.php'; // Include the database connection code

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // set the user's email in a session variable
    $_SESSION['user_email'] = $email;

    // Authenticate the user against the database
    $query = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $query->bindParam(1, $email);
    $query->execute();

    // Fetch the result as an associative array
    $query_result = $query->fetch(PDO::FETCH_ASSOC);

    // Check if a user with the given email exists
    if ($query_result) {
        // Compare the submitted password with the stored password
        if ($query_result['password'] === $password) {

            // Set the user's email in a session variable
            $_SESSION['user_email'] = $email;

            // Check if the email already exists in the users table
            $checkQuery = $pdo->prepare("SELECT email FROM users WHERE email = ?");
            $checkQuery->execute([$email]);

            // Fetch the result
            $existingEmail = $checkQuery->fetchColumn();
            if ($existingEmail) {
                echo '<script type="text/javascript">';
echo 'window.location.href = "../Controllers/loading.php";'; // Redirect to the loading page first
 // Wait for 5000 milliseconds (5 seconds) before redirecting
echo '</script>';

                exit();
             }
            //  else {
            //     // Insert the email into the profile table
            //     $insertQueryProfile = $pdo->prepare("INSERT INTO profile (email) VALUES (?)");
            //     $insertQueryProfile->execute([$email]);

            //     // Insert the email into the progress tracking table
            //     $insertQueryProgress = $pdo->prepare("INSERT INTO progresstracking (email) VALUES (?)");
            //     $insertQueryProgress->execute([$email]);
                //  echo '<script type="text/javascript">';
                // echo 'alert("Login is Succesful, Click OK to go to next page.");';
                // echo 'window.location.href = "../Controllers/profile.php";';
                // echo '</script>';
                // exit();
            // }
        } else {
            echo "<h2>Invalid email or passsword<h2>";
        }
    } else {
        echo '<script type="text/javascript">';
        echo 'alert("Invalid email address or password, Click OK to try again.");';
        echo 'window.location.href = "../controllers/login.php";';
        echo '</script>';
    }
}