const gulp = require('gulp');
const typescript = require('gulp-typescript');
const typescriptProject = typescript.createProject('tsconfig.json');
const { series } = require('gulp');

function transformTS(callback) {
    return typescriptProject.src()
        .pipe(typescriptProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformTS);