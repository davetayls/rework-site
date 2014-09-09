
module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    myth: {
      options: {
        sourcemap: false
      },
      dist: {
        files: {
          'dist/index.css': 'src/index.css'
        }
      }
    },
    stripmq: {
      options: {
        width: 1024,
        type: 'screen'
      },
      old: {
        files: {
          'dist/nomq.css': 'dist/index.css'
        }
      }
    }
  });

};
