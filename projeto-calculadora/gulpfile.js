const { src, dest, parallel, series } = require('gulp');
const { monitorarArquivos, servidor } = require('./server/server');
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglifyJS = require('gulp-uglify');
const uglifyCSS = require('gulp-uglifycss');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cssimport = require('gulp-cssimport');
const htmlmin = require('gulp-htmlmin')

function base() {
    return src('src/templates/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('public/'));
}

function javascript() {
    return src('src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglifyJS())
    .pipe(rename({
        extname: '.min.js',
    }))
    .pipe(dest('public/assets/js'));
}

function css() {
    return src('src/css/*.css')
    .pipe(cssimport())
    .pipe(sass())
    .pipe(uglifyCSS())
    .pipe(rename({
        extname: '.min.css',
    }))
    .pipe(dest('public/assets/css'));
}

gulp.task('base', base)
gulp.task('css', css)
gulp.task('javascript', javascript)


module.exports.default = series(
    parallel(base, javascript, css),
    servidor,
    monitorarArquivos
)