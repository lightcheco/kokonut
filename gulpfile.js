var gulp = require('gulp'),
jsObfuscate = require('gulp-javascript-obfuscator'),
html = require('gulp-htmlmin'),
css = require('gulp-cssnano'),
clean = require('gulp-clean'),
images = require('gulp-imagemin')
;
// jsHint = require('gulp-jshint')


/* Minify HTML */
gulp.task('html', function () {
return gulp.src('app/**/*.html')
    .pipe(html({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});

/* Minify CSS */
gulp.task('css', function () {
return gulp.src('app/assets/css/*.css')
    .pipe(css())
    .pipe(gulp.dest('dist/assets/css/'));
});

/* JS Obfuscator */
gulp.task('jsObfuscate', function () {
return gulp.src('app/assets/js/*.js')
    .pipe(jsObfuscate({
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: false,
        deadCodeInjectionThreshold: 0.4,
        debugProtection: false,
        log: false
    }))
    .pipe(gulp.dest('dist/assets/js/'));
});

/* Image compressor */
gulp.task('images', function () {
return gulp.src('app/assets/images/*.*')
    .pipe(images())
    .pipe(gulp.dest('dist/assets/images/'));
});

/* Copy libraries and assets */
gulp.task('copyAssets', function () {
return new Promise(function (resolve, reject) {
    gulp.src('app/assets/libraries/**/*.*').pipe(gulp.dest('dist/assets/libraries/'));
    resolve();
});
});

/* Clean Dist folder */
gulp.task('clean', function () {
return gulp.src('dist/*', {
        read: false
    })
    .pipe(clean());
});

gulp.task('prod',
gulp.series('clean', 
    gulp.parallel('html', 'images', 'copyAssets', 'css'), 'jsObfuscate'   
)
);
