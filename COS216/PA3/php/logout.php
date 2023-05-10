<?php
// <!-- Selepe Sello uXXXXXXXX -->
    session_start();
    // Unset all session which are potentially still active
    session_unset();
    // Unset all of the session variables
    $_SESSION = array();
    // Destroy the session cookie
    if (isset($_COOKIE[session_name()])) {
        setcookie(session_name(), '', time() - 42000, '/');
    }
    // Destroy the session
    session_destroy();
    // Redirect the user to the login page
    header("Location: login.php");
    exit;
?>