// on à creér l'objet XMLHttpRequestconst xhttp = new XMLHttpRequest(); 

// Il faut définir une fonction, cette fonction s'appellera un callback

// xhttp.onload = function(){
  //document.getElementById ("ajax").innerHTML = this.responseText;

//  }
// xhttp.open

//  xhttp.open("GET", "ajax_info.txt", true);
//   xhttp.send();


function loadDoc(){
    const xhttp=new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("ajax").innerHTML = this.responseText;
    }

    xhttp.open("GET ", "ajax_info.txt", true);
    xhttp.send();


//Mesures de securité 
// on utilise POST au lieu de GET
//On evite de partir du serveur au client 












