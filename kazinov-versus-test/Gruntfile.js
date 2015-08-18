module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            server: {
                files: [
                    'api/**/*.js',
                    'data/**/*.js'
                ],
                tasks: ['simplemocha:server']
            }
        },
        simplemocha: {
            server: {
                src: [
                    'api/**/*.test.js',
                    'data/**/*.test.js'
                ]
            }
        }
    });
};