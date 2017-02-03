// Imports
var gulp = require('gulp');
var clean = require('gulp-clean');
var injectPartials = require('gulp-inject-partials');


gulp.task('clean', function () {
    return gulp
        .src([
            './dist'
        ], { read: false })
        .pipe(clean())
});

gulp.task('copyAssets', ['clean'], function () {
    return gulp
        .src('./src/assets/**')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('compile', ['copyAssets'], function () {
  return gulp.src('./src/**/*.html')
           .pipe(injectPartials())
           .pipe(gulp.dest('./dist'));
});
