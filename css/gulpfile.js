const { parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifyCSS = require('gulp-uglifycss');
const concat = require('gulp-concat');

function transformCSS(callback) {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifyCSS({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copy() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build')) 
}

exports.default = parallel(transformCSS, copy);