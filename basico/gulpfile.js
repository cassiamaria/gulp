const gulp = require('gulp');
const { series, parallel } = require('gulp');

function taskOne(callback) {
    console.log('Tarefa 1!');
    return callback();
}

function taskTwo(callback) {
    console.log('Tarefa 2!');
    return callback();
}

function copy(callback) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB')) 
    return callback();
}

function end(callback) {
    console.log('Tarefa fim!');
    return callback();
}

module.exports.default = series(
    parallel(taskOne, taskTwo),
    copy,
    end
);