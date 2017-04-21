const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


// JS
gulp.task('lint', () => {
  return gulp.src('./src/modal.js')
    .pipe(jshint({esversion: 6}))
    .pipe(jshint.reporter('default'));
});

gulp.task('js', () => {
  return gulp.src('./src/modal.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['js']);