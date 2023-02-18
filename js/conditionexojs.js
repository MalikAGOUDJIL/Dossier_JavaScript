// let age = parseInt(prompt('Quel est votre âge ?'));

switch (new Date().getDay()) {
    case 0:
        day = "Dimanche";
        break;
    case 1:
        day = "Lundi";
        break; 
    case 2:
        day = "Mardi";
        break; 
    case 3:
        day = "Mercredi";
        break; 
    case 4:
        day = "Jeudi";
        break; 
    case 5:
        day = "Vendredi";
        break; 
    case 6:
        day = "Samedi";
        break; 
}

document.getElementById('switch').innerHTML = "Aujourd'hui nous sommes " + day.toUpperCase();