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
                                <h3>${userInfo.user.username}</h3>
                            </div>
                            <p class="piu-text">${userInfo.text}</p>
                            <div class="piu-icons">
                                <button class="piu-button">
                                    <img src="../assets/home.svg" alt="hilight">
                                </button class="piu-button">
                                <button class="piu-button">
                                    <img src="../assets/like.svg" alt="like">
                                </button>
                                <button class="piu-button">
                                    <img src="../assets/help.svg" alt="help">
                                </button>
                            </div>
                        </div>`
        piupiuzadas.insertAdjacentHTML('beforeend',html)

    });
}
getData()

const postText = document.getElementById('newpiu')
console.log(postText)
console.log(postText.value)

// function post(){
//     const postText = document.getElementById('newpiu')
//     const html = `<div class="user-piu">
//                         <div class="piu-img">
//                         <img src="../assets/profilephoto.jpg" alt="profile photo">
//                         </div>
//                         <h3>salehzao</h3>
//                         </div>
//                         <p class="piu-text">${postText.value}</p>
//                         <div class="piu-icons">
//                         <button class="piu-button">
//                             <img src="../assets/home.svg" alt="hilight">
//                         </button class="piu-button">
//                         <button class="piu-button">
//                             <img src="../assets/like.svg" alt="like">
//                         </button>
//                         <button class="piu-button">
//                             <img src="../assets/help.svg" alt="help">
//                         </button>
//                     </div>` 
                
//     piupiuzadas.insertAdjacentHTML('beforeend',html)
// }
