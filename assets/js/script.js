var requestUrlgames = "https://api.rawg.io/api/games?key=61eab2930fd5479c99f315c0016527b5&dates=2019-09-01,2019-09-30&platforms=18,1,7";

var last3Months = "https://api.rawg.io/api/games?dates=2021-06-01,2021-09-01&platforms=187,4,186&key=61eab2930fd5479c99f315c0016527b5"
var apiKey = "key=61eab2930fd5479c99f315c0016527b5";

var displayInfo = document.getElementById('displayInfo');

fetch(last3Months)
    //fetch is first calling for the URL the promising to wait until it is ready to

    .then(function (response) {
        return response.json();

    })
    .then(function (data) {


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

            console.log(data.results[index].name)






        }
    });

// Aidan's fetch request
// var bookTitleCard = document.querySelector("#book-title");
var bookAuthCard = document.querySelector("#book-author");
var bookCoverCard = document.querySelector("#book-cover");
var temp = data.results[0].name;
bookButton.addEventListener("click", () => {
    fetch("https://openlibrary.org/subjects/" + temp + ".json?published_in=2000-2021")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var bookTitle = document.createElement('h4');
            var bookAuthor = document.createElement('h4');
            var bookCover = document.createElement('img');


            if (data.work_count == 0) {
                bookTitle.textContent = "Sorry, no books available yet.";
            }
            else
                console.log(data.works[0].title);
            // title and author info
            bookTitle.textContent = data.works[0].title;
            bookAuthor.textContent = data.works[0].authors[0].name;
            bookCover.setAttribute("src", `https://ia600602.us.archive.org/view_archive.php?archive=/10/items/olcovers573/olcovers573-L.zip&file=${data.works[0].cover_id}-L.jpg`);

        })
});


// var searchBook = document.querySelector("#searcher");
// var bookButton = document.querySelector("#bookbutton");

