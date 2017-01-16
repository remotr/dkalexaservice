var AlexaAppServer = require("../index.js");
AlexaAppServer.start({
	server_root:__dirname,     // Path to root
	public_html:"public_html", // Static content
	app_dir:"apps",            // Where alexa-app modules are stored
	app_root:"/alexa/",        // Service root
	port:3000
	// Use preRequest to load user data on each request and add it to the request json.
	// In reality, this data would come from a db or files, etc.
	,preRequest: function(json,req,res) {
		console.log("Stuff running...");
		//json.userDetails = { "name":"Bob Smith" };
	}
	// Add a dummy attribute to the response
	,postRequest: function(json,req,res) {
		//json.dummy = "text";
	}
});
