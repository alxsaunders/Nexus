var coversingle = document.querySelector("#gamename");
var coverspot = document.querySelector('#gamecover');

let myKey = "Bearer 4g8i1kkt7dok6k6d5avyx1kzg1ut48";
var apiUrlsingle = `https://api.twitch.tv/helix/games?name=${coversingle.innerText}`

function getGameImage() {
    console.log(coversingle.innerText);
    fetch(apiUrlsingle, {  
      method: "GET",
      headers: {
        "Authorization": myKey,
        "Client-Id": "fj1zbvow6f5o4tbej4txgkv0qbk0ww",
      }
    })
    .then(function (response) {
        if (response.ok) {
            console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                        displayGame(data.data[0].id)
                
                    
                })
            }
        })
    }

    function displayGame(coverArt) {

        let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;
      
        
            coverspot.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
         
        
      }

      getGameImage(coverspot);