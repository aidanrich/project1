console.log("you got here");
var requestUrlgames = "https://api.rawg.io/api/games?key=61eab2930fd5479c99f315c0016527b5";

var displayInfo = document.getElementById('displayInfo');
var gameInfo = document.getElementById('gameInfo');
var saveButton = document.getElementById("Submit");
$(function () {
    $("#gameInfo").hide();
    fetchGames(requestUrlgames);

});

var i = 1;

function search(id) {
    tile(id);
    renderSearched();
    fetchGames(requestUrlgames);
}


function info() {
    $("#infoGrab").hide();
    $('#infoGrab').css({
        'position': 'absolute',
        'left': '50%',
        'top': '50%',
        'margin-left': -$('#infoGrab').width() / 2,
        'margin-top': -$('#infoGrab').height() / 2,
        "z-index": 99,

    });
    $("#infoGrab").fadeIn();
};



function tile(id) {

    console.log("ran tile")
    let idNum = id.replace(/\D/g, '');
    console.log("this is the id of clicked box: " + idNum)
    let divRemaining = []
    for (let i = 1; i <= 19; i++) {
        if (i != idNum) {
            divRemaining.push(i)
        }


    }
    y = divRemaining.indexOf(idNum);
    divRemaining.splice(y, 1);
    var timer = setInterval(function () {
        if (i <= 18) {
            remTile();
        } else {
            if (id === "Submit") {
                clearInterval(timer)
            } else {
                stop();
            };

        }
        i = i + 1;
    }, 200)



    function remTile() {
        let randomElement = divRemaining[Math.floor(Math.random() * divRemaining.length)];
        console.log(randomElement);
        $("#box" + randomElement).animate({
            "opacity": 0
        });
        x = divRemaining.indexOf(randomElement)
        divRemaining.splice(x, 1);
        console.log(divRemaining);

    }

    function stop() {
        clearInterval(timer);
        console.log("exited Interval")
        var coord = $("#" + id).offset();
        $("#" + id).css({
            "position": "absolute",
            "top": coord.top,
            "left": coord.left,

        })
        $("#" + id).animate({
            top: "200px",
            left: "100px",
            width: "40%",
            height: "60%"

        })
        $("#" + id).empty();
    }




};
function fetchGames(url){
fetch(url)
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



        console.log(data);
        for (let index = 1; index < data.results.length; index++) {

            var gameTitle = document.createElement('p');
            var backgroundImageEl = document.createElement('img');
            var genresEl = document.createElement('p');
            var ownedEl = document.createElement('p');
            var dateReleased = document.createElement('p');
            var peoplePlaying = document.createElement('p');

            var divStyleEl = document.createElement('div');

            var imageBack = data.results[index].short_screenshots[1].image;

            backgroundImageEl.setAttribute("src", imageBack);


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

            // displayInfo.append(divStyleEl);

            let url = data.results[index].background_image;
            let title = data.results[index].name;
            $("#box" + index).css({
                "background-image": "url(" + url + ")",
                "background-size": "cover",
                "color": "white"
            });
            $("#box" + index).text(title);
            if (!title) {
                console.log("no title")
            }

            title = title.replaceAll(" ", "+");
            title = title.replaceAll(":", "");
            
            var bookReq = "https://openlibrary.org/search.json?title=" + title;
            
            fetch(bookReq)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    




                    var bookTitle = document.createElement('h4');
                    var bookAuthor = document.createElement('h4');
                    var bookCover = document.createElement('img');


                    if (data.work_count === 0 || data.numFound === 0) {
                        bookTitle.textContent = "Sorry, no books available yet.";
                        return;
<<<<<<< HEAD
                    }
                    else
                        
=======
                    } else
                        console.log(data);
>>>>>>> b39e30075f49df24a0f8b57be17c5c67e406babb
                    // title and author info
                    bookTitle.textContent = data.docs[0].title;
                    bookAuthor.textContent = data.docs[0].author_name[0];
                    // bookCover.setAttribute("src", `https://ia600602.us.archive.org/view_archive.php?archive=/10/items/olcovers573/olcovers573-L.zip&file=${data.docs[0].cover_id}-L.jpg`);

                    bookTitleCard.append(bookTitle);
                    bookTitleCard.append(bookAuthor);
                    bookTitleCard.append(bookCover);



                });
        }});
    };





            
        

    



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

    var urlFront = "https://api.rawg.io/api/games?";
    var apiKey = "&key=61eab2930fd5479c99f315c0016527b5";
    var pcPlatform = "&platforms=4";
    var playstationPlatform = "&platforms=187";
    var xboxPlatform = "&platforms=186";
    var indieGenre = "&genre=51";
    var adventureGenre = "&genre=3";
    var actionGenre = "&genre=4";
    var rpgGenre = "&genre=5";
    console.log(urlFront.concat(indieGenre, pcPlatform, apiKey))

    if (userSelection.genre === "Indie" & userSelection.platform === "PC") {
        requestUrlgames = urlFront.concat(indieGenre, pcPlatform, apiKey);
    } else if (userSelection.genre === "Adventure" & userSelection.platform === "PC") {
        requestUrlgames = urlFront.concat(adventureGenre, pcPlatform, apiKey);
    } else if (userSelection.genre === "Action" & userSelection.platform === "PC") {
        requestUrlgames = urlFront.concat(actionGenre, pcPlatform, apiKey);
    } else if (userSelection.genre === "RPG" & userSelection.platform === "PC") {
        requestUrlgames = urlFront.concat(rpgGenre, pcPlatform, apiKey);
    } else if (userSelection.genre === "Indie" & userSelection.platform === "Playstation 5") {
        requestUrlgames = urlFront.concat(indieGenre, playstationPlatform, apiKey);
    } else if (userSelection.genre === "Adventure" & userSelection.platform === "Playstation 5") {
        requestUrlgames = urlFront.concat(adventureGenre, playstationPlatform, apiKey);
    } else if (userSelection.genre === "Action" & userSelection.platform === "Playstation 5") {
        requestUrlgames = urlFront.concat(actionGenre, playstationPlatform, apiKey);
    } else if (userSelection.genre === "RPG" & userSelection.platform === "Playstation 5") {
        requestUrlgames = urlFront.concat(rpgGenre, playstationPlatform, apiKey);
    } else if (userSelection.genre === "Indie" & userSelection.platform === "Playstation 5") {
        requestUrlgames = urlFront.concat(indieGenre, playstationPlatform, apiKey);
    } else if (userSelection.genre === "Indie" & userSelection.platform === "Xbox series X") {
        requestUrlgames = urlFront.concat(indieGenre, xboxPlatform, apiKey);
    } else if (userSelection.genre === "Adventure" & userSelection.platform === "Xbox series X") {
        requestUrlgames = urlFront.concat(adventureGenre, xboxPlatform, apiKey);
    } else if (userSelection.genre === "Action" & userSelection.platform === "Xbox series X") {
        requestUrlgames = urlFront.concat(actionGenre, xboxPlatform, apiKey);
    } else if (userSelection.genre === "RPG" & userSelection.platform === "Xbox series X") {
        requestUrlgames = urlFront.concat(rpgGenre, xboxPlatform, apiKey);
    }
    console.log(requestUrlgames);

}

// Aidan's fetch request
var bookTitleCard = document.querySelector(".book-title");







// var searchBook = document.querySelector("#searcher");
// var bookButton = document.querySelector("#bookbutton");