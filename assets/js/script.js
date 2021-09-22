
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
        var bookCover = document.createElement('img');
        bookCover.setAttribute("src", `https://ia600602.us.archive.org/view_archive.php?archive=/10/items/olcovers573/olcovers573-L.zip&file=${data.works[0].cover_id}-L.jpg`);

    })