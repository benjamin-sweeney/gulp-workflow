var gulp = require('gulp');
var sass = require('gulp-sass');

//Compile SASS to CSS
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});