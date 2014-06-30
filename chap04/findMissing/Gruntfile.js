module.exports = function (grunt){
	grunt.initConfig({
		watch: {
			all: {
				options: { event: 'all' }
				,files: ['**/*.js', '!**/node_modules/**']
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

	grunt.loadTasks('./build/tasks');
	grunt.loadNpmTasks('grunt-contrib-watch')

	grunt.registerTask('default', ['watch']);
};