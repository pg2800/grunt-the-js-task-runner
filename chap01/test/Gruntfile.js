module.exports = function (grunt){
	grunt.initConfig({
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
					// This is creating a project.min.css from 1, 2 IN ORDER
					'project.min.css': ['1.css', '2.css'/*, '...'*/]
				}
			}
		}
		,imagemin: {
			dist: {
				options: {
					optimizationLevel: 3
				}
				,files: {
					// 'destination': 'source'
					'dist/img.png': 'src'
					,'dist/img.jpg': 'src/img.jpg'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Comments out the code and also the readme for Github
	grunt.loadNpmTasks('grunt-markdown'); 
	// Sometimes when we debug we forget about console.logs
	// This removes the logs and alerts of anything that might look like a log
	// It is clever
	grunt.loadNpmTasks('grunt-remove-logging'); 
	grunt.registerTask("default", ['jshint', 'uglify', 'cssmin', 'watch', 'markdown', 'removelogging']);
};