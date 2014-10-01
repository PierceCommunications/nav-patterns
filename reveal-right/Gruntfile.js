module.exports = function(grunt) {
	// load tasks
	grunt.loadNpmTasks('grunt-contrib-sass');

	// config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			prod: {
				options: {
					style: 'expanded',
					//noCache: true
				},

				files: {
					'reveal-right.css': 'reveal-right.scss'
				}
			}
		}
	});

	grunt.registerTask('default', ['sass']);
};

