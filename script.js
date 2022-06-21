(function(){
    "use strict";

    const detailsForm = document.querySelector("#destination_details_form");
    detailsForm.addEventListener("submit", handleFormSubmit);
    
    function handleFormSubmit(event){
        event.preventDefault();
    
        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDesc = event.target.elements["description"].value;
    
        for (let ii = 0; ii<detailsForm.length; ii++){
            detailsForm.elements[ii].value = "";
        }
    
        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);
    
        const wishListContainer = document.getElementById("destinations_container");
    
        if (wishListContainer.children.length === 0){
            document.getElementById("title").innerHTML =  "My Wish List";
        }
    
        wishListContainer.appendChild(destCard);
    
    }
    
    function createDestinationCard(name, location, photoURL, description){
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.setAttribute("alt", name);
    
    
        const constantPhotoURL = "images/signpost.jpg";
    
        if(photoURL.length === 0) {
            img.setAttribute("src",constantPhotoURL);
        } else {
            img.setAttribute("src", photoURL);
        }
        
        card.appendChild(img);
    
        const cardBody = document.createElement("div");
        cardBody.className = "class-name";
    
        const cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);
    
        const cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);
    
        if (description.length !==0 ){
            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
    
        }
    
        const cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = "Remove";
        cardDeleteBtn.addEventListener("click", removeDestination);
        cardBody.appendChild(cardDeleteBtn);
    
        card.appendChild(cardBody);
        return card;
    }
    
    function removeDestination(event){
        const card = event.target.parentElement.parentElement;
        card.remove();
        const wishListContainer = document.getElementById("destinations_container");
        if (wishListContainer.children.length === 0){
            document.getElementById("title").innerHTML =  "Enter Destination information";
        }
    }
})();

