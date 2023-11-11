<?php
    if(isset($_POST["message"])){
        $message="Ce message a été envoyer depuis la page contact du site giressefoyet.github.io
        Nom : ". $_POST["nom"] ."
        Email : ". $_POST["email"] ."
        Tél : " . $_POST["tel"] ."
        Message : ". $_POST["message"];
        
        
        $retour = mail("ffgire@gmail.com", "Envoi depuis la page Contact", $_POST["sujet"], $message, 
        "From: ". $_POST["email"] . "\r\n" . "Reply-to" . $_POST["email"]);
        if ($retour){
            echo '<p>Votre message a bien été envoyé.</p>';
        }
    }
    ?>  
