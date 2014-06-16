//Code example 03-simple-config
module.exports = function(grunt) {

  grunt.initConfig({
    bar: {
      foo: 42
    }
  });

  grunt.registerTask('bar', function() {
    var bar = grunt.config.get('bar')
    ,bazz = bar.foo + 7;
    
    grunt.log.writeln("Bazz is " + bazz);
  });
};