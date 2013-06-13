grunt.loadNpmTasks('grunt-contrib-concat');

module.exports = function(grunt) {
  uglify:{
    dist:{
      'backbone-sync-deferred.min.js': ['backbone-sync-deferred.js']
    }
  }
};

grunt.registerTask('build', ['concat', 'uglify']);