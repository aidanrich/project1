var requestUrl = "https://api.rawg.io/api/platforms?key=61eab2930fd5479c99f315c0016527b5";
    
var requestUrl2 = "https://api.rawg.io/api/games?key=61eab2930fd5479c99f315c0016527b5&dates=2019-09-01,2019-09-30&platforms=18,1,7";

var apiKey= "key=61eab2930fd5479c99f315c0016527b5";

fetch(requestUrl)
  //fetch is first calling for the URL the promising to wait until it is ready to

  .then(function (response) {
    return response.json();
    
  })
  .then(function (data) {
      
    console.log(data);

});
