module.exports = function(grunt){

  grunt.initConfig({
    jasmine_node:{
      all: 'spec/'
    },
    jshint:{
      all: ['Gruntfile.js','spec/**/*.js','src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default',['jshint','jasmine_node']);

};