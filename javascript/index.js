const piupiuzadas = document.querySelector(".feed")

async function getData(){
    const response = await fetch("https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad");
    const data = await response.json();

    console.log(data)

    data.forEach(userInfo => {
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
                                    <img src="../assets/home.svg" alt="hilight">
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

    });
}
getData()

var capturando = ""

function capturar(){
    capturando=document.getElementById('newpiu').value
    return capturando
}

function post(){
    const newpiu = capturar()
    const html = `<div class="feed-piu">
                    <div class="user-piu">
                        <div class="piu-img">
                        <img src="../assets/profilephoto.jpg" alt="profile photo">
                        </div>
                        <h3>@salehzao</h3>
                        </div>
                        <p class="piu-text">${newpiu}</p>
                        <div class="piu-icons">
                        <button class="piu-button">
                            <img src="../assets/home.svg" alt="hilight">
                        </button class="piu-button">
                        <button class="piu-button" onclick="addLike(this)">
                            <img src="../assets/like.svg" alt="like">
                        </button>
                        <p id="numberOfLikes">0</p>
                        <button class="piu-button">
                            <img src="../assets/trash.svg" onclick="piuDelete(this)">
                        </button>
                    </div>
                </div>` 
                
    piupiuzadas.insertAdjacentHTML('afterbegin',html)
}

function wordCount(){
    const text = document.querySelector("#newpiu")
    const contador = document.querySelector("#contador")
    const aviso = document.querySelector("#aviso")
    text.onkeyup = (e)=>{ 
        contador.innerText = (e.target.value.length)+"/140"
        if((e.target.value.length)>140){
            // document.getElementById("newpiu").style.color="red"
            aviso.innerText = "Você ultrapassou o limite de caracteres."
            aviso.style.color = "red"
            contador.style.color = "red"
        }
        else{
            document.getElementById("newpiu").style.color="black"
            aviso.innerText = " "
            aviso.style.color = "black"
            contador.style.color = "black"
        }
}
}
wordCount()

function addLike(piu){
    const likeCount = piu.parentNode.parentNode.querySelector("#numberOfLikes")
    likeCount.innerText = parseInt(likeCount.innerText)+parseInt(1) 
}

function piuDelete(piu){
    const piuRemover = piu.parentNode.parentNode.parentNode.parentNode.querySelector(".feed-piu")
    piuRemover.parentNode.removeChild(piuRemover)
}

