


$(function(){
    $("#gameInfo").hide();
    
    });
    
     var i=1;
    function info(){
        $("#infoGrab").hide();
        $('#infoGrab').css({
            'position' : 'absolute',
            'left' : '50%',
            'top' : '50%',
            'margin-left' : -$('#infoGrab').width()/2,
            'margin-top' : -$('#infoGrab').height()/2,
            "z-index": 99,
            
        });
        $("#infoGrab").fadeIn();
    };
    
    
    
    function tile(){
        let divRemaining = []
        for(let i=1; i<=18;i++){
            divRemaining.push(i)
    
        }
    
        var timer =setInterval(function(){
            if(i<=18){remTile();}
            else{stop();}
            i=i+1;
        },200)
        
        
            function remTile(){
                let randomElement = divRemaining[Math.floor(Math.random() * divRemaining.length)];
                console.log(randomElement);
                $("#box"+randomElement).animate({"opacity":0});
                x = divRemaining.indexOf(randomElement)
                divRemaining.splice(x,1);
                console.log(divRemaining);
                
            }
            function stop(){clearInterval(timer);console.log("exited Interval")}
        
    
        
        
    };
    
    
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
              
            // divStyleEl.append(backgroundImageEl);
            // divStyleEl.append(genresEl);
            // divStyleEl.append(ratingsEl);
    
            // displayInfo.append(divStyleEl);
    
            // code to print fetch data to landing page 
            let url = data.results[index].background_image;
            let title= data.results[index].name;
            $("#box"+index).css({
                "background-image": "url("+ url+")",
                "background-size": "cover",
                "color": "white"
            });
            $("#box"+index).text(title);
    
    
        } 
       
    
        
    
    });