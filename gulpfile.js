var gulp = require('gulp'),
        refresh = require('gulp-livereload');
        watch = require('gulp-watch');
        path = require("path"),
        lr = require('tiny-lr');
        server = lr();

var paths = {
  css: 'css/'
};

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('jekyll', function(){
    require('child_process').spawn('jekyll', ['serve','-w'], {stdio: 'inherit'});

    watch({glob: '/_site'}, function(files) {
      return files.pipe(refresh(server));
    });
});

gulp.task('styles', function() {
      return gulp.src('content/assets/sass/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('content/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('content/assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('_site/*.html', notifyLiveReload);
  gulp.watch('_site/css/*.css', notifyLiveReload);
});

gulp.task('default', ['jekyll', 'livereload', 'watch'], function() {

});

