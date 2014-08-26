var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    coffee = require('gulp-coffee'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

gulp.task('default', ['sass', 'coffee'], function() {
  console.log("Build ready.");
});

gulp.task('sass', function() {
  gulp.src('./assets/stylesheets/sass/*.scss')
    .pipe(sass())
    .pipe(prefix("last 2 version", "ie 9"))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('./assets/stylesheets'));
});

gulp.task('coffee', function() {
  gulp.src('./assets/javascripts/coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/javascripts'));
});