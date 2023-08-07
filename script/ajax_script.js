function generateRandom(){
    return Math.floor(Math.random() * 1000);
}

function setWolfRow(name, age, description, image){
    let wolvesRow = document.createElement("div");
    wolvesRow.classList.add("wolves-row");

    let wolfImg = document.createElement("img");
    wolfImg.src = image;
    let wolfImgDiv = document.createElement("div");
    wolfImgDiv.append(wolfImg);
    wolfImgDiv.classList.add("wolf-img-div");
    wolfImgDiv.id = "wolf-img-shadow";
    wolvesRow.append(wolfImgDiv);

    let wolfText = document.createElement("div");
    wolfText.classList.add("wolves-text");
    let wolfName = document.createElement("h2");
    wolfName.innerText = name;
    let wolfAge = document.createElement("span");
    wolfAge.innerText = ("Idade: " + age);
    let wolfDscription = document.createElement("p");
    wolfDscription.innerText = description;
    wolfText.append(wolfName);
    wolfText.append(wolfAge);
    wolfText.append(wolfDscription);
    wolvesRow.append(wolfText);
    let wolvesSection = document.getElementById("wolves-section");
    wolvesSection.append(wolvesRow);
}
function setReverseWolfRow(name, age, description, image){
    let wolvesRow = document.createElement("div");
    wolvesRow.classList.add("wolves-row");

    let wolfImg = document.createElement("img");
    wolfImg.src = image;
    let wolfImgDiv = document.createElement("div");
    wolfImgDiv.append(wolfImg);
    wolfImgDiv.classList.add("wolf-img-div");
    wolfImgDiv.id = "wolf-reverse-img-shadow";
    wolvesRow.append(wolfImgDiv);

    let wolfText = document.createElement("div");
    wolfText.classList.add("wolves-text");
    let wolfName = document.createElement("h2");
    wolfName.innerText = name;
    let wolfAge = document.createElement("span");
    wolfAge.innerText = ("Idade: " + age);
    let wolfDscription = document.createElement("p");
    wolfDscription.innerText = description;
    wolfText.append(wolfName);
    wolfText.append(wolfAge);
    wolfText.append(wolfDscription);
    wolvesRow.append(wolfText);
    wolvesRow.id = "wolves-row-reverse"
    let wolvesSection = document.getElementById("wolves-section");
    wolvesSection.append(wolvesRow);
}

function getWolfCard(){
    const fetchConfig = {
        "method": "GET",
    };
    fetch("../api/lobinhos.json", fetchConfig)
        .then((response)=>{
            response.json()
                .then((response)=>{
                    randomNumber = generateRandom();
                    setWolfRow(response[randomNumber].nome, response[randomNumber].idade, response[randomNumber].descricao, response[randomNumber].imagem);
                    randomNumber = generateRandom();
                    setReverseWolfRow(response[randomNumber].nome, response[randomNumber].idade, response[randomNumber].descricao, response[randomNumber].imagem);
                })
                .catch((error)=>{
                    console.log(error)
                })
        })
        .catch((error)=>{
            console.log(error)
        })
}

getWolfCard();