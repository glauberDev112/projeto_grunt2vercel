module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                },
                tasks: ['less:development']
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/*.less'],
                tasks: ['less:development']
            },
            build: {
                files: ['src/**/**/*.html','src/styles/*.less'],
                tasks: ['less:development','htmlmin:dist','replace:dev','clean','uglify']
            } 
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDEREÇO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDEREÇO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('test',['htmlmin'])
    grunt.registerTask('build', ['watch:build'])
}