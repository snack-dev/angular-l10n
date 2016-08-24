// Plugins.
var gulp = require('gulp'),
    tslint = require('gulp-tslint');

gulp.task('copy:css', function () {

    return gulp
        .src([
            'node_modules/@angular2-material/core/style/core.css',
            'node_modules/@angular2-material/core/overlay/overlay.css'
        ])
        .pipe(gulp.dest('styles'));

});

// TSLint with Codelyzer.
// https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts
// https://github.com/mgechev/codelyzer
gulp.task('lint', () => {

    var tslintConfig = require('./tslint.json');

    return gulp.src(['app/*.ts', 'app/**/*.ts'])
        .pipe(tslint({
            configuration: tslintConfig,
            tslint: require('tslint').default,
            formatter: 'prose'
        }))
        .pipe(tslint.report());

});

gulp.task('default', ['copy:css', 'lint']);
