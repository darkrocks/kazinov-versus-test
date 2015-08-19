module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        watch: {
            server: {
                files: [
                    'api/**/*.js',
                    'data/**/*.js'
                ],
                tasks: ['jshint:all', 'simplemocha:server']
            }
        },
        simplemocha: {
            server: {
                src: [
                    'api/**/*.test.js',
                    'data/**/*.test.js'
                ]
            }
        },
        jshint: {
            options: grunt.file.readJSON('.jshintrc'),
            'all': {
                files: {
                    src: [
                        '**/*.js',
                        '!data/database.js',
                        '!**/bower_components/**',
                        '!**/build/**',
                        '!**/node_modules/**'
                    ]
                }
            }
        }
    });
};