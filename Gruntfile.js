module.exports = function(grunt) {
    
    //Initializing the configuration object
    grunt.initConfig({
        // get the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),

        //Task configuration
        concat: {
            options: {
                separator: '\n/*************/\n'
            },
            concatMainJS: {
                src: ['./js/app/*.js', './js/app/**/*.js'],
                dest: './js/flightSearchEngineMain/flightSearchEngineMain.js'
            }
        },
        watch: {
            concatJS: {
                files: ['./js/app/*.js', './js/app/**/*.js'], //watched files
                tasks: ['concat:concatMainJS'], //tasks to run
                options: {
                    livereload: false //reloads the browser
                }
            }
        },
        karma: {
            unit: {
                configFile: './karma.conf.js'
            }
        }
    });

    grunt.registerTask('install', ['npm-install']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['concat']);

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-npm-install');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
};
    