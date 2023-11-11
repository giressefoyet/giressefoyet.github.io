<?php
    $retour = mail('ffgire@gmail.com', 'Envoi depuis la page Contact', $_POST['nom'],
    , $_POST['email'] , $_POST['tel'], $_POST['sujet'], $_POST['message'], 'From: giressefoyet.github.io');
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
?>
