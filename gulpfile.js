let gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass   = require('gulp-sass');

// file javascript
gulp.task('scripts', function(){
    gulp.src('asset-dev/js/*.js')
        .pipe(concat('main.min.js'))/*gabung file js jadi satu dgn nama baru*/
        .pipe(uglify())/*minify file js*/
        .pipe(gulp.dest('assets/js'));
});

// file stylesheet
gulp.task('styles', function(){
    gulp.src('asset-dev/css/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))/*untuk compile dan minify sass*/
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['scripts', 'styles']);
