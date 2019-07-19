var fs = require('fs');
const os = require('os');
var mkdirp = require('mkdirp');

var dir = os.homedir() + "\\AppData\\Roaming\\ProPresenter";

module.exports = function(){
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	});
	readline.question(`Enter ProPresenter Network Name: `, (name) => {
		readline.question(`Enter ProPresenter network port: `, (port) => {
			readline.question(`Enter ProPresenter controller password: `, (password) => {
				var data = {"name": name, "port": port, "password": password};
				var json = JSON.stringify(data);
				mkdirp(dir, function(err){
					if(err){ console.log(err); }else{			
						fs.writeFile(dir + "\\config.json", json, (err) => {
							if (err) { console.log(err); } else {
								console.log("Successfully saved configuration. You may now close this window.");
							}
						});
					}
				});
			});
		});
	});
}