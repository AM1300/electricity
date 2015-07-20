module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        connect: {
            dev: {
                options: {
                    port: 8888,
                    base: '.',
                    keepalive: true,
                    hostname: '*' // to allow access to server from outside
                }
            }
        }
    });

    // Import already installed tasks from npm
    grunt.loadNpmTasks('grunt-contrib-connect');

    // [DEFAULT] Run in dev mode
    grunt.registerTask('run-dev-server', [
        'connect:dev'
    ]);

    // Default task
    grunt.registerTask('default', ['run-dev-server']);
};