module.exports = function(grunt){

  grunt.initConfig({
    jasmine_node:{
      all: 'spec/'
    },
    jshint:{
      uses_defaults: ['Gruntfile.js','spec/**/*.js'],
      with_overrides:{
        options: {
          maxstatements: 6,
          maxlen: 80,
          maxdepth: 1,
          maxparams: 2,
          maxcomplexity: 3
        },
        files: {
          src: ['src/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default',['jshint','jasmine_node']);

};