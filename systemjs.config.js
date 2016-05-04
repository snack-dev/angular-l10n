(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        '@angular2-material': 'node_modules/@angular2-material',
        'angular2localization': 'node_modules/angular2localization'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2localization': { defaultExtension: 'js' },
        '@angular2-material/core': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'core.js'
        },
        '@angular2-material/sidenav': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'sidenav.js'
        },
        '@angular2-material/toolbar': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'toolbar.js'
        },
        '@angular2-material/card': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'card.js'
        },
        '@angular2-material/button': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'button.js'
        },
        '@angular2-material/radio': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'radio.js'
        },
        '@angular2-material/input': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'input.js'
        },
        '@angular2-material/list': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'list.js'
        }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);