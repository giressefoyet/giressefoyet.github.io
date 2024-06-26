/*!
* Giresse FOYET - Freelancer Developper 
* Copyright 2024 portfolio
* License délivrée par FreeCampus
*/
//
// Scripts
// 

/* rendre la navigation active  */


  // Récupérer tous les liens de navigation
  const navLinks = document.querySelectorAll('.nav-elt');

  // Ajouter un écouteur d'événement à chaque lien de navigation
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          // Empêcher le comportement par défaut du lien
          event.preventDefault();

          // Récupérer l'ID de la section cible
          const targetId = this.getAttribute('href').substring(1);

          // Faire défiler jusqu'à la section cible
          const targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Ajouter un écouteur d'événement pour mettre en surbrillance le lien de navigation actif
  window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 50; // Ajustez le décalage si nécessaire
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              // Le bloc est visible, donc mettre en surbrillance le lien de navigation correspondant
              const targetId = section.getAttribute('id');
              navLinks.forEach(link => {
                  if (link.getAttribute('href') === `#${targetId}`) {
                      link.classList.add('active');
                  } else {
                      link.classList.remove('active');
                  }
              });
          }
      });
  });


  // rendre le nav fixed après un défilement

  window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav-bar');
    const anim_pp= this.document.querySelector(".anim-pp");
    const navHeight = nav.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > navHeight) {
        nav.classList.add('fixed-nav');
        anim_pp.classList.add('fixed-pp');

    } else {
        nav.classList.remove('fixed-nav');
        anim_pp.classList.remove('fixed-pp');
    }
});

/* fin navigation */




function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
        document.getElementById("menu-bar").innerHTML="x"
    } else {
        x.className = "menu";
        document.getElementById("menu-bar").innerHTML="<i class='fa-solid fa-bars'></i>"
    }
}
document.addEventListener('DOMContentLoaded', function() {




// script de défilement des compétences 

    $('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });

/* fin script défilement */
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      slides[index].classList.add('active');
      currentSlide = index;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
  });



  /* Script mon parcours */

  /*
    let lien1 = document.getElementById('ctn-1');
    let lien2 = document.getElementById('ctn-2');
    let lien3 = document.getElementById('ctn-3');
    

    window.onload = lien1.onclick = () =>{
      document.getElementById('affiche1').style.display="block";
      document.getElementById('affiche1').style.width="100%";
      document.getElementById('affiche2').style.display="none";
      document.getElementById('affiche3').style.display="none";
      lien1.classList.add('actif');
      lien2.classList.remove('actif');
      lien3.classList.remove('actif')

    }
    lien2.onclick = () =>{
      document.getElementById('affiche2').style.display="block";
      document.getElementById('affiche2').style.width="100%";
      document.getElementById('affiche1').style.display="none";
      document.getElementById('affiche3').style.display="none";
      
      lien1.classList.remove('actif')
      lien2.classList.add('actif');
      lien3.classList.remove('actif')
    }
    lien3.onclick = () =>{
      document.getElementById('affiche3').style.display="block";
      document.getElementById('affiche3').style.width="100%";
      document.getElementById('affiche1').style.display="none";
      document.getElementById('affiche2').style.display="none";

      lien1.classList.remove('actif')
      lien2.classList.remove('actif');
      lien3.classList.add('actif')
    }

   */

   // condensée du code ci-dessus
  let liens = document.querySelectorAll('.lien-item');
  let affiches = document.querySelectorAll('.affiche');
  let fleches = document.querySelectorAll('.fleche');

  for (let i = 0; i < liens.length; i++) {
      liens[i].addEventListener('click', function() {
          for (let j = 0; j < affiches.length; j++) {
              affiches[j].style.display = 'none';
          }
          affiches[i].style.display = 'block';
          for (let k = 0; k < liens.length; k++) {
              liens[k].classList.remove('actif');
              fleches[k].classList.remove('actif1');
          }
          liens[i].classList.add('actif');
          fleches[i].classList.add('actif1');
         
      });
  }
  
  window.onload = function() {
    // Afficher le bloc "Compétences lors du chargement" au chargement de la page
    document.getElementById('affiche2').style.display = 'block';
    document.querySelector('.fleche').classList.add('actif1');
    

     /* faire apparaître et disparaître les photos */
     let btn_close = document.getElementById("btn-close");
     let galeries = document.getElementById("galeries");
     let btnVoir = document.getElementById("btn-voir");
     let imageVoir = document.getElementById("img-voir");

     btn_close.onclick = () =>{
         galeries.style.display="none";
     }
     btnVoir.onclick = () =>{
         galeries.style.display="block";
     }
     imageVoir.onclick = () =>{
        galeries.style.display="block";
    }

    /* faire apparaître et disparaître maintenance */
    let btncloseMain = document.getElementById("btn-closeMain");
    let maintenance = document.getElementById("maintenance");
    let btnDetails = document.getElementById("btnDetail");
    const closeMain= document.getElementById("close-main");
    
    btncloseMain.onclick = () =>{
        maintenance.style.display="none";
    }
    btnDetails.onclick = () =>{
        maintenance.style.display="block";
        closeMain.addEventListener('click', ()=>{
            maintenance.classList.add('animate');
          });
        maintenance.classList.remove('animate');
    }

    
    /* faire apparaître et disparaître maintenance */
    let btncloseReseau = document.getElementById("btn-Rs");
    let reseau = document.getElementById("reseau");
    let btnRs = document.getElementById("btnRs");

    const closeRs= document.getElementById("close-rs");
   

    btncloseReseau.onclick = () =>{
        reseau.style.display="none";
        
    }
    btnRs.onclick = () =>{
        reseau.style.display="block";
        closeRs.addEventListener('click', ()=>{
          reseau.classList.add('animate');
        });
        reseau.classList.remove('animate');
    }
   

  window.addEventListener('scroll', function() {
    var boutonRetour = document.getElementById('retour-haut');
    if (window.scrollY > 300) {
        boutonRetour.style.display = 'block';
    } else {
        boutonRetour.style.display = 'none';
    }
  });

  document.getElementById('retour-haut').addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  });

}
/* animation des block projets non finie */
document.addEventListener("DOMContentLoaded", function(event){

    var blocks = document.querySelectorAll('.projet-bloc');

    blocks.forEach(function(block,index){
        setTimeout(function(){
            block.style.opacity = '1';
            block.style.transform='translateX(0)';

        }, index*500);
    });
});

document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)

    // Récupérer les valeurs des champs
    var nom = document.getElementById("nom").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var errorText = document.getElementById("error-msg");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Réinitialiser les styles des champs
    var fields = ["nom", "email", "message"];
    fields.forEach(function(field) {
        document.getElementById(field).style.border = "0.12rem solid rgba(4, 163, 255, 0.25)";
    });

    // Exemple de validation
    if (!nom || !email || !message) {
        displayError("Veuillez remplir tous les champs!");
    } else if (!emailRegex.test(email)) {
        displayError("Email non valide!");
        document.getElementById("email").style.border = "0.12rem solid red";
    } else {
        var formData = new FormData(this);
        sendFormData(formData);
    }

    function displayError(message) {
        errorText.style.display = "block";
        errorText.innerHTML = message;
        errorText.style.background = "red";
        fields.forEach(function(field) {
            document.getElementById(field).style.border = "0.12rem solid red";
        });
    }

    function sendFormData(formData) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "php/contact-form.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("response").innerHTML = xhr.responseText;
            }
        };
        xhr.send(formData);
        errorText.innerHTML = "Votre message a été envoyé avec succès.";
        errorText.style.background = "#08cc71";
        document.getElementById("form1").reset();
    }
})




