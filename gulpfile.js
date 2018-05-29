let gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass   = require('gulp-sass'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin');

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
        .pipe(gulp.dest('assets/css'))
        .pipe(connect.reload());
});

//compress image
gulp.task('compressImg', function(){
  gulp.src('asset-dev/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('assets/images'));
});

//livereload
gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});


// watch
gulp.task('watch', function(){
  gulp.watch('asset-dev/css/**/*.scss', ['styles']);
});

//running default task
gulp.task('default', ['scripts', 'styles', 'watch', 'connect', 'compressImg']);
