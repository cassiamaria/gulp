const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const { series } = require('gulp');

function transformJS(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            //vai barrar que os comentários sejam transferidos para o arquivo final.
            comments: false,
            //vai pegar o JS mais novo possível, posso passar também, por exemplo ES5
            presets: ["env"]
        }))
        //pega todo o código e minifica
        .pipe(uglify())
        //vai ser passado como parâmetro o arquivo que será gerado no final
        .pipe(concat('codigo.min.js'))
        //qual será o destino
        .pipe(gulp.dest('build'))
    return callback();
}

exports.default = series(transformJS);