module.exports = function (grunt){
	grunt
	.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,uglify: {
			options: {
				banner: '/*! <%= pkg.name %>'
				+ ' <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}
			,dist: {
				src: '<%= pkg.name %>.js'
				,dest: '<%= pkg.name %>.<%= pkg.version %>.min.js'
			}
		}
		,cssmin: {
			compress: {
				options: {
					banner: '<%= banner %>'
				}
				,files: {
					'project.min.css': ['1.css', '2.css'/*, '...'*/]
				}
			}
		}
	})
	.loadNpmTasks('')
	.registerTask("default");
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.registerTask("default", ['jshint', 'uglify']);
};