let heroes = {
    id: 0,
    nameHero: "super man",
    lastname: "kent",
    firstname: "clark",
    power: ["indestructible", "voler"],  // tableau 
    bio: function () {
        document.write("je m'apelle" + this.firstname + " " +
            this.lastname + " " + "et je suis" + this.nameHero +
            "mon pouvoir est d'être " + this.power[0]);

    },
};
document.write(heroes.lastname);
heroes.bio(); //on chercher tous les éléemnts de la
document.write(heroes["power"]);

