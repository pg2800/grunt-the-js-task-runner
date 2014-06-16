//Code example 02-simple-task
module.exports = function(grunt) {

  grunt.registerTask('foo', function() {
    grunt.log.writeln('foo is running...');
  });

};