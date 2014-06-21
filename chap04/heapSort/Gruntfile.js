module.exports = function (grunt){
	grunt.loadTasks('./spec/task');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		watch: {
			all: {
				options: {
					event: 'all'
					,debounceDelay: 0/*ms*/
					,livereload: false
				}
				,files: ['src/**/*.js', 'spec/**/*.spec.js', 'Gruntfile.js', 'package.json', '!**/node_modules/**'/*, '!.grunt', '!_SpecRunner.html'*/]
				,tasks: ['tests']
			}
		}
		,jasmine: {
			testdev: {
				src: 'src/**/*.js'
				,options: {
					specs: ['spec/**/*.spec.js', '!spec/**/task/**']
					,keepRunner: true
				}
			}
		}
	});

	grunt.registerTask('default', ['watch']);
};