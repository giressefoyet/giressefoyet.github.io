<?php
/*if(isset($_POST["message"])){
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
    }*/
    ?>
<?php   
//si le bouton envoyer a été cliqué  
if (isset($_POST["envoyer"])){   
    //on recupère le nom  
    $nom = $_POST["nom"];  
    //on recupère le prenom  
    $prenom = $_POST["prenom"];    
    //on recupère l'adresse email  
    $email = $_POST["email"];      
    //on recupère l'objet du message  
    $sujet = $_POST["sujet"];  
    //on recupère le message  
    $message = $_POST["message"];  
      
    $to = "ffgire@gmail.com";      
    $headers = "From:" . $nom . " " . $prenom ." " . $email;    
    //on envoie le message avec la fonction mail  
    if (mail($to,$sujett,$message,$headers))   
    //si le message a été envoyé, on le confirme  
    {   
    echo " ton message est bien envoyé.";    
    }   
    //sinon on n'affiche un message d'erreur  
    else   
    {   
    echo "Une erreur s'est produite";   
    }   
    }        

?>     