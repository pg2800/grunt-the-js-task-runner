module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			all: {
				options: { event: 'all' }
				,files: ['src/**/*.js', '!**/node_modules/**']
				,tasks: ['build']
			}
		}
		,jasmine: {
			all: {
				src: 'src/**/*.js'
				,options: {
					specs: ['spec/**/*.spec.js', '!spec/**/task/**']
					,keepRunner: true
				}
			}
		}
	});

	grunt.loadTasks(['./node_modules/tasks']);
	grunt.loadNpmTasks(['grunt-contrib-watch']);
	grunt.registerTask('default', ['watch']);
};