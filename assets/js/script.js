
var search = "sonic"

fetch("https://openlibrary.org/subjects/" + search + ".json?published_in=2000-2021")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        if (data.work_count == 0) {
            console.log("No data");
        }
        else
            console.log(data);
        console.log(data.works[0].title);
        console.log(data.works[0].authors[0].name);


    })