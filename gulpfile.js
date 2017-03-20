var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('gulp-webpack');

var SRC_SCRIPTS = 'src/**/*.js';

gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('babel', function () {
    return gulp.src(SRC_SCRIPTS)
        .pipe(babel({
            presets: ['react', 'es2015']
        }))
        .pipe(gulp.dest('www/'));
});

gulp.task('watch', function () {
    gulp.watch(SRC_SCRIPTS, ['webpack:dev']);
})

gulp.task('webpack:dev', function () {
    return gulp
        .src(['./src/'])
        .pipe(webpack(require('./webpack.dev.config.js')))
        .pipe(gulp.dest("www"));
});

gulp.task('default', ['webpack:dev', 'watch']);