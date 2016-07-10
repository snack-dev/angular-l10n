// Plugins.
var gulp = require('gulp'),
    tslint = require('gulp-tslint');

// TSLint with Codelyzer.
// https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts
// https://github.com/mgechev/codelyzer
gulp.task('lint', () => {

    var tslintConfig = require('./tslint.json');

    return gulp.src(['app/*.ts', 'app/**/*.ts'])
        .pipe(tslint({
            tslint: require('tslint').default,
            configuration: tslintConfig
        }))
        .pipe(tslint.report('prose', { emitError: true }));

});

gulp.task('default', ['lint']);
