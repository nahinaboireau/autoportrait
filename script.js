var array1= [];
array1[0]="un film"; 
array1[1]="un instrument de musique";
array1[2]="une saison";
array1[3]="un photographe";
array1[4]="une région de France";
array1[5]="un genre littéraire";
array1[6]="une chanteuse"; 


//afficher les analogies dans les boites (je n'ai pas pu faire de fonction car les analogies ne se collaient pas aux bonnes boites)
document.querySelector('.liste-analogies1').innerHTML += "<section><h3 class=boite boite0 boite1>Si j’étais " + array1[0]+ "</h3></section>";
document.querySelector('.liste-analogies2').innerHTML += "<section><h3 class=boite boite0 boite1>Si j'étais " + array1[1]+ "</h3></section>";

document.querySelector('.liste-analogies3').innerHTML += "<section><h3 class=boite boite0 boite1>Si j'étais " + array1[2]+ "</h3></section>"
document.querySelector('.liste-analogies4').innerHTML += "<section><h3 class=boite boite0 boite1>Si j'étais " + array1[3]+ "</h3></section>";

document.querySelector('.liste-analogies5').innerHTML += "<section><h3 class=boite boite0 boite1>Si j'étais " + array1[4]+ "</h3></section>";

document.querySelector('.liste-analogies6').innerHTML += "<section><h3 class=boite boite0 boite1>Si j'étais " + array1[5]+ "</h3></section>";

document.querySelector('.liste-analogies7').innerHTML += "<section><h3 class=boite boite0 boite1>Si j'étais " + array1[6]+ "</h3></section>";





//////GESTION DES POPUP//////
var trumanPopup = document.getElementById('trumanPopup');  //lorsque je clique sur le bouton qu'est ce qu'il va faire ?
var truman_overlay = document.getElementById('truman_overlay'); 
var trumanClose= document.getElementById('trumanClose');

//lorsque je clique sur notre bouton qui va afficher le popup il affiche la couleur de fond d'écran que j'ai nommé overlay
trumanPopup.addEventListener('click',openModal1); //lorsque je clique ça ouvre la fenêtre 
function openModal1(){
  truman_overlay.style.display = 'block';
}

trumanClose.addEventListener('click', closePopup1);
function closePopup1(){
  truman_overlay.style.display = "none";
}

///gérer  popup2
var marimbaPopup = document.getElementById('marimbaPopup');  //lorsque je clique sur le bouton qu'est ce qu'il va faire ?
var marimba_overlay = document.getElementById('marimba_overlay'); 
var marimbaClose= document.getElementById('marimbaClose');

//lorsque je clique sur notre bouton qui va afficher le popup il affiche l'overlay (gestionnaire d'évenement)
marimbaPopup.addEventListener('click',openModal2); //lorsque je clique ça ouvre la fenêtre 
function openModal2(){
  marimba_overlay.style.display = 'block';
}

marimbaClose.addEventListener('click', closeModal2);
function closeModal2(){
  marimba_overlay.style.display = "none";
}

///gérer popup 3
var automnePopup= document.getElementById('automnePopup');  //lorsque je clique sur le bouton qu'est ce qu'il va faire ?
var automne_overlay = document.getElementById('automne_overlay'); 
var automneClose= document.getElementById('automneClose');

//lorsque je clique sur notre bouton qui va afficher le popup il affiche l'overlay (gestionnaire d'évenement)
automnePopup.addEventListener('click',openModal3); //lorsque je clique ça ouvre la fenêtre 
function openModal3(){
  automne_overlay.style.display = 'block';
}

automneClose.addEventListener('click', closeModal3);
function closeModal3(){
  automne_overlay.style.display = "none";
}

///gérer popup 4

var photoPopup= document.getElementById('photoPopup');  //lorsque je clique sur le bouton qu'est ce qu'il va faire ?
var photo_overlay = document.getElementById('photo_overlay'); 
var photoClose= document.getElementById('photoClose');

//lorsque je clique sur notre bouton qui va afficher le popup il affiche l'overlay (gestionnaire d'évenement)
photoPopup.addEventListener('click',openModal4); //lorsque je clique ça ouvre la fenêtre 
function openModal4(){
  photo_overlay.style.display = 'block';
}

photoClose.addEventListener('click', closeModal4);
function closeModal4(){
  photo_overlay.style.display = "none";
}

//gérer le 5 popup

var normandiePopup= document.getElementById('normandiePopup');  //lorsque je clique sur le bouton qu'est ce qu'il va faire ?
var normandie_overlay = document.getElementById('normandie_overlay'); 
var normandieClose= document.getElementById('normandieClose');

