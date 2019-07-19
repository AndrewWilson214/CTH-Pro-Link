let slidenum = process.argv[2]; /* what the user enters as first argument */

if(slidenum == null){
	const setup = require('./setup.js');
	setup();
}else{
	const changeslide = require('.'); /* the current working directory so that means main.js because of package.json */
	changeslide(slidenum);
}