const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

function servidor() {
    return gulp.src('public')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos() {
    watch('src/**/*.html', () => gulp.series('base')())
    watch('src/**/*.css', () => gulp.series('css')())
    watch('src/**/*.js', () => gulp.series('javascript')())
}

module.exports = {
    monitorarArquivos,
    servidor
}