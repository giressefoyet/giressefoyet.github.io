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
    const navHeight = nav.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > navHeight) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
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
        document.getElementById("menu-bar").innerHTML="MENU"
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

  for (let i = 0; i < liens.length; i++) {
      liens[i].addEventListener('click', function() {
          for (let j = 0; j < affiches.length; j++) {
              affiches[j].style.display = 'none';
          }
          affiches[i].style.display = 'block';

          for (let k = 0; k < liens.length; k++) {
              liens[k].classList.remove('actif');
          }
          liens[i].classList.add('actif');
      });
  }
  
  window.onload = function() {
    // Afficher le bloc "Compétences lors du chargement" au chargement de la page
    document.getElementById('affiche2').style.display = 'block';
    

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

    btncloseMain.onclick = () =>{
        maintenance.style.display="none";
    }
    btnDetails.onclick = () =>{
        maintenance.style.display="block";
    }

    
    /* faire apparaître et disparaître maintenance */
    let btncloseReseau = document.getElementById("btn-Rs");
    let reseau = document.getElementById("reseau");
    let btnRs = document.getElementById("btnRs");

    btncloseReseau.onclick = () =>{
        reseau.style.display="none";
    }
    btnRs.onclick = () =>{
        reseau.style.display="block";
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

