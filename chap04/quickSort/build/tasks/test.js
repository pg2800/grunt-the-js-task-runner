module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.registerTask('test', ['jasmine']);
};