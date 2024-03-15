
//http://gruntjs.com/plugins

module.exports = function (grunt) {
    // part1: Configuration
    //configures our tasks and tells plugins where to find certain files
    grunt.initConfig({
        concat:{
            js:{
                src:['js/*.js'],
                dest:'build/scripts.js'
            },
            css: {
                //pay attention to the order of files
                src: ['css/reset.css', 'css/bootstrap.css','css/styles.css'],
                dest: 'build/styles.css'
            }
        },
        sass:{
            options: {
                implementation: require('node-sass'),
                
            },
            build:{
                files:[{
                    src:'css/sass/styles.scss',
                    dest:'css/styles.css'
                }]
            }
        },
        uglify:{
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }

        }
    });
//part 2:Load pludins into the file(eg:uglify)
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')


    // part 3: Register tasks which need to be ran
    //sample:
    // grunt.registerTask('run', function () {
    //     console.log('I am running')
    // });

    // grunt.registerTask('sleep', function () {
    //     console.log('I am sleeping')
    // });
    // grunt.registerTask('all', ['run','sleep']);
    
    grunt.registerTask('concat-js', ['concat:js']);//grunt concat-js,only concate js in configuration
    grunt.registerTask('concat-css', ['concat:css']);
    
};
