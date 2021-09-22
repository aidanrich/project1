var requestUrlgames = "https://api.rawg.io/api/games?key=61eab2930fd5479c99f315c0016527b5&dates=2019-09-01,2019-09-30&platforms=18,1,7";

var last3Months = "https://api.rawg.io/api/games?dates=2021-06-01,2021-09-01&platforms=187,4,186&key=61eab2930fd5479c99f315c0016527b5"
var apiKey= "key=61eab2930fd5479c99f315c0016527b5";

fetch(last3Months)
  //fetch is first calling for the URL the promising to wait until it is ready to

  .then(function (response) {
    return response.json();
    
  })
  .then(function (data) {

    for (let index = 0; index < data.length; index++) {
        
        var backgroundImageEl = $('<img>');
        backgroundImageEl.setAttribute("src", iconurl);
        var genresEl = $('<p>');
        var ratingsEl = $('<p>');
        var divStyleEl = $('<div>')



        var ratinngs 
        var generes
        var backgroundImage
        
        backgroundImageEl.innerHTML= data.results[index].background_image;
        genresEl.innerHTML = data.results[index].genres;
        ratingsEl.innerHTML = data.results[index].ratings_count;

        divStyleEl.append(backgroundImageEl);
        divStyleEl.append(genresEl);
        divStyleEl.append(ratingsEl);
        
        
    }  

    console.log(data);

});
