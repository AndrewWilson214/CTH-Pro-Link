//===----------------------------------------------------------------------===//
//
// Copyright (c) 2019 Andrew Wilson
// Licensed under GNU General Public License
//
// Based on Github repository: https://github.com/jeffmikels/ProPresenter-API by Jeff Mikels
//
//===----------------------------------------------------------------------===//

var fs = require('fs');
var ws = require('nodejs-websocket');
const os = require('os');
var socket;
var host = '';
var port = '';
var password = '';
var slideIndex;
var activePresentation;
var activePlaylist;
var playlists;
var controlling = true;
var libraries = [];
var newSlideNum = 0;

function err(s) {
    console.log(s);
    return false;
}

function check_socket() {
    if (!socket) return err('SOCKET NOT CONNECTED');
    if (socket.readyState != 1) return err('SOCKET NOT READY');
    return true;
}

function go() {
    socket = ws.connect(`ws://${host}:${port}/remote`, null, authenticate);
    listen();
}

function listen() {
    socket.on("text", function(str) {
        console.log("Recieved " + str);
        var msg = JSON.parse(str);

        switch (msg.action) {
            case "authenticate":
                controlling = (msg.controller == 1);
                //text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
                trigger_slide();
                break;
            case "libraryRequest":
                libraries = msg.library;
                break;
            case "playlistRequestAll":
                playlists = msg.playlistAll;
                break;
            case "presentationSlideIndex":
                slideIndex = msg.slideIndex;
                break;
            case "presentationTriggerIndex":
                console.log("okay");
                process.exit();
                activePresentation = msg.presentationPath;
                /*for (i=0; i < msg.users.length; i++) {
                	ul += msg.users[i] + "<br>";
                }*/
                //document.getElementById("userlistbox").innerHTML = ul;
                break;
        }
    });
    //socket.listen(49883);
}


function emit(obj, changeSlide = false) {
    var json = JSON.stringify(obj);
    if (check_socket()) socket.sendText(json);
    else return err('SOCKET EMIT FAILED');
}

function authenticate() {
    emit({
        action: 'authenticate',
        protocol: '600',
        password: password
    });
}

function get_libraries() {
    emit({
        action: 'libraryRequest'
    })
}

function get_playlists() {
    emit({
        action: 'playlistRequestAll'
    });
}

function get_playlist() {

}

function get_presentation(name, path) {
    emit({
        "action": "presentationRequest",
        "presentationName": name,
        "presentationPath": path,
        "presentationSlideQuality": 25
    });
}

function get_slide() {
    emit({
        "action": "presentationSlideIndex"
    });
}

function trigger_slide() {
    emit({
        'action': 'presentationTriggerIndex',
        'slideIndex': newSlideNum
    }, true);
}


module.exports = function(slideNum){
	var dir = os.homedir + "\\AppData\\Roaming\\ProPresenter";
	fs.readFile(dir + "\\config.json", function(err, buf){
		if(err){
			console.log("Have you run the set-up process yet? Probably not, since this error was returned: ");
			console.log(err);
		}else{
			var json = buf.toString();
			var data = JSON.parse(json);
			host = data.name;
			port = data.port;
			password = data.password;
			newSlideNum = slideNum - 1;
			go();
		}
	});
}