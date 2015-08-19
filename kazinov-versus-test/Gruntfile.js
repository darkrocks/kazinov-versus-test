module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        watch: {
            server: {
                files: [
                    'src/server/**/*.js'
                ],
                tasks: ['jshint:all', 'simplemocha:server']
            }
        },
        simplemocha: {
            server: {
                src: [
                    'src/server/**/*.test.js'
                ]
            }
        },
        jshint: {
            options: grunt.file.readJSON('.jshintrc'),
            'all': {
                files: {
                    src: [
                        '**/*.js',
                        '!src/server/data/database.js',
                        '!**/bower_components/**',
                        '!**/build/**',
                        '!**/node_modules/**'
                    ]
                }
            }
        }
    });
};