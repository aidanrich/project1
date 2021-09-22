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
            genresEl.innerHTML = "Genre type:"+ " " + data.results[index].genres[0].name;
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