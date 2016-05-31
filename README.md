# css-to-string-loader for webpack

A simple webpack loader to convert the output of the [css-loader](https://github.com/webpack/css-loader) back to a string.

This is quite useful for situations where you want webpack to process all of your `@import` and `url()` statements in your stylesheets but still receive the styles in string format for further use in your code base.


## Install

```
npm install css-to-string-loader --save-dev
```


## Usage

[General webpack loader usage](http://webpack.github.io/docs/using-loaders.html)

### Require Statement

``` javascript
var styleString = require('css-to-string-loader!css-loader!./file.css');
```

### Webpack Config
``` javascript
{
  ...
  module: {
    loaders: [
      { test: /\.css$/, loader: 'css-to-string-loader!css-loader' }
    ]
  }
}
```


## Angular 2 Component Styling

This loader was originally created to be used with Angular 2 component styling. The styles array in the component decorator expects an array of strings and the [css-loader](https://github.com/webpack/css-loader) outputs its own custom array object. A common solution was to use the [raw-loader](https://github.com/webpack/raw-loader) to take CSS files or the output of [sass-loader](https://github.com/jtangelder/sass-loader) and convert it to a string. These solutions did not allow for processing of nested resources such as images and font files with minification, cache-busting hashes, or inlining with the [url-loader](https://github.com/webpack/url-loader).

``` javascript
// Angular 2 Component

@Component({
  ...
  styles: [require('./component.scss')],
  ...
})

// Webpack Config

{
  module: {
    loaders: [
      { test: /\.scss/, loader: 'css-to-string-loader!css-loader!sass-loader'}
    ]
  }
}
```

## .toString()

It is also possible to achieve the same result as this loader by calling the custom `.toString()` method implementation on the returned value of the [css-loader](https://github.com/webpack/css-loader). In fact, that is really all this loader does for you. However, by adding this into your loader chain, you don't have to worry about having to write it every time.


## License

[MIT (http://www.opensource.org/licenses/mit-license.php)](http://www.opensource.org/licenses/mit-license.php)