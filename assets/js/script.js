var requestUrlgames = "https://api.rawg.io/api/games?key=61eab2930fd5479c99f315c0016527b5";

var displayInfo = document.getElementById('displayInfo');
var saveButton = document.getElementById("Submit");

fetch(requestUrlgames)
    //fetch is first calling for the URL the promising to wait until it is ready to

    .then(function (response) {
        return response.json();

    })
    .then(function (data) {

        var platSearch = document.getElementById("platform");
        var genreSearch = document.getElementById("genre");
        var usersChoice = platSearch.value;
        var usersChoiceGenre = genreSearch.value;
        console.log(usersChoice);
        console.log(usersChoiceGenre);


        // function display() {

        // var urlFront =  "https://api.rawg.io/api/games?"; 
        // var apiKey = "key=61eab2930fd5479c99f315c0016527b5";
        // var pcPlatform = "&platforms=4";
        // var playstationPlatform = "&platforms=187";
        // var xboxPlatform = "&platforms=186";
        //  var indieGenre = "&genre=51;";
        //  var adventureGenre = "&genre=3";
        //  var actionGenre = "&genre=4";
        //  var rpgGenre = "&genre=5";
        // var shooterGenre = "&genre=2";


        //         fetch(last3Months)
        // //fetch is first calling for the URL the promising to wait until it is ready to

        // .then(function (response) {
        //     return response.json();

        // })
        // .then(function (data){



        console.log(data);
        for (let index = 1; index < data.results.length; index++) {

            var gameTitle = document.createElement('p');
            var backgroundImageEl = document.createElement('img');
            var genresEl = document.createElement('p');
            var ownedEl = document.createElement('p');
            var dateReleased = document.createElement('p');
            var peoplePlaying = document.createElement('p');

            var divStyleEl = document.createElement('div');
            backgroundImageEl.setAttribute("src", imageBack);




            var imageBack = data.results[index].short_screenshots[1].image;
            gameTitle.innerHTML = "Game Title: " + " " + data.results[index].name;
            dateReleased.innerHTML = "Release Date: " + " " + data.results[index].released;
            genresEl.innerHTML = "Genre type:" + " " + data.results[index].genres[0].name;
            ownedEl.innerHTML = "People who own this game:" + " " + data.results[index].added_by_status.owned;
            peoplePlaying.innerHTML = "Number of people Playing:" + " " + data.results[index].added_by_status.playing;


            divStyleEl.append(backgroundImageEl);
            divStyleEl.append(gameTitle);
            divStyleEl.append(dateReleased);
            divStyleEl.append(genresEl);
            divStyleEl.append(ownedEl);
            divStyleEl.append(peoplePlaying);

            displayInfo.append(divStyleEl);

        }
    });
//     };

// });

// function handleFormSubmit(event){
//     event.preventDefault();

//     var chosenPlatform = 
// }
var platSearch = document.getElementById("platform");
var genreSearch = document.getElementById("genre");

saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    var usersChoice = {
        platform: platSearch.value,
        genre: genreSearch.value
    };

    localStorage.setItem("Searched", JSON.stringify(usersChoice));
    renderSearched();

});

function renderSearched() {
    var userSelection = JSON.parse(localStorage.getItem("Searched"));
    console.log(userSelection);

    var urlFront =  "https://api.rawg.io/api/games?"; 
        var apiKey = "key=61eab2930fd5479c99f315c0016527b5";
        var pcPlatform = "&platforms=4";
        var playstationPlatform = "&platforms=187";
        var xboxPlatform = "&platforms=186";
         var indieGenre = "&genre=51;";
         var adventureGenre = "&genre=3";
         var actionGenre = "&genre=4";
         var rpgGenre = "&genre=5";
        var shooterGenre = "&genre=2";

        if (data.genre === "Indie" & data.platform ==="PC"){
            requestUrlgames = urlFront.concat(indieGenre + pcPlatform + apikey);
        }else if (data.platform === "Adventure" & data.platform ==="PC"){
            requestUrlgames = urlFront.concat(adventureGenre + pcPlatform + apikey);
        }else if (data.platform === "Action" & data.platform ==="PC"){
            requestUrlgames = urlFront.concat(actionGenre + pcPlatform + apikey);
        }else if (data.platform === "RPG" & data.platform ==="PC"){
            requestUrlgames = urlFront.concat(rpgGenre + pcPlatform + apikey);
        }else if (data.genre === "Indie" & data.platform ==="Playstation 5"){
            requestUrlgames = urlFront.concat(indieGenre + playstationPlatform + apikey);
        }else if (data.genre === "Adventure" & data.platform ==="Playstation 5"){
            requestUrlgames = urlFront.concat(adventureGenre + playstationPlatform + apikey);
        }else if (data.genre === "Action" & data.platform ==="Playstation 5"){
            requestUrlgames = urlFront.concat(actionGenre + playstationPlatform + apikey);
        }else if (data.genre === "RPG" & data.platform ==="Playstation 5"){
            requestUrlgames = urlFront.concat(rpgGenre + playstationPlatform + apikey);
        }else if (data.genre === "Indie" & data.platform ==="Playstation 5"){
            requestUrlgames = urlFront.concat(indieGenre + playstationPlatform + apikey);
        }else if (data.genre === "Indie" & data.platform ==="Xbox series X"){
            requestUrlgames = urlFront.concat(indieGenre + xboxPlatform + apikey);
        }else if (data.genre === "Adventure" & data.platform ==="Xbox series X"){
            requestUrlgames = urlFront.concat(adventureGenre + xboxPlatform + apikey);
        }else if (data.genre === "Action" & data.platform ==="Xbox series X"){
            requestUrlgames = urlFront.concat(actionGenre + xboxPlatform + apikey);
        }else if (data.genre === "RPG" & data.platform ==="Xbox series X"){
            requestUrlgames = urlFront.concat(rpgGenre + xboxPlatform + apikey);
        }

    
}

// Aidan's fetch request

// var search = "sonic"

// fetch("https://openlibrary.org/subjects/" + search + ".json?published_in=2000-2021")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {

//         if (data.work_count == 0) {
//             console.log("No data");
//         }
//         else
//             console.log(data);
//             // title and author info
//         console.log(data.works[0].title);
//         console.log(data.works[0].authors[0].name);
//             // if we want to pull a cover image
//         var bookCover = document.createElement('img');
//         bookCover.setAttribute("src", `https://ia600602.us.archive.org/view_archive.php?archive=/10/items/olcovers573/olcovers573-L.zip&file=${data.works[0].cover_id}-L.jpg`);

//     })