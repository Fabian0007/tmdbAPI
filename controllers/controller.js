var http = require('http');
var apiKey = "12598c38af2f10ab6066499ccddba71d";
var url = "http://api.themoviedb.org/3";

exports.getPopular = function(req, res) {
	var request =url+"/movie/popular?api_key="+apiKey;
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getTopRated = function(req, res) {
	var request =url+"/movie/top_rated?api_key="+apiKey;
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getLatest = function(req, res) {
	var request =url+"/movie/latest?api_key="+apiKey;
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getInTheaters = function(req, res) {
	var request =url+"/movie/now_playing?api_key="+apiKey;
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getUpComing = function(req, res) {
	var request =url+"/movie/upcoming?api_key="+apiKey;
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getMovie = function(req, res) {
	var request =url+"/movie/"+req.params.id+"d?api_key="+apiKey+"&append_to_response=alternative_titles,credits,releases,videos,similar,reviews,images";
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getPerson = function(req, res) {
	var request =url+"/person/"+req.params.id+"d?api_key="+apiKey+"&append_to_response=alternative_titles,credits,releases,videos,similar,reviews,images";
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getSearch = function(req, res) {
	if ( req.params.page === undefined ) {
      req.params.page = 1;
    }
	var request =url+"/search/multi?api_key="+apiKey+"&query="+req.params.search+"&page="+req.params.page+"&include_adult=false";
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getSearchMovie = function(req, res) {
	if ( req.params.page === undefined ) {
      req.params.page = 1;
    }
	var request =url+"/search/movie?api_key="+apiKey+"&query="+req.params.search+"&page="+req.params.page+"&include_adult=false";
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};

exports.getSearchPerson = function(req, res) {
	if ( req.params.page === undefined ) {
      req.params.page = 1;
    }
	var request =url+"/search/person?api_key="+apiKey+"&query="+req.params.search+"&page="+req.params.page+"&include_adult=false";
	var body="";
	http.get(request, function (response) {
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			res.status(200).send(body);
		});
	});
};
