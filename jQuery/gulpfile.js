// ------ proces instalacije gulpa i browser-synca u projekt ------------
// 1. instaliraj gulp --> npm install --save-dev gulp
// 2. instaliraj browser-sync --> npm install browser-sync gulp --save-dev
// 3. napravi gulpfile.js u rootu projekta i dodaj kod ispod

// pozivamo nužne datoteke (gulp i browser-sync)
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// obavezan task za funkcioniranje gulp-a
gulp.task('default', function() {
  console.log("Gulp i browser-sync rade");
});

// pokrećemo browser-sync u root folderu (definiramo baseDir)
browserSync.init({
    server: {
        baseDir: "./"
    }
});
// gulp prati sve datoteke u folderu /provjeri do koje dubine/ a browser-sync na svaku promjenu restarta browser
gulp.watch('./**/**/**/**/**/*.*').on('change', browserSync.reload);
