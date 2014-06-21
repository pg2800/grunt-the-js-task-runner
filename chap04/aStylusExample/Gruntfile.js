module.exports = function (grunt){
	grunt.initConfig({
		watch: {
			all: {
				options: {event: 'all'}
				,files: ['src/**/*.coffee', 'Gruntfile.js', 'package.json', '!**/node_modules/**']
				,tasks: ['build']
			}
		}
		,coffee: {
			build: {
				options: { join: true }
				,src: [
				"src/**/*.coffee"
				,"!src/app.coffee" // removes the app from the middle
				,"src/app.coffee" // adds it back at the end
				]
				,dest: "build/app.js"
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('build', ['coffee']);

	grunt.registerTask("default", ['watch']);
};