// Plug-ins.
var gulp = require('gulp'),
    del = require('del');

// Script paths.
var dest = 'dist';

// Clean task: cleans the contents of the distribution directory.
gulp.task('clean', function () {

    return del(dest);

});

// Copy task: copies dependencies.
gulp.task('copy:libs', ['clean'], function () {

    return gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/bundles/angular2-polyfills.min.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.min.js',
        'node_modules/angular2/bundles/angular2.min.js',
        'node_modules/angular2/bundles/http.min.js',
        'node_modules/angular2/bundles/router.min.js',
        'node_modules/angular2localization/bundles/angular2localization.min.js'
    ])
        .pipe(gulp.dest('dist/lib'))

});

gulp.task('default', ['copy:libs']);