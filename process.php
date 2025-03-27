<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST["username"]); // Felhasználónév beolvasása

    if (!empty($username)) {
        echo "Sikeresen megkaptuk: " . $username;
    } else {
        echo "Hiba: A név mező üres!";
    }
} else {
    echo "Érvénytelen kérés!";
}
?>