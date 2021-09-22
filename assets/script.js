var requestUrlgames = "https://api.rawg.io/api/games?key=61eab2930fd5479c99f315c0016527b5&dates=2019-09-01,2019-09-30&platforms=18,1,7";

var last3Months = "https://api.rawg.io/api/games?dates=2021-06-01,2021-09-01&platforms=187,4,186&key=61eab2930fd5479c99f315c0016527b5"
var apiKey= "key=61eab2930fd5479c99f315c0016527b5";

var displayInfo = document.getElementById('displayInfo');

fetch(last3Months)
  //fetch is first calling for the URL the promising to wait until it is ready to

  .then(function (response) {
    return response.json();
    
  })
  .then(function (data) {


      
    
    console.log(data);
    for (let index = 0; index < data.results.length; index++) {
        
        
    
          
        
        var gameTitle = document.createElement('p'); 
        var backgroundImageEl = document.createElement('img');       
        var genresEl = document.createElement('p');
        var ratingsEl = document.createElement('p');
        var divStyleEl = document.createElement('div'); 
        backgroundImageEl.setAttribute("src", imageBack);
        
        
        gameTitle.innerHTML = data.results[index].name;
        var imageBack =  data.results[index].short_screenshots[0].image;
          genresEl.innerHTML = data.results[index].genres[0].name;
          ratingsEl.innerHTML = data.results[index].ratings_count;
          
          var ratinngs 
          var generes
          var backgroundImage   
          
        divStyleEl.append(backgroundImageEl);
        divStyleEl.append(genresEl);
        divStyleEl.append(ratingsEl);

        displayInfo.append(divStyleEl);
        
    } 
   

    

});
