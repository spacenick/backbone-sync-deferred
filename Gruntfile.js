
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify:{
      dist:{
        files:{
          'backbone-sync-deferred.min.js': ['backbone-sync-deferred.js']
        }
      }
    }
  });
};