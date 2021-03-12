var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var newFriend = 
		{	"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/500/500/people"			
		}
	data.friends.push(newFriend)
	console.log(data);
	response.render("index", data);
 }