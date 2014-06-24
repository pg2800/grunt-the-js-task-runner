module.exports = function(grunt) {
	grunt.loadTasks('./build/tasks');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		watch: {
			all: {
				options: { 
					event: 'all'
					,debounceDelay: 0/*ms*/
					,livereload: false
				}
				,files: ['src/**/*.js', 'spec/**/*.js', 'Gruntfile.js', '!**/node_modules/**']
				,tasks: ['build']
			}
		}
		,jasmine: {
			all: {
				src: 'src/**/*.js'
				,options: {
					specs: ['spec/**/*.spec.js']
					,keepRunner: true
				}
			}
		}
	});

	grunt.registerTask('default', ['watch']);
};