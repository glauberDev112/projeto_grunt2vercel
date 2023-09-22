const gulp = require('gulp')
const js_mimi = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const lessC = require('gulp-less')
const ig = require('gulp-ignore-errors')
const replace = require('gulp-replace')
function html(callback) {
    return gulp.src('src/index.html')
        .pipe(replace('@@ENDEREÇO_DO_JS','./scripts/main.js'))
        .pipe(replace('@@ENDEREÇO_DO_CSS','./styles/main.css'))
        .pipe(gulp.dest('dist/'))
        .on('end', callback);
}

function img(callback) {
    return gulp.src('src/images')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
        .on('end', callback);
}

function js(callback) {
    return gulp.src('src/scripts/*.*')
        .pipe(js_mimi())
        .pipe(gulp.dest('dist/scripts'))
        .on('end', callback)
}

function less(callback) {
    return gulp.src('src/styles/*.less')
        .pipe(lessC())
        .pipe(gulp.dest('dist/styles/'))
        .on('end', callback)
}

exports.default = gulp.parallel(html, img, js, less)
