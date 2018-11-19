var express = require('express');

var app = express();

app.set('view engine','ejs');

app.use(express.static(__dirname + "/public"))

app.get("/", function(request, response){
  response.render('home', {
    headline : "Every City Has Its Own Pecular Thing....",
    title : "I Love My City"
  });
});

app.get("/:city", function(request, response){
  var city = request.params.city;
  var title, headline;
  var imagesCount = 4;
  console.log(city);
  switch(city){
    case "aurangabad":
      title = "Aurangabad";
      headline = "The city is a tourism hub, surrounded by many historical monuments."
      break;
    case "pune":
      title = "Pune";
      headline = "Pune is considered to be the cultural capital of Maharashtra";
      break;
    case "nashik":
      title = "Nashik";
      headline = "An ancient holy city in Maharashtra, is Nashik"
      break;
    case "mumbai":
      title = "Mumbai";
      headline = "A financial center, it's India's largest city, is Mumbai";
      break;
    default:
      break;
  }
  response.render('city', {
    titleCity : title,
    heading : headline,
    numberOfImages : imagesCount,
    cityName : city
  });

});

var PORT = 8080;
app.listen(PORT, function(request, response){
  console.log("Started instance on localhost:" + PORT);
});

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');



