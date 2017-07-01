var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    cors = require('cors');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

//controllers
var controller = require('./controllers/controller');

// Default route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("API REST TMDB");
});
app.use(router);

// API routes
//router movie
var movie = express.Router();

movie.route('/movie/popular')
  .get(controller.getPopular)
  
movie.route('/movie/top_rated')
  .get(controller.getTopRated)
  
movie.route('/movie/latest')
  .get(controller.getTopRated)

movie.route('/movie/now_playing')
  .get(controller.getTopRated)
  
movie.route('/movie/upcoming')
  .get(controller.getTopRated)
  
movie.route('/movie/:id')
  .get(controller.getMovie)

app.use('', movie);

//router person
var person = express.Router();

person.route('/person/:id')
  .get(controller.getPerson)

app.use('', person);

//router search
var search = express.Router();

search.route('/search/multi/:search/:page')
  .get(controller.getSearch)

search.route('/search/movie/:search/:page')
  .get(controller.getSearchMovie)

search.route('/search/person/:search/:page')
  .get(controller.getSearchPerson)

app.use('', search);

// Start server
app.listen(process.env.PORT, function() {
  console.log("Node server running on http://localhost:"+process.env.PORT);
});