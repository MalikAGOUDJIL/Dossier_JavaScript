//on declare une varriable qui crée un élément 
let div= document.createElement("div"); 


// on crée un noeud que l'on stock dans la variable 
let p= document.createElement("p");


//le parent (div) appel l'enfant
div.appendChild(p);

let text =document.createTextNode("Nek");
p.appendChild(text);



//on injecte l'élément crée (div) dans le html 
let element = document.getElementById("b1");
element.appendChild(div);