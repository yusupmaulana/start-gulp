let gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

// file javascript
gulp.task('scripts', function(){
    gulp.src('asset-dev/js/*.js')
        .pipe(concat('main.min.js'))/*gabung file js jadi satu dgn nama baru*/
        .pipe(uglify())/*minify file js*/
        .pipe(gulp.dest('assets/js'));
});

gulp.task('default', ['scripts']);
