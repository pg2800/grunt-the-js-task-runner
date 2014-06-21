module.exports = function (grunt){
	grunt.initConfig({
		build: {
			options: {someOption: "<%= something %>"}
		}
		,watch: {
			all: {
				options: { 
					spawn: false/*new task*/
					,interrupt: false/*new task per file*/
					,debounceDelay: 0/*ms*/
					,event: 'all' // ['added', 'deleted', changed]
					,reload: false //restarts grunt watch when changes it (default). if true: restarts it when any file changes.
					// ,forever: true
					// ,dateFormat: function(time) {
					// 	grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
					// 	grunt.log.writeln('Waiting for more changes...');
					// }
					,atBegin: false //This option will trigger the run of each specified task at startup of the watcher
					,livereload: true //Boolean|Number|Object .. If enabled a live reload server will be started with the watch task per target. Then after the indicated tasks have run, the live reload server will be triggered with the modified files.
					// ,livereload: {
					// 	port: 9000
					// 	,key: grunt.file.read('path/to/ssl.key')
					// 	,cert: grunt.file.read('path/to/ssl.crt')
					// 	// you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
					// }
					// ,cwd: String|Object // I have my doubts ... 
				}
				,files:['**/*.js', '**/*.html', '!**/node_modules/**']
				,tasks:['build']
			}
		}
		,something: 'someValue'
	});
	//
	grunt.loadTasks('./node_modules/build');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};