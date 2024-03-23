<?php
    
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $to = "ffgire@email.com";
        $headers = "From: $email \r\n";
        $headers .= "Reply-To: $email \r\n";
        $headers .= "MIME-Version: 1.0 \r\n";
        $headers .= "Content-Type: text/html;charset=utf-8 \r\n";

        $email_body = "Nom: $name <br>";
        $email_body .= "Email: $email <br>";
        $email_body .= "Sujet: $subject <br>";
        $email_body .= "Message: $message <br>";

        if(mail($to, $subject, $email_body, $headers)) {
            echo "Votre message a été envoyé avec succès.";
        } else {
            echo "Erreur lors de l'envoi du message.";
        }
    }
?>
