# Angular 2 Localization
> An Angular 2 library to translate messages, dates and numbers.

## Sample app
[Sample app](http://robisim74.github.io/angular2localization) built with Angular 2 Material, AoT compilation & webpack.

## Running locally the sample app
- For development, we use _JiT compilation_ & source map files, with files watching:
```Shell
npm install

npm start
```
Make the changes, and simply refresh the page on the browser.

- For production, we use _AoT compilation_, tree shaking & minification:
```Shell
npm run build
```

- Running the sample test:
```Shell
npm test
```
_N.B. If you get errors when installing the packages, make sure you've updated node and npm to the latest version: https://docs.npmjs.com/getting-started/installing-node_

## Links
- [Material Design for Angular 2](https://github.com/angular/material2)
- [AHEAD-OF-TIME COMPILATION](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
- [Building an Angular 2 Application for Production](http://blog.mgechev.com/2016/06/26/tree-shaking-angular2-production-build-rollup-javascript/)
- [Angular 2 AOT (Ahead Of Time) offline compilation example with Webpack](https://github.com/blacksonic/angular2-aot-webpack)
- [angular-router-loader](https://github.com/brandonroberts/angular-router-loader)
