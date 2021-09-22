

fetch("https://openlibrary.org/subjects/" + typeArea.value + ".json?published_in=2000-2021")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })