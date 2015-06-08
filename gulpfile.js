var gulp 		= require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    cssmin      = require('gulp-minify-css'),
    prefix      = require('gulp-autoprefixer'),
    size        = require('gulp-size'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify');

gulp.task('sass', function() {
    var onError = function(err) {
      notify.onError({
          title:    "Gulp",
          subtitle: "Failure!",
          message:  "Error: <%= error.message %>",
          sound:    "Beep"
      })(err);
      this.emit('end');
  };

  return gulp.src('sass/**/*.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass({
    	errLogToConsole: true
    }))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix())
    .pipe(gulp.dest('./css/'))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css/'))
    .pipe(notify("Compile and minify complete"))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['sass']);
});