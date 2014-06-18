var fs = require('fs');
module.exports = function (grunt){
	// console.log(grunt.task);
	// console.log(this === grunt);
	grunt.registerTask("default", function (){
		var current = this;
		console.log(current);

	});
};