//lorsque je clique sur notre bouton qui va afficher le popup il affiche l'overlay (gestionnaire d'évenement)
normandiePopup.addEventListener('click',openModal5); //lorsque je clique ça ouvre la fenêtre 
function openModal5(){
  normandie_overlay.style.display = 'block';
}

normandieClose.addEventListener('click', closeModal5);
function closeModal5(){
  normandie_overlay.style.display = "none";
}


//gérer le 6 popup

var scènePopup= document.getElementById('scènePopup');  //lorsque je clique sur le bouton qu'est ce qu'il va faire ?
var scène_overlay = document.getElementById('scène_overlay'); 
var scèneClose= document.getElementById('scèneClose');

//lorsque je clique sur notre bouton qui va afficher le popup il affiche l'overlay (gestionnaire d'évenement)
scènePopup.addEventListener('click',openModal6); //lorsque je clique ça ouvre la fenêtre 
function openModal6(){
  scène_overlay.style.display = 'block';
}

scèneClose.addEventListener('click', closeModal6);
function closeModal6(){
  scène_overlay.style.display = "none";
}

//gérer le 7 popup

var angelePopup= document.getElementById('angelePopup');  //lorsque je clique sur le bouton qu'est ce qu'il va faire ?
var angele_overlay = document.getElementById('angele_overlay'); 
var angeleClose= document.getElementById('angeleClose');

//lorsque je clique sur notre bouton qui va afficher le popup il affiche l'overlay (gestionnaire d'évenement)
angelePopup.addEventListener('click',openModal7); //lorsque je clique ça ouvre la fenêtre 
function openModal7(){
  angele_overlay.style.display = 'block';
}

angeleClose.addEventListener('click', closeModal7);
function closeModal7(){
  angele_overlay.style.display = "none";
}




/////BOUTON COMMENCER//////
function scrollWin() {
    window.scrollTo(0, 750);
    
  }





//////GESTION DU FORMULAIRE
//détecter que la touche a été relachée sur le champ analogie
document.querySelector("#nom").addEventListener('keyup', function(element1){
  console.log("Champ modifié");

})

document.querySelector("#prenom").addEventListener('keyup', function(element2){
  console.log("Champ modifié");

})

document.querySelector("#email").addEventListener('keyup', function(element3){
  console.log("Champ modifié");

})

document.querySelector("#choix").addEventListener('keyup', function(element4){
  console.log("Champ modifié");

})

document.querySelector("#analogie1").addEventListener('keyup', function(element5){
  console.log("Champ modifié");

})
document.querySelector("#analogie1").addEventListener('keyup', function(element6){
  console.log("Champ modifié");

})

document.querySelector("#analogie2").addEventListener('keyup', function(element7){
  console.log("Champ modifié");

})
document.querySelector("#valeurAnalogie2").addEventListener('keyup', function(element8){
  console.log("Champ modifié");

})


document.querySelector("#analogie3").addEventListener('keyup', function(element9){
  console.log("Champ modifié");

})
document.querySelector("#valeurAnalogie3").addEventListener('keyup', function(element10){
  console.log("Champ modifié");

})


document.querySelector("#analogie4").addEventListener('keyup', function(element11){
  console.log("Champ modifié");

})

document.querySelector("#valeurAnalogie4").addEventListener('keyup', function(element12){
  console.log("Champ modifié");

})



//envoi des données à l'API à l'adresse 
var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=" + document.querySelector("#email").value + "&message=Si j'étais ... " + document.querySelector("#analogie1").value + " je serais ... " + document.querySelector("#valeurAnalogie1").value + "&message=Si j'étais ... " + document.querySelector("#analogie2").value + " je serais ... " + document.querySelector("#valeurAnalogie2").value +"&message=Si j'étais ... " + document.querySelector("#analogie3").value + " je serais ... " + document.querySelector("#valeurAnalogie3").value + "&message=Si j'étais ... " + document.querySelector("#analogie4").value + " je serais ... " + document.querySelector("#valeurAnalogie4").value  ;
            fetch(urlVisitee).then(function (response) {
                response.json().then(function (data) {
                    
                    if(data.status == "success"){
                    document.querySelector("#messageApresEnvoi").innerHTML = "Votre message a bien été reçu";
               }else{
                    document.querySelector("#messageApresEnvoi").innerHTML = "Problème : votre message n'a pas été reçu";
                }
                })
           })