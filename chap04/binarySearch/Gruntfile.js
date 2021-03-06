module.exports = function (grunt){
	grunt.initConfig({
		watch: {
			all: {
				options: { event: 'all' }
				,files: ['src/**/*.js', 'build/**/*.js', 'specs/**/*.js', 'Gruntfile.js', '!**/node_modules/**']
				,tasks: ['build']
			}
		}
		,jasmine: {
			all: {
				src: 'src/**/*.js'
				,options: {
					specs: ['specs/**/*.spec.js']
					,keepRunner: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadTasks('./build/tasks');
	grunt.registerTask('default', ['watch']);
};