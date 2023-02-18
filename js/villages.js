fetch("villages-iflissen-levhar.jason")//je recupere 
.then(function (response) {/// je choisi comment la réponse se presente 
    return response.json();//format de la réponse en json
})

.catch(function (err) { // permet de detecter les erreurs
    console.log(err);
});

function appendData(data) {
    let mainContainer = document.getElementById("map");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].fields.com_nom + " " + data[i].fields.opening_hours;
        console.log(data[i].fields.com_nom);
        mainContainer.appendChild(div);
    }
}