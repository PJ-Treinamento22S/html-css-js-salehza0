const piupiuzadas = document.querySelector(".feed")
let searchText = document.querySelector("#searchBar")

async function getData(){
    const response = await fetch("https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad");
    const data = await response.json();

    console.log(data)

    let searchText = document.querySelector("#searchBar").value
    const aviso = document.querySelector("#notFound")
    let userUnk = true

    data.forEach(userInfo => {
        if(searchText==userInfo.user.username){
            const html=`<div class="feed-piu">
                        <div class="user-piu">
                            <div class="piu-img">
                            <img src="${userInfo.user.photo}" alt="image">
                            </div>
                            <h3>${"@"+userInfo.user.username}</h3>
                        </div>
                        <p class="piu-text">${userInfo.text}</p>
                        <div class="piu-icons">
                            <button class="piu-button">
                                <img src="../assets/home.svg" alt="hilight" onclick="highlight(this)">
                            </button class="piu-button">
                            <button class="piu-button">
                                <img src="../assets/like.svg" alt="like" onclick="addLike(this)">
                            </button>
                            <p id="numberOfLikes">0</p>
                            <button class="piu-button">
                                <img src="../assets/trash.svg" onclick="piuDelete(this)">
                            </button>
                        </div>
                </div>`
                piupiuzadas.insertAdjacentHTML('beforeend',html)
                userUnk = false
        }
    });

    if(userUnk){
        aviso.innerText = "Esse usuário não existe!"
    }
}


function addLike(piu){
    const likeCount = piu.parentNode.parentNode.querySelector("#numberOfLikes")
    likeCount.innerText = parseInt(likeCount.innerText)+parseInt(1) 
}

function piuDelete(piu){
    const piuRemover = piu.parentNode.parentNode.parentNode.parentNode.querySelector(".feed-piu")
    piuRemover.parentNode.removeChild(piuRemover)
}

