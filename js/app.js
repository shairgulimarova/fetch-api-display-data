

window.addEventListener("load", getApiData); 

function getApiData(){
    fetch("db.json")
    .then ((res) => {
        return res.json();
    })
    .then ((data) =>{
        let output =""; 

        data.forEach((elem) =>{
            let cards = document.createElement("div"); 
            cards.className = ("products__item");
            
            let img = document.createElement("img"); 
            img.src = elem.img;
            img.className = "products__item-photo";
            cards.appendChild(img);

            let allInfo = document.createElement("div");
            allInfo.className = "products__item-info";
            cards.appendChild(allInfo); 

            let title = document.createElement("h3"); 
            title.className = "products__title"; 
            title.innerText = elem.title;
            allInfo.appendChild(title); 

            let price = document.createElement("p");
            price.innerText = elem.price +`сом`;
            price.className = "products__price"
            allInfo.appendChild(price); 

            let description = document.createElement("p");
            description.className = "products__item-text"; 
            description.innerText = elem.desc; 
            cards.appendChild(description);
            
             document.querySelector(".products__inner").appendChild(cards); 
        })
        
       
    })
    .catch((error) =>{
        console.log(error);
    });
